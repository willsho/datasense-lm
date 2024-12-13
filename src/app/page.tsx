'use client'

import { UploadSection } from '@/components/csv-upload/upload-section'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">DataSenseLM</h1>
        <p className="text-center text-gray-600 mb-8">用户活跃度分析可视化工具</p>
        <div className="bg-white/30 p-8 rounded-lg backdrop-blur-sm">
          <UploadSection />
        </div>
      </div>
    </main>
  )
}
