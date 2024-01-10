import type { Metadata } from 'next'
import { palmer_print, palmer_script, pangram_sans } from '@/assets/fonts'
import { NextAuthProvider } from '@/components/contexts/NextAuthProvider'
import { Navbar } from '@/components/navbar'
import SidebarProvider from '@/components/contexts/SidebarProvider'
import './main.css'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'ChecoWeb',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={`${palmer_print.variable} ${palmer_script.variable} ${pangram_sans.variable}`}>
      <body className='h-screen overflow-y-auto md:overflow-y-hidden'>
        <NextAuthProvider>
          <SidebarProvider>
            <Navbar />
            <section className='md:grid md:grid-cols-[300px,1fr] md:gap-4 h-full pt-12 md:pt-14'>
              <Sidebar />
              <section className='p-2 md:overflow-y-auto h-full md:h-auto pb-16 pt-20'>{children}</section>
            </section>
          </SidebarProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
