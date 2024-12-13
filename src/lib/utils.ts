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
      complete: (results) => {
        const headers = results.meta.fields || []
        const rows = results.data as Record<string, string | number>[]
        resolve({ headers, rows })
      },
      error: (error) => reject(error),
    })
  })
}

export function detectDataType(values: (string | number)[]): 'numeric' | 'categorical' {
  const numericCount = values.filter(v => !isNaN(Number(v))).length
  return numericCount > values.length * 0.8 ? 'numeric' : 'categorical'
} 