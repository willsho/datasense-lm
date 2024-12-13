'use client'

import { useCSVStore } from '@/lib/store/csv-store'
import { UploadZone } from './upload-zone'
import { UserFlowChart } from '../data-visualization/user-flow-chart'

export function UploadSection() {
  const { isLoading, error, csvData } = useCSVStore()

  return (
    <div className="w-full max-w-5xl mx-auto">
      {error && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      
      {isLoading ? (
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-2 text-gray-600">正在解析文件...</p>
        </div>
      ) : csvData ? (
        <div className="space-y-4">
          <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
            <p>文件上传成功！</p>
            <p className="text-sm mt-1">
              共 {csvData.headers.length} 列，{csvData.rows.length} 行数据
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-4">用户活跃度分析</h2>
            <UserFlowChart data={csvData} />
          </div>
        </div>
      ) : (
        <UploadZone />
      )}
    </div>
  )
} 