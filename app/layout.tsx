import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import QuickActions from './components/QuickActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Camping Directories',
  description: 'Temukan tempat camping sempurna untuk petualangan Anda berikutnya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navigation />
        <Header />
        <Breadcrumb />
        <main className="min-h-screen">
          {children}
        </main>
        <QuickActions />
        <footer className="bg-green-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">🏕️ Camping Directories</h3>
                <p className="text-green-200 text-sm">
                  Platform terpercaya untuk menemukan tempat camping terbaik di Indonesia
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Navigasi Cepat</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="text-green-200 hover:text-white transition-colors">Beranda</a></li>
                  <li><a href="/search" className="text-green-200 hover:text-white transition-colors">Cari Camping</a></li>
                  <li><a href="/about" className="text-green-200 hover:text-white transition-colors">Tentang Kami</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Kontak</h4>
                <div className="text-sm text-green-200 space-y-1">
                  <p>📧 info@campingdirectories.id</p>
                  <p>📞 +62 21 1234 5678</p>
                  <p>📍 Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            <div className="border-t border-green-700 pt-4">
              <p className="text-sm text-green-200">
                &copy; 2024 Camping Directories Indonesia. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}