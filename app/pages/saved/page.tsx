'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import campgrounds from '../../../datas/campgrounds.json'
import { formatRupiahSimple } from '../../utils/currency'

export default function SavedPage() {
  const [savedCampgrounds, setSavedCampgrounds] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('savedCampgrounds')
    if (saved) {
      setSavedCampgrounds(JSON.parse(saved))
    }
  }, [])

  const removeSaved = (id: number) => {
    const updated = savedCampgrounds.filter(campId => campId !== id)
    setSavedCampgrounds(updated)
    localStorage.setItem('savedCampgrounds', JSON.stringify(updated))
  }

  const savedCampgroundsData = campgrounds.filter(camp => 
    savedCampgrounds.includes(camp.id)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Tempat Tersimpan
              </h1>
              <p className="text-gray-600 mt-1">
                {savedCampgroundsData.length} tempat camping favorit Anda
              </p>
            </div>
            <Link 
              href="/pages/search" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Cari Lagi
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {savedCampgroundsData.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="text-6xl sm:text-8xl mb-4">🏕️</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Belum Ada Tempat Tersimpan
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Mulai jelajahi dan simpan tempat camping favorit Anda untuk akses mudah nanti
            </p>
            <Link 
              href="/pages/search"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Jelajahi Sekarang
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCampgroundsData.map((campground) => (
              <div key={campground.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2">🏕️</div>
                    <p className="font-medium">Foto Camping</p>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1">
                      {campground.name}
                    </h3>
                    <button
                      onClick={() => removeSaved(campground.id)}
                      className="text-red-500 hover:text-red-700 ml-2 p-1"
                      title="Hapus dari tersimpan"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{campground.location}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    <span className="font-medium">{campground.rating}</span>
                    <span className="text-gray-500 ml-2 text-sm">({campground.type})</span>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {campground.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-green-600">
                        {formatRupiahSimple(campground.price)}
                      </span>
                      <span className="text-gray-500 text-sm">/malam</span>
                    </div>
                    <Link
                      href={`/pages/detail/${campground.id}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}