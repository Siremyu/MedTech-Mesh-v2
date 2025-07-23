import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import CardBawah from '@/components/product/cardBawah'
import Carddd from '@/components/product/carddd'
import CardGridBawah from '@/components/product/cardGridBawah'
import React from 'react'

export default function ProductPage() {
  return (
    <>
      <Navbar/>
      <main className="pt-[88px] flex flex-col gap-[24px] pb-[75px]">
        <Carddd/>
        <CardGridBawah/>
      </main>
      <Footer/>
    </>
  )
}
