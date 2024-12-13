'use client'

import ReactFlow, {
  Background,
  Controls,
  BaseEdge,
  getBezierPath,
} from 'reactflow'

// Define types locally
type Edge = {
  id: string
  source: string
  target: string
  type?: string
  animated?: boolean
  label?: string
  style?: any
  markerEnd?: any
  sourceHandle?: string
  targetHandle?: string
  labelStyle?: any
  labelBgStyle?: any
}

type Node = {
  id: string
  type?: string
  position: { x: number; y: number }
  data: any
}

type EdgeProps = {
  id: string
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
  sourcePosition?: string
  targetPosition?: string
  style?: any
  markerEnd?: any
  label?: string
  labelStyle?: any
  labelBgStyle?: any
}

const MarkerType = {
  ArrowClosed: 'arrowclosed',
} as const

import 'reactflow/dist/style.css'
import { CustomNode } from './custom-node'
import { useCallback, useMemo } from 'react'
import { CSVData } from '@/types/csv'

const nodeTypes = {
  custom: CustomNode,
}

function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  labelStyle,
  labelBgStyle,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={style}
        labelStyle={labelStyle}
        labelBgStyle={labelBgStyle}
      />
      {label && (
        <text
          x={labelX}
          y={labelY}
          className="fill-gray-700 text-[12px] font-medium"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ ...labelStyle, fontSize: '12px' }}
        >
          <tspan x={labelX} dy="-0.5em">{label}</tspan>
          <rect
            x={labelX - 40}
            y={labelY - 10}
            width="80"
            height="20"
            className="fill-white opacity-75"
            style={labelBgStyle}
          />
        </text>
      )}
    </>
  )
}

const edgeTypes = {
  custom: CustomEdge,
}

interface UserFlowChartProps {
  data: CSVData
}

