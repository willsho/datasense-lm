import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CSVData } from '@/types/csv'
import Papa from 'papaparse'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parseCSVFile(file: File): Promise<CSVData> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          if (results.errors.length > 0) {
            console.error('CSV parsing errors:', results.errors)
            reject(new Error('CSV 文件解析失败，请检查文件格式'))
            return
          }

          // 清理数据
          const rows = results.data
            .filter((row: any) => row.metric_name && row.metric_value !== undefined)
            .map((row: any) => ({
              metric_name: String(row.metric_name).trim(),
              metric_value: Number(row.metric_value),
            }))

          // 验证数据格式
          const isValid = rows.every(row => 
            row.metric_name &&
            !isNaN(row.metric_value)
          )

          if (!isValid) {
            reject(new Error('CSV 格式无效，请确保包含 metric_name 和 metric_value 列，且 metric_value 为数字'))
            return
          }

          if (rows.length === 0) {
            reject(new Error('CSV 文件为空或没有有效数据'))
            return
          }

          const data: CSVData = {
            columns: ['metric_name', 'metric_value'],
            rows,
          }

          resolve(data)
        } catch (error) {
          console.error('Data processing error:', error)
          reject(new Error('数据处理失败，请检查文件格式'))
        }
      },
      error: (error) => {
        console.error('CSV parsing error:', error)
        reject(new Error('文件读取失败，请重试'))
      },
    })
  })
}

export function detectDataType(values: (string | number)[]): 'numeric' | 'categorical' {
  const numericCount = values.filter(v => !isNaN(Number(v))).length
  return numericCount > values.length * 0.8 ? 'numeric' : 'categorical'
} 