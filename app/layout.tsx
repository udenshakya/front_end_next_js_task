import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CartProvider from '@/redux/CartProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'Online ecommerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <CartProvider>
        <div className=' bg-gray-200'>
          <div className='max-w-[1200px] min-h-full mx-auto px-10'>
        <Navbar />
        {children}
        </div>
        </div>
        </CartProvider>
        </body>
    </html>
  )
}
