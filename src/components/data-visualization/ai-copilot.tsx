'use client'

import { useState, useEffect } from 'react'
import { Bubble, Sender, useXChat, useXAgent } from '@ant-design/x'
import OpenAI from 'openai'
import { CSVData } from '@/types/csv'
import { Typography } from 'antd'
import MarkdownIt from 'markdown-it'
import { UserOutlined, RobotOutlined } from '@ant-design/icons'

// 消息样式
const assistantStyle = {
  avatar: {
    color: '#fff',
    backgroundColor: '#1677ff',
  },
  bubble: {
    backgroundColor: '#f0f9ff',
    borderColor: '#bae6fd',
  },
  content: {
    color: '#1e40af',
  },
}

const userStyle = {
  avatar: {
    color: '#fff',
    backgroundColor: '#10b981',
  },
  bubble: {
    backgroundColor: '#f0fdf4',
    borderColor: '#86efac',
  },
  content: {
    color: '#166534',
  },
}

const hideAvatar = {
  visibility: 'hidden' as const,
}

// 初始化 markdown 解析器
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

// 初始化 OpenAI 客户端
const openai = new OpenAI({
  baseURL: 'https://aigc.sankuai.com/v1/openai/native',
  apiKey: '1797875959782527043',
  dangerouslyAllowBrowser: true,
})

interface AICopilotProps {
  data: CSVData
}

// Markdown 渲染组件
const renderMarkdown = (content: string) => (
  <Typography>
    <div
      className="prose prose-sm max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{
        __html: md.render(content || ''),
      }}
    />
  </Typography>
)

export function AICopilot({ data }: AICopilotProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isFirstAnalysis, setIsFirstAnalysis] = useState(true)

  const [agent] = useXAgent({
    request: async (info, callbacks) => {
      const { messages, message } = info
      const { onUpdate, onSuccess, onError } = callbacks

      let content = ''
      setErrorMessage(null)

      try {
        // 验证输入消息
        if (!message?.trim()) {
          throw new Error('请输入有效的问题')
        }

        console.log('发送请求到 OpenAI:', {
          message,
          historyLength: messages.length,
          data: data.rows.length
        })

        // 构建系统提示词
        const systemPrompt = `你是一个专业的数据分析助手。你将帮助用户分析用户流转数据。

## 主要指标说明
- current_user: 当前用户数（今日活跃且过去7天内至少活跃1次的用户）
- new_user: 新用户数（首次使用应用的用户）
- reactivated_user: 重新激活用户数（首次回访的用户）
- resurrected_user: 复活用户数（首日回访的用户）
- at_risk_waus: 周活跃用户流失风险数（今日不活跃，但过去1-6天活跃的用户）
- at_risk_maus: 月活跃用户流失风险数（今日不活跃，过去1-6天不活跃，但过去7-29天活跃的用户）
- dead_users: 流失用户数（今日及过去29天不活跃的用户）

## 转化率指标说明
- RURR: 重新激活用户留存率
- SURR: 复活用户留存率
- CURR: 当前用户留存率
- NURR: 新用户留存率
- iWAURR: 周活跃用户挽回率
- iMAURR: 月活跃用户挽回率

## 数据分析要求
1. 请使用 Markdown 格式回复, 请避免使用标题格式
2. 可以使用表格、列表、引用等格式来展示数据分析结果
3. 重点关注用户流失和留存情况
4. 提供具体的数据洞见和改进建议
5. 如果发现数据异常，请指出并分析可能的原因

请根据这些数据，帮助用户分析用户流转情况，提供数据洞见。`

        // 确保每个消息都有正确的角色和内容
        const formattedMessages = messages
          .filter(msg => msg.message?.trim())
          .map(msg => ({
            role: msg.role === 'assistant' ? 'assistant' : 'user',
            content: msg.message.trim()
          }))

        const requestMessages = [
          { role: 'system', content: systemPrompt },
          ...formattedMessages,
          { role: 'user', content: message.trim() }
        ]

        // 验证所有消息
        const invalidMessage = requestMessages.find(msg => !msg.content)
        if (invalidMessage) {
          throw new Error('消息内容不能为空')
        }

        console.log('OpenAI 请求消息:', JSON.stringify(requestMessages, null, 2))

        // 创建对话流
        const response = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: requestMessages,
          stream: true,
          temperature: 0.7,
          max_tokens: 1000,
        })

        console.log('OpenAI 流创建成功')

        // 处理流式响应
        for await (const chunk of response) {
          const delta = chunk.choices[0]?.delta?.content || ''
          content += delta
          onUpdate(content)
        }

        console.log('OpenAI 响应完成:', { contentLength: content.length })
        onSuccess(content)
      } catch (error) {
        console.error('AI 响应错误:', error)
        const errorMsg = error instanceof Error ? 
          `${error.name}: ${error.message}` : 
          '未知错误'
        setErrorMessage(`请求失败: ${errorMsg}`)
        onError()
      }
    },
  })

  const { messages, onRequest } = useXChat({ agent })

  // 监听数据变化，自动发送初步分析请求
  useEffect(() => {
    if (data.rows.length > 0 && isFirstAnalysis) {
      setIsFirstAnalysis(false)
      const initialAnalysisPrompt = `当前上传的数据
\`\`\`csv
metric_name,metric_value
${data.rows.map(row => `${row.metric_name},${row.metric_value}`).join('\n')}
\`\`\`

请对上述数据进行初步分析，包括：

1. 用户总体情况概述
   - 总用户规模
   - 活跃用户情况
   - 流失用户情况

2. 关键指标分析
   - 用户留存率（RURR、SURR、CURR、NURR）分析
   - 用户挽回率（iWAURR、iMAURR）分析
   - 异常指标识别

3. 最需要关注的问题
   - 识别关键风险点
   - 分析问题原因
   - 影响程度评估

4. 改进建议
   - 短期优化方向
   - 中长期改进计划
   - 预期效果评估

请用数据支撑你的分析，并突出关键发现。`
      onRequest(initialAnalysisPrompt)
    }
  }, [data.rows.length, isFirstAnalysis, onRequest])

  const items = messages.map(({ message, id, role }, index) => {
    const isAssistant = role === 'assistant'
    const prevRole = index > 0 ? messages[index - 1].role : null
    const showAvatar = prevRole !== role

    return {
      key: id,
      content: message || '',
      messageRender: renderMarkdown,
      placement: isAssistant ? 'start' : 'end',
      styles: {
        ...(isAssistant ? assistantStyle : userStyle),
        bubble: {
          ...(isAssistant ? assistantStyle.bubble : userStyle.bubble),
          maxWidth: '85%',
          padding: '12px 16px',
        },
      },
      avatar: {
        icon: showAvatar ? (isAssistant ? <RobotOutlined /> : <UserOutlined />) : undefined,
        style: {
          ...(showAvatar ? (isAssistant ? assistantStyle.avatar : userStyle.avatar) : hideAvatar),
          width: 32,
          height: 32,
          fontSize: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        },
      },
    }
  })

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <RobotOutlined className="text-blue-500" />
          AI 数据分析助手
        </h2>
        <p className="text-sm text-gray-600">我可以帮你分析用户流转数据，提供数据洞见</p>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-gray-50">
        <Bubble.List items={items} />
        {errorMessage && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="p-4 border-t bg-white">
        <Sender 
          onSubmit={onRequest} 
          placeholder="输入你的问题..."
          sendButtonProps={{
            children: '发送',
            type: 'primary',
          }}
        />
      </div>
    </div>
  )
} 