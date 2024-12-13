import { create } from 'zustand'
import { CSVData, AnalysisResult } from '@/types/csv'

interface CSVStore {
  csvData: CSVData | null
  analysisResult: AnalysisResult | null
  isLoading: boolean
  error: string | null
  setCsvData: (data: CSVData) => void
  setAnalysisResult: (result: AnalysisResult) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

export const useCSVStore = create<CSVStore>((set) => ({
  csvData: null,
  analysisResult: null,
  isLoading: false,
  error: null,
  setCsvData: (data) => set({ csvData: data }),
  setAnalysisResult: (result) => set({ analysisResult: result }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  reset: () => set({ csvData: null, analysisResult: null, error: null }),
})) 