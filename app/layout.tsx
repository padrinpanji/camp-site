import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Camping Directories',
  description: 'Find the perfect camping spot for your next adventure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-green-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Camping Directories. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}