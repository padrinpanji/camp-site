'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function QuickActions() {
  const pathname = usePathname()

  // Don't show on home page
  if (pathname === '/') return null

  const actions = [
    {
      href: '/search',
      label: 'Cari Camping',
      icon: '🔍',
      color: 'bg-blue-500 hover:bg-blue-600',
      show: pathname !== '/search'
    },
    {
      href: '/',
      label: 'Kembali ke Beranda',
      icon: '🏠',
      color: 'bg-green-500 hover:bg-green-600',
      show: pathname !== '/'
    },
    {
      href: '/about',
      label: 'Info Lebih Lanjut',
      icon: 'ℹ️',
      color: 'bg-purple-500 hover:bg-purple-600',
      show: pathname !== '/about'
    }
  ]

  const visibleActions = actions.filter(action => action.show)

  if (visibleActions.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col space-y-3">
        {visibleActions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={`${action.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group flex items-center`}
            title={action.label}
          >
            <span className="text-lg">{action.icon}</span>
            <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}