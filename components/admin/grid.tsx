import React from 'react'
import DivKiri from './divKiri'
import DivKanan from './MenuKanan'
import { Button } from '../ui/button'
import { Camera } from 'lucide-react'

export default function AdminGrid() {
  return (
    <section className='flex flex-col'>
        <div className='relative group cursor-pointer'>
            <img alt="BackgroundProfile" className='w-full aspect-[3200/408] bg-gray-200'/>
            
            {/* Overlay on hover */}
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5'></div>
            
            {/* Change Background Button - Centered */}
            <div className='absolute inset-0 flex items-center justify-center z-10'>
                <Button 
                    variant="secondary" 
                    size="sm"
                    className='bg-white/90 hover:bg-white shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:scale-105'
                >
                    <Camera className='w-4 h-4' />
                    Change Background
                </Button>
            </div>
        </div>
        
        <div className='flex flex-row lg:px-[50px] px-[14px] z-10'>
            <DivKiri/>
            <DivKanan/>            
        </div>
    </section>
  )
}
