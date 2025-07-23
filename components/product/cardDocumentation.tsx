import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function CardDocumentation() {
  return (
    <>
    {/* jika ada foto dokumentasi maka akan unhide, dan tingginya menyesuaikan component cardBawah, yang mana jika file ini lebih banyak isi fotonya, maka akan scroll area */}
        <Card className='shadow-none w-full hidden'>
            <CardHeader>
                <CardTitle>
                    Documentation
                </CardTitle>
            </CardHeader>
            <CardContent className='grid lg:grid-cols-2 grid-cols-1 gap-2 w-full'>
                <img src="https://via.placeholder.com/150" alt="" className='aspect-[5/4] w-[160px] bg-gray-200 rounded-[8px]'/>
                <img src="https://via.placeholder.com/150" alt="" className='aspect-[5/4] w-[160px] bg-gray-200 rounded-[8px]'/>
                <img src="https://via.placeholder.com/150" alt="" className='aspect-[5/4] w-[160px] bg-gray-200 rounded-[8px]'/>
            </CardContent>
        </Card>
    </>
  )
}
