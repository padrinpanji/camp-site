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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cari Tempat Camping</h1>
      
      {/* Search Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Pencarian</label>
            <input
              type="text"
              placeholder="Cari berdasarkan nama atau lokasi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Tipe</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Semua Tipe</option>
              {campgroundTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Harga Maksimal: {formatRupiahSimple(maxPrice)}</label>
            <input
              type="range"
              min="50000"
              max="300000"
              step="25000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">{filteredCampgrounds.length} tempat camping ditemukan</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampgrounds.map((campground) => (
          <div key={campground.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div className="h-48 bg-green-200 flex items-center justify-center">
              <span className="text-gray-600">📸 Image Placeholder</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{campground.name}</h3>
              <p className="text-gray-600 mb-2">📍 {campground.location}</p>
              <p className="text-sm text-gray-700 mb-3">{campground.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {campground.amenities.slice(0, 3).map((amenity, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {amenity}
                  </span>
                ))}
                {campground.amenities.length > 3 && (
                  <span className="text-xs text-gray-500">+{campground.amenities.length - 3} more</span>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-green-600">{formatRupiahSimple(campground.price)}/malam</span>
                  <div className="text-sm text-yellow-500">⭐ {campground.rating}</div>
                </div>
                <Link 
                  href={`/detail/${campground.id}`}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCampgrounds.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada tempat camping yang sesuai dengan kriteria Anda.</p>
          <p className="text-gray-400">Coba sesuaikan filter pencarian Anda.</p>
        </div>
      )}
    </div>
  )
}