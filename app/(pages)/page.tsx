'use client'

import Link from 'next/link'
import campgrounds from '../../datas/campgrounds.json'
import { formatRupiahSimple } from '../utils/currency'

export default function HomePage() {
  const featuredCampgrounds = campgrounds.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <span className="text-4xl sm:text-6xl lg:text-8xl">🏕️</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Temukan Petualangan
              <span className="block text-green-600">Camping Terbaik</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Jelajahi tempat-tempat camping menakjubkan di seluruh Indonesia. 
              Dari gunung hingga pantai, temukan pengalaman alam yang tak terlupakan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link 
                href="/search"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🔍 Mulai Pencarian
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105"
              >
                📖 Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Campgrounds */}
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tempat Camping Populer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Pilihan terbaik dari komunitas camper Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredCampgrounds.map((campground) => (
            <div key={campground.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 sm:h-56 bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl sm:text-4xl mb-2">🏕️</div>
                  <p className="font-medium text-sm sm:text-base">Foto Camping</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {campground.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{campground.location}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span className="font-medium">{campground.rating}</span>
                  <span className="text-gray-500 ml-2 text-sm">({campground.type})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-green-600">
                      {formatRupiahSimple(campground.price)}
                    </span>
                    <span className="text-gray-500 text-sm">/malam</span>
                  </div>
                  <Link
                    href={`/detail/${campground.id}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/search"
            className="inline-flex items-center bg-white hover:bg-gray-50 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg border-2 border-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Lihat Semua Tempat Camping
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Pencarian Mudah</h3>
              <p className="text-gray-600 text-sm sm:text-base">Temukan tempat camping sesuai preferensi Anda dengan mudah</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-4">⭐</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Review Terpercaya</h3>
              <p className="text-gray-600 text-sm sm:text-base">Baca review dari camper berpengalaman</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-4">💰</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Harga Transparan</h3>
              <p className="text-gray-600 text-sm sm:text-base">Tidak ada biaya tersembunyi, semua harga jelas</p>
            </div>
            
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Booking Instant</h3>
              <p className="text-gray-600 text-sm sm:text-base">Pesan langsung melalui WhatsApp dengan cepat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}