export function UserFlowChart({ data }: UserFlowChartProps) {
  const getMetricValue = useCallback((name: string) => {
    const metric = data.rows.find(row => 
      String(row.metric_name).toLowerCase() === name.toLowerCase()
    )
    return metric?.metric_value || 0
  }, [data])

  const nodes: Node[] = useMemo(() => [
    {
      id: 'reactivated',
      type: 'custom',
      position: { x: 50, y: 20 },
      data: {
        label: '重新激活用户',
        description: '(首次回访)',
        value: getMetricValue('reactivated_user'),
        color: 'bg-green-100',
        width: 200,
        height: 120,
      },
    },
    {
      id: 'new',
      type: 'custom',
      position: { x: 400, y: 20 },
      data: {
        label: '新用户',
        description: '(首次使用应用)',
        value: getMetricValue('new_user'),
        color: 'bg-green-100',
        width: 200,
        height: 120,
      },
    },
    {
      id: 'resurrected',
      type: 'custom',
      position: { x: 750, y: 20 },
      data: {
        label: '复活用户',
        description: '(首日回访)',
        value: getMetricValue('resurrected_user'),
        color: 'bg-green-100',
        width: 200,
        height: 120,
      },
    },
    {
      id: 'current',
      type: 'custom',
      position: { x: 420, y: 210 },
      data: {
        label: '当前用户',
        description: '(今日活跃且过去7天内至少活跃1次)',
        value: getMetricValue('current_user'),
        color: 'bg-blue-100',
        width: 280,
        height: 140,
      },
    },
    {
      id: 'at-risk-wau',
      type: 'custom',
      position: { x: 100, y: 400 },
      data: {
        label: '周活跃用户流失风险',
        description: '(今日不活跃，但过去1-6天活跃)',
        value: getMetricValue('at_risk_waus'),
        color: 'bg-orange-100',
        width: 280,
        height: 100,
      },
    },
    {
      id: 'at-risk-mau',
      type: 'custom',
      position: { x: 100, y: 580},
      data: {
        label: '月活跃用户流失风险',
        description: '(今日不活跃，过去1-6天不活跃，但过去7-29天活跃)',
        value: getMetricValue('at_risk_maus'),
        color: 'bg-pink-100',
        width: 450,
        height: 100,
      },
    },
    {
      id: 'dead',
      type: 'custom',
      position: { x: 100, y: 750 },
      data: {
        label: '流失用户',
        description: '(今日及过去29天不活跃)',
        value: getMetricValue('dead_users'),
        color: 'bg-red-100',
        width: 600,
        height: 100,
      },
    },
  ], [getMetricValue])

  const edges: Edge[] = useMemo(() => {
    const rurr = Number(getMetricValue('RURR'))
    const surr = Number(getMetricValue('SURR'))
    const curr = Number(getMetricValue('CURR'))
    const nurr = Number(getMetricValue('NURR'))
    const imaurr = Number(getMetricValue('iMAURR'))

    return [
      // 重新激活用户相关
      { 
        id: 'e1-rurr', 
        source: 'reactivated', 
        target: 'current', 
        animated: true, 
        type: 'smoothstep',
        label: `RURR: ${rurr.toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#60a5fa', strokeWidth: 3 },
        sourceHandle: 'right-source',
        targetHandle: 'left-target',
        labelStyle: { fontSize: 14 },
      },
      { 
        id: 'e1-1rurr', 
        source: 'reactivated', 
        target: 'at-risk-wau', 
        animated: true, 
        type: 'smoothstep',
        label: `1-RURR: ${(100 - rurr).toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#f97316', strokeWidth: 3 },
        sourceHandle: 'right-source',
        targetHandle: 'left-target',
        labelStyle: { fontSize: 14 },
      },

      // 新用户相关
      { 
        id: 'e2-nurr', 
        source: 'new', 
        target: 'current', 
        animated: true, 
        type: 'smoothstep',
        label: `NURR: ${nurr.toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#60a5fa', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },
      { 
        id: 'e2-1nurr', 
        source: 'new', 
        target: 'at-risk-wau', 
        animated: true, 
        type: 'smoothstep',
        label: `1-NURR: ${(100 - nurr).toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#f97316', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },

      // 复活用户相关
      { 
        id: 'e3-surr', 
        source: 'resurrected', 
        target: 'current', 
        animated: true, 
        type: 'smoothstep',
        label: `SURR: ${surr.toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#60a5fa', strokeWidth: 3 },
        sourceHandle: 'left-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },
      { 
        id: 'e3-1surr', 
        source: 'resurrected', 
        target: 'at-risk-wau', 
        animated: true, 
        type: 'smoothstep',
        label: `1-SURR: ${(100 - surr).toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#f97316', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'right-target',
        labelStyle: { fontSize: 14 },
      },

      // 当前用户相关
      { 
        id: 'e4-curr', 
        source: 'current', 
        target: 'current', 
        animated: true, 
        type: 'smoothstep',
        label: `CURR:\n${curr.toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#60a5fa', strokeWidth: 3 },
        sourceHandle: 'right-source',
        targetHandle: 'bottom-target',
        labelStyle: { fontSize: 14 },
      },
      { 
        id: 'e4-1curr', 
        source: 'current', 
        target: 'at-risk-wau', 
        animated: true, 
        type: 'smoothstep',
        label: `1-CURR: ${(100 - curr).toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#f97316', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },

      // WAU 风险相关
      { 
        id: 'e5-iwaurr', 
        source: 'at-risk-wau', 
        target: 'current', 
        animated: true, 
        type: 'smoothstep',
        label: `iWAURR: ${getMetricValue('iWAURR')}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#60a5fa', strokeWidth: 3 },
        sourceHandle: 'top-source',
        targetHandle: 'left-target',
        labelStyle: { fontSize: 14 },
      },
      { 
        id: 'e5-wau-loss', 
        source: 'at-risk-wau', 
        target: 'at-risk-mau', 
        animated: true, 
        type: 'smoothstep',
        label: `WAU流失率: ${getMetricValue('WAU流失率')}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#ec4899', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },

      // MAU 风险相关
      { 
        id: 'e6-mau-loss', 
        source: 'at-risk-mau', 
        target: 'dead', 
        animated: true, 
        type: 'smoothstep',
        label: `MAU流失率: ${getMetricValue('MAU流失率')}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#ef4444', strokeWidth: 3 },
        sourceHandle: 'bottom-source',
        targetHandle: 'top-target',
        labelStyle: { fontSize: 14 },
      },
      // iMAURR
      { 
        id: 'e6-imaurr', 
        source: 'at-risk-mau', 
        target: 'reactivated', 
        animated: true, 
        type: 'smoothstep',
        label: `iMAURR: ${imaurr.toFixed(2)}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#22c55e', strokeWidth: 3 },
        sourceHandle: 'left-source',
        targetHandle: 'left-target',
        labelStyle: { fontSize: 14 },
      },

      // 复活相关
      { 
        id: 'e7-resurrection', 
        source: 'dead', 
        target: 'resurrected', 
        type: 'smoothstep', 
        animated: true,
        label: `复活率: ${getMetricValue('复活率')}%`,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: '#22c55e', strokeWidth: 3 },
        sourceHandle: 'right-source',
        targetHandle: 'right-target',
        labelStyle: { fontSize: 14 },
      },
    ]
  }, [getMetricValue])

  return (
    <div className="w-full h-[800px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        className="bg-white rounded-lg shadow-xl"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
} 