import React from 'react'
import CardBawah from './cardBawah'
import CardSamping from './cardSamping'
import CardDocumentation from './cardDocumentation'

export default function CardGridBawah() {
  return (
    <section className='flex justify-center w-full px-4'>
      <div className='flex flex-col-reverse md:flex-row items-start w-full max-w-[1200px] gap-[26px]'>
        <div className='w-full lg:max-w-[824px]'>
          <CardBawah/>
        </div>
        <div className='w-full lg:max-w-[352px] flex flex-col gap-[16px]'>
          <CardSamping/>
          <CardDocumentation/>
        </div>
      </div>
    </section>
  )
}
