export interface CSVData {
  columns: string[]
  rows: Array<{
    metric_name: string
    metric_value: number
    [key: string]: any
  }>
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