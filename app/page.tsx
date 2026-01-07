import Link from 'next/link'
import campgrounds from '../datas/campgrounds.json'
import { formatRupiahSimple } from './utils/currency'

export default function Home() {
  const featuredCampgrounds = campgrounds.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section h-96 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Temukan Spot Camping Sempurna</h1>
          <p className="text-xl mb-8">Jelajahi tempat camping menakjubkan di seluruh Indonesia</p>
          <Link 
            href="/search" 
            className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Mulai Jelajahi
          </Link>
        </div>
      </section>

      {/* Featured Campgrounds */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tempat Camping Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCampgrounds.map((campground) => (
              <div key={campground.id} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <span className="text-gray-600">📸 Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{campground.name}</h3>
                  <p className="text-gray-600 mb-2">📍 {campground.location}</p>
                  <p className="text-gray-700 mb-4">{campground.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">{formatRupiahSimple(campground.price)}/malam</span>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Pilih Direktori Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏕️</div>
              <h3 className="text-xl font-semibold mb-2">Lokasi Terverifikasi</h3>
              <p className="text-gray-600">Semua tempat camping telah diverifikasi dan diperbarui secara berkala</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Review Asli</h3>
              <p className="text-gray-600">Review jujur dari sesama camper</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Pencarian Mudah</h3>
              <p className="text-gray-600">Temukan tempat camping berdasarkan lokasi, fasilitas, dan harga</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}