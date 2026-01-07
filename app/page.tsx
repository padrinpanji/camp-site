import Link from 'next/link'
import campgrounds from '../datas/campgrounds.json'
import { formatRupiahSimple } from './utils/currency'

export default function Home() {
  const featuredCampgrounds = campgrounds.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-64 sm:h-80 lg:h-96 flex items-center justify-center text-white">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Temukan Spot Camping Sempurna
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            Jelajahi tempat camping menakjubkan di seluruh Indonesia
          </p>
          <Link 
            href="/search" 
            className="bg-green-600 hover:bg-green-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-colors inline-block"
          >
            Mulai Jelajahi
          </Link>
        </div>
      </section>

      {/* Featured Campgrounds */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Tempat Camping Unggulan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredCampgrounds.map((campground) => (
              <div key={campground.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="h-40 sm:h-48 bg-green-200 flex items-center justify-center">
                  <span className="text-gray-600 text-sm sm:text-base">📸 Image Placeholder</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{campground.name}</h3>
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">📍 {campground.location}</p>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-2">
                    {campground.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">
                      {formatRupiahSimple(campground.price)}/malam
                    </span>
                    <Link 
                      href={`/detail/${campground.id}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors text-center text-sm sm:text-base"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Mengapa Pilih Direktori Kami?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-4">🏕️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Lokasi Terverifikasi</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Semua tempat camping telah diverifikasi dan diperbarui secara berkala
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl sm:text-4xl mb-4">⭐</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Review Asli</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Review jujur dari sesama camper
              </p>
            </div>
            <div className="text-center p-4 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-4">🗺️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pencarian Mudah</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Temukan tempat camping berdasarkan lokasi, fasilitas, dan harga
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}