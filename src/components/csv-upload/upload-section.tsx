'use client'

import { useCSVStore } from '@/lib/store/csv-store'
import { UploadZone } from './upload-zone'

export function UploadSection() {
  const { isLoading, error } = useCSVStore()

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold mb-2">上传用户流转数据</h2>
        <p className="text-gray-600">
          请上传包含以下列的 CSV 文件：
        </p>
        <div className="mt-2 inline-block text-left text-sm text-gray-500">
          <ul className="list-disc list-inside">
            <li>metric_name: 指标名称</li>
            <li>metric_value: 指标数值</li>
          </ul>
        </div>
      </div>

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
      ) : (
        <UploadZone />
      )}

      <div className="mt-4 text-center text-sm text-gray-500">
        支持的文件格式：CSV
        <br />
        <a 
          href="/example.csv" 
          download 
          className="text-blue-500 hover:text-blue-600 underline mt-1 inline-block"
        >
          下载示例文件
        </a>
      </div>
    </div>
  )
} 