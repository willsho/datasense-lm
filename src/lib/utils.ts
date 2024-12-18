import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CSVData } from '@/types/csv'
import Papa from 'papaparse'
import * as XLSX from 'xlsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function parseCSVFile(file: File): Promise<CSVData> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const headers = results.meta.fields || []
        const rows = results.data as Record<string, string | number>[]
        resolve({ headers, rows })
      },
      error: (error) => reject(error),
    })
  })
}

export async function parseXLSXFile(file: File): Promise<CSVData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result
        const workbook = XLSX.read(data, { type: 'array' })
        const firstSheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[firstSheetName]
        
        // 设置解析选项，确保日期和数字格式正确
        const options = {
          raw: false, // 转换为格式化的值
          dateNF: 'yyyy-mm-dd', // 日期格式
          defval: '', // 空单元格的默认值
        }
        
        // 将工作表转换为数组格式（包含表头）
        const sheetData = XLSX.utils.sheet_to_json<(string | number)[]>(worksheet, {
          header: 1,
          ...options,
        })
        
        if (sheetData.length === 0) {
          throw new Error('文件为空')
        }
        
        // 提取表头（第一行）
        const headers = (sheetData[0] || []).map(String)
        
        // 转换数据行为对象数组
        const rows = sheetData.slice(1).map(row => {
          const rowData: Record<string, string | number> = {}
          headers.forEach((header, index) => {
            const value = row[index]
            // 处理数字和字符串类型
            rowData[header] = typeof value === 'number' ? value : String(value || '')
          })
          return rowData
        })
        
        resolve({ headers, rows })
      } catch (error) {
        reject(error)
      }
    }
    
    reader.onerror = (error) => reject(error)
    reader.readAsArrayBuffer(file)
  })
}

export function detectDataType(values: (string | number)[]): 'numeric' | 'categorical' {
  const numericCount = values.filter(v => !isNaN(Number(v))).length
  return numericCount > values.length * 0.8 ? 'numeric' : 'categorical'
}

export async function parseFile(file: File): Promise<CSVData> {
  const fileType = file.name.split('.').pop()?.toLowerCase()
  
  switch (fileType) {
    case 'csv':
      return parseCSVFile(file)
    case 'xlsx':
    case 'xls':
      return parseXLSXFile(file)
    default:
      throw new Error('不支持的文件格式')
  }
} 