'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const corePages = [
    { 
      href: '/pages', 
      label: 'Beranda', 
      icon: '🏠',
      description: 'Halaman utama'
    },
    { 
      href: '/pages/search', 
      label: 'Cari Camping', 
      icon: '🔍',
      description: 'Temukan tempat camping'
    },
    { 
      href: '/pages/saved', 
      label: 'Tersimpan', 
      icon: '❤️',
      description: 'Tempat favorit Anda'
    },
    { 
      href: '/pages/about', 
      label: 'Tentang Kami', 
      icon: 'ℹ️',
      description: 'Informasi perusahaan'
    }
  ]

  // Don't show header on home page to avoid redundancy
  if (pathname === '/') {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-100">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Jelajahi Camping Directories
          </h2>
          <p className="text-sm text-gray-600">
            Akses cepat ke halaman utama
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {corePages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`group relative overflow-hidden rounded-xl p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                pathname === page.href
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white hover:bg-green-50 text-gray-700 shadow-md'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 ${
                  pathname === page.href ? 'animate-pulse' : ''
                }`}>
                  {page.icon}
                </div>
                
                <div>
                  <h3 className={`font-semibold text-sm sm:text-base ${
                    pathname === page.href ? 'text-white' : 'text-gray-800'
                  }`}>
                    {page.label}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 ${
                    pathname === page.href ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {page.description}
                  </p>
                </div>
              </div>
              
              {/* Active indicator */}
              {pathname === page.href && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              )}
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-blue-400/0 group-hover:from-green-400/10 group-hover:to-blue-400/10 transition-all duration-300 rounded-xl"></div>
            </Link>
          ))}
        </div>
        
        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t border-green-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white/50 rounded-lg p-3">
              <div className="text-lg sm:text-xl font-bold text-green-600">6+</div>
              <div className="text-xs sm:text-sm text-gray-600">Tempat Camping</div>
            </div>
            <div className="bg-white/50 rounded-lg p-3">
              <div className="text-lg sm:text-xl font-bold text-blue-600">4.7</div>
              <div className="text-xs sm:text-sm text-gray-600">Rating Rata-rata</div>
            </div>
            <div className="bg-white/50 rounded-lg p-3">
              <div className="text-lg sm:text-xl font-bold text-purple-600">100+</div>
              <div className="text-xs sm:text-sm text-gray-600">Review</div>
            </div>
            <div className="bg-white/50 rounded-lg p-3">
              <div className="text-lg sm:text-xl font-bold text-orange-600">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}