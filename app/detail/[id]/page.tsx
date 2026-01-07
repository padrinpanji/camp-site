'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import campgrounds from '../../../datas/campgrounds.json'
import { formatRupiahSimple } from '../../utils/currency'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface PageProps {
  params: {
    id: string
  }
}

export default function DetailPage({ params }: PageProps) {
  const campground = campgrounds.find(c => c.id === parseInt(params.id))

  if (!campground) {
    notFound()
  }

  // Generate multiple images for the gallery
  const galleryImages = [
    { id: 1, alt: 'Main campground view', placeholder: '🏕️ Main View' },
    { id: 2, alt: 'Amenities area', placeholder: '🚿 Amenities' },
    { id: 3, alt: 'Scenic landscape', placeholder: '🌲 Landscape' },
    { id: 4, alt: 'Camping spots', placeholder: '⛺ Camping Spots' },
    { id: 5, alt: 'Activities area', placeholder: '🎯 Activities' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/search" 
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            ← Kembali ke Pencarian
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            {/* Main Swiper Gallery */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
                loop={true}
                className="h-96 rounded-xl overflow-hidden shadow-lg"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="h-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">{image.placeholder}</div>
                        <p className="text-lg font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 cursor-pointer transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 cursor-pointer transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Swiper>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="h-20 bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md"
                >
                  <span className="text-xs text-green-800 font-medium">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{campground.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="text-lg font-semibold ml-1">{campground.rating}</span>
                  <span className="text-gray-500 ml-2">(Berdasarkan review camper)</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{campground.location}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed">{campground.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Tipe Tempat Camping</h2>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {campground.type}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Fasilitas</h2>
                <div className="flex flex-wrap gap-2">
                  {campground.amenities.map((amenity, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-green-600">{formatRupiahSimple(campground.price)}</span>
                    <span className="text-lg text-gray-500 ml-1">/malam</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
                    Pesan Sekarang
                  </button>
                  <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    ❤️ Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Detail Lokasi</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Koordinat:</span>
                <span className="text-gray-600">{campground.coordinates.lat}, {campground.coordinates.lng}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Tipe:</span>
                <span className="text-gray-600">{campground.type}</span>
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mt-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <span className="text-gray-600 font-medium">Peta Interaktif</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Review Terbaru</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Budi S.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500 ml-2">2 hari lalu</span>
                  </div>
                </div>
                <p className="text-gray-700">Tempat camping yang luar biasa dengan pemandangan yang indah. Fasilitasnya bersih dan terawat. Sempurna untuk keluarga!</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Sari M.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500 ml-2">1 minggu lalu</span>
                  </div>
                </div>
                <p className="text-gray-700">Lokasi yang bagus untuk hiking. Stafnya sangat membantu dan ramah. Pasti akan kembali lagi!</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-gray-900">Andi R.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-500 ml-2">2 minggu lalu</span>
                  </div>
                </div>
                <p className="text-gray-700">Tempat yang tenang dan damai. Sempurna untuk melepas penat dari kehidupan kota. Sangat direkomendasikan!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}