'use client'

import { UploadSection } from '@/components/csv-upload/upload-section'
import { UserFlowChart } from '@/components/data-visualization/user-flow-chart'
import { AICopilot } from '@/components/data-visualization/ai-copilot'
import { useCSVStore } from '@/lib/store/csv-store'

export default function Home() {
  const { csvData } = useCSVStore()

  return (
    <main className="min-h-screen p-4">
      <div className="flex gap-4 h-[calc(100vh-2rem)]">
        {/* 左侧上传/可视化区域 */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border p-4 overflow-auto">
          {csvData ? (
            <UserFlowChart data={csvData} />
          ) : (
            <UploadSection />
          )}
        </div>

        {/* 右侧 AI 助手 */}
        <div className="w-[400px] bg-white rounded-lg shadow-sm border overflow-hidden">
          <AICopilot data={csvData || { columns: [], rows: [] }} />
        </div>
      </div>
    </main>
  )
}
