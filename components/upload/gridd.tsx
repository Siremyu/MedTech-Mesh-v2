import React from 'react'
import Crad from './crad'
import ModelPictures from './ModelPictures'
import ModelInformation from './inforcrad'

export default function Gridd() {
  return (
    <section className='lg:px-[50px] px-[14px] items-center justify-center flex flex-col gap-[16px]'>
        <Crad/>
        <ModelPictures/>
        <ModelInformation/>
    </section>
  )
}
