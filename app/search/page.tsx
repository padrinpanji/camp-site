'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import campgrounds from '../../datas/campgrounds.json'
import { formatRupiahSimple } from '../utils/currency'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [maxPrice, setMaxPrice] = useState(300000)

  const filteredCampgrounds = useMemo(() => {
    return campgrounds.filter(campground => {
      const matchesSearch = campground.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campground.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === '' || campground.type === selectedType
      const matchesPrice = campground.price <= maxPrice
      
      return matchesSearch && matchesType && matchesPrice
    })
  }, [searchTerm, selectedType, maxPrice])

  const campgroundTypes = Array.from(new Set(campgrounds.map(c => c.type)))

  return (
    <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Cari Tempat Camping</h1>
      
      {/* Search Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium mb-2">Pencarian</label>
            <input
              type="text"
              placeholder="Cari berdasarkan nama atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Tipe</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="">Semua Tipe</option>
              {campgroundTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium mb-2">
              Harga Maksimal: <span className="font-bold text-green-600">{formatRupiahSimple(maxPrice)}</span>
            </label>
            <input
              type="range"
              min="50000"
              max="300000"
              step="25000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Rp 50rb</span>
              <span>Rp 300rb</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm sm:text-base">
          {filteredCampgrounds.length} tempat camping ditemukan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCampgrounds.map((campground) => (
          <div key={campground.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div className="h-40 sm:h-48 bg-green-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm sm:text-base">📸 Image Placeholder</span>
            </div>
            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-1">
                {campground.name}
              </h3>
              <p className="text-gray-600 mb-2 text-sm sm:text-base line-clamp-1">
                📍 {campground.location}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 line-clamp-2">
                {campground.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {campground.amenities.slice(0, 2).map((amenity, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {amenity}
                  </span>
                ))}
                {campground.amenities.length > 2 && (
                  <span className="text-xs text-gray-500">+{campground.amenities.length - 2}</span>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-green-600 block">
                    {formatRupiahSimple(campground.price)}/malam
                  </span>
                  <div className="text-xs sm:text-sm text-yellow-500">⭐ {campground.rating}</div>
                </div>
                <Link 
                  href={`/detail/${campground.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded transition-colors text-center text-xs sm:text-sm"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCampgrounds.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-gray-500 text-base sm:text-lg">
            Tidak ada tempat camping yang sesuai dengan kriteria Anda.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Coba sesuaikan filter pencarian Anda.
          </p>
        </div>
      )}
    </div>
  )
}