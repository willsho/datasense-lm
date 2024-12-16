import { Handle, Position } from '@xyflow/react';

interface CustomNodeProps {
  data: {
    label: string
    value?: string | number
    description?: string
    color?: string
    textColor?: string
  }
  width?: number
  height?: number
}

export function CustomNode({ data, width = 240, height = 100 }: CustomNodeProps) {
  return (
    <div
      className={`px-4 py-3 rounded-md shadow-md border ${data.color || 'bg-white'}`}
      style={{ 
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Handle
        type="source"
        position={Position.Top}
        id="top-source"
        className="w-2 h-2 !bg-gray-500"
        style={{ left: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top-target"
        className="w-2 h-2 !bg-gray-500"
        style={{ left: '75%' }}
      />

      <Handle
        type="source"
        position={Position.Left}
        id="left-source"
        className="w-2 h-2 !bg-gray-500"
        style={{ top: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className="w-2 h-2 !bg-gray-500"
        style={{ top: '75%' }}
      />

      <div className={`text-center flex-1 flex flex-col justify-center ${data.textColor || 'text-gray-800'}`}>
        <div className="font-medium">{data.label}</div>
        {data.description && (
          <div className="text-sm opacity-75 mt-1">{data.description}</div>
        )}
        {data.value && (
          <div className="mt-2 text-lg font-bold">{data.value}</div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        className="w-2 h-2 !bg-gray-500"
        style={{ top: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right-target"
        className="w-2 h-2 !bg-gray-500"
        style={{ top: '75%' }}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom-source"
        className="w-2 h-2 !bg-gray-500"
        style={{ left: '25%' }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom-target"
        className="w-2 h-2 !bg-gray-500"
        style={{ left: '75%' }}
      />
    </div>
  )
} 