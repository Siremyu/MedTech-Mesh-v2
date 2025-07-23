import React from 'react'
import ProductCard from './product-card'

export default function ProductGrid() {
  return (
    <section className='px-[50px] gap-[8px] flex flex-col'>
      {/* h2 muncul ketika berdasarkan hasil search dan filter */}
        <h2 className="hidden scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Search for "Search Query"
        </h2>

        {/* infintine scroll namun dibatasi hanya 3 bari saja yang tampil, sisanya loading lagi */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </section>
  )
}
