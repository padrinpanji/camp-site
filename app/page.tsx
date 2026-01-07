'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/pages')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🏕️</div>
        <p className="text-gray-600">Redirecting to Camping Directories...</p>
      </div>
    </div>
  )
}