export interface CSVData {
  headers: string[]
  rows: Record<string, string | number>[]
}

export interface ChartData {
  [key: string]: {
    x: number | string
    y: number
    label?: string
  }[]
}

export interface AnalysisResult {
  summary: string
  insights: string[]
  chartData?: ChartData
  chartType?: 'line' | 'bar' | 'scatter' | 'pie'
} 