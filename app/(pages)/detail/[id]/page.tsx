'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import campgrounds from '../../../../datas/campgrounds.json'
import { formatRupiahSimple } from '../../../utils/currency'

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
  const [isSaved, setIsSaved] = useState(false)

  if (!campground) {
    notFound()
  }

  useEffect(() => {
    const saved = localStorage.getItem('savedCampgrounds')
    if (saved) {
      const savedIds = JSON.parse(saved)
      setIsSaved(savedIds.includes(campground.id))
    }
  }, [campground.id])

  const handleSave = () => {
    const saved = localStorage.getItem('savedCampgrounds')
    let savedIds = saved ? JSON.parse(saved) : []
    
    if (isSaved) {
      // Remove from saved
      savedIds = savedIds.filter((id: number) => id !== campground.id)
      setIsSaved(false)
    } else {
      // Add to saved
      savedIds.push(campground.id)
      setIsSaved(true)
    }
    
    localStorage.setItem('savedCampgrounds', JSON.stringify(savedIds))
  }

  const handleWhatsAppEnquiry = () => {
    const currentUrl = window.location.href
    const message = `Halo! Saya tertarik untuk memesan camping di:

📍 *${campground.name}*
🌍 Lokasi: ${campground.location}
💰 Harga: ${formatRupiahSimple(campground.price)}/malam
⭐ Rating: ${campground.rating}

Bisa tolong berikan informasi lebih lanjut tentang ketersediaan dan proses pemesanan?

Link detail: ${currentUrl}

Terima kasih! 🏕️`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
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
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <Link 
            href="/search" 
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors text-sm sm:text-base"
          >
            ← Kembali ke Pencarian
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image Gallery Section */}
          <div className="space-y-3 sm:space-y-4">
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
                className="h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="h-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                      <div className="text-center text-white px-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{image.placeholder}</div>
                        <p className="text-sm sm:text-base lg:text-lg font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-300 shadow-lg">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 cursor-pointer transition-all duration-300 shadow-lg">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Swiper>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-green-200 to-green-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md"
                >
                  <span className="text-xs text-green-800 font-medium">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {campground.name}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                  <span className="text-base sm:text-lg font-semibold ml-1">{campground.rating}</span>
                  <span className="text-gray-500 ml-2 text-sm sm:text-base">(Berdasarkan review camper)</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4 sm:mb-6">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base lg:text-lg">{campground.location}</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Deskripsi</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{campground.description}</p>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Tipe Tempat Camping</h2>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  {campground.type}
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Fasilitas</h2>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {campground.amenities.map((amenity, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-green-600 block">
                      {formatRupiahSimple(campground.price)}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-500">/malam</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={handleWhatsAppEnquiry}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Pesan Sekarang
                  </button>
                  <button 
                    onClick={handleSave}
                    className={`border-2 ${isSaved ? 'border-red-500 text-red-500 hover:bg-red-50' : 'border-green-600 text-green-600 hover:bg-green-50'} px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm sm:text-base flex items-center justify-center gap-2`}
                  >
                    {isSaved ? (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Tersimpan
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        Simpan
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Detail Lokasi</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="font-medium text-gray-700 text-sm sm:text-base">Koordinat:</span>
                <span className="text-gray-600 text-sm sm:text-base">{campground.coordinates.lat}, {campground.coordinates.lng}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="font-medium text-gray-700 text-sm sm:text-base">Tipe:</span>
                <span className="text-gray-600 text-sm sm:text-base">{campground.type}</span>
              </div>
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center mt-4 sm:mt-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl mb-2">🗺️</div>
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Peta Interaktif</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Review Terbaru</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Budi S.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">⭐⭐⭐⭐⭐</span>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">2 hari lalu</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Tempat camping yang luar biasa dengan pemandangan yang indah. Fasilitasnya bersih dan terawat. Sempurna untuk keluarga!</p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Sari M.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">⭐⭐⭐⭐</span>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">1 minggu lalu</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Lokasi yang bagus untuk hiking. Stafnya sangat membantu dan ramah. Pasti akan kembali lagi!</p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Andi R.</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm sm:text-base">⭐⭐⭐⭐⭐</span>
                    <span className="text-xs sm:text-sm text-gray-500 ml-2">2 minggu lalu</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Tempat yang tenang dan damai. Sempurna untuk melepas penat dari kehidupan kota. Sangat direkomendasikan!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}