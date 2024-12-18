import { create } from 'zustand'
import { CSVData } from '@/types/csv'

interface CSVStore {
  isLoading: boolean
  error: string | null
  csvData: CSVData | null
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setCsvData: (data: CSVData) => void
}

export const useCSVStore = create<CSVStore>((set) => ({
  isLoading: false,
  error: null,
  csvData: null,
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  setCsvData: (data) => set({ csvData: data }),
})) 