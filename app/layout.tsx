import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Six Degrees ',
  description: 'Six Degrees Consultancy is a full-service, cross-industry, end-to-end consulting company with registration number CS344512018. We provide comprehensive professional and management consulting, program, and project management services. The company is based in the capital city of Accra, Ghana.',
  keywords: ['Six Degrees','6 Degress','Six Degrees Ghana','Company Limited','Consultation Company in Ghana']
}

type rootChildren = {
  children: React.ReactNode
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
