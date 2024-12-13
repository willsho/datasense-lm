'use client'

import React, { useCallback, useState } from 'react'
import { useCSVStore } from '@/lib/store/csv-store'
import { parseCSVFile } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

export function UploadZone() {
  const [isDragging, setIsDragging] = useState(false)
  const { setLoading, setCsvData, setError } = useCSVStore()
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFile = useCallback(async (file: File) => {
    if (!file.name.endsWith('.csv')) {
      setError('请上传 CSV 文件')
      return
    }

    try {
      setLoading(true)
      setError(null)
      const data = await parseCSVFile(file)
      setCsvData(data)
    } catch (error) {
      setError('文件解析失败，请确保文件格式正确')
      console.error('CSV parsing error:', error)
    } finally {
      setLoading(false)
    }
  }, [setCsvData, setError, setLoading])

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFile(file)
    }
  }, [handleFile])

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const onClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const onFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }, [handleFile])

  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onClick={onClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".csv"
        onChange={onFileInputChange}
      />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <div className="mt-4">
        <Button type="button" variant="outline" className="mx-auto">
          选择 CSV 文件
        </Button>
        <p className="mt-2 text-sm text-gray-500">或将文件拖放到此处</p>
      </div>
    </div>
  )
} 