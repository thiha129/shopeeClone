import React from 'react'
import CarHeader from 'src/components/CarHeader'
import Footer from 'src/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function CarLayout({ children }: Props) {
  return (
    <div>
      <CarHeader />
      {children}
      <Footer />
    </div>
  )
}
