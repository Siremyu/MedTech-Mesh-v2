import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaImage } from "react-icons/fa6";
import { Button } from '../ui/button';

export default function Carddd() {
  return (
    <section className='lg:px-[50px] items-center justify-center w-full flex px-[14px]'>
        <Card className='shadow-none max-w-[1200px] w-full px-2'>
            <CardHeader>
                <div className='flex items-center gap-[14px]'>
                    <Avatar className='size-[54px]'>
                        <AvatarImage/>
                        <AvatarFallback>
                            SN
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                        <h1 className='text-[18px] font-semibold'>Nama Product</h1>
                        <div className='flex items-center gap-[14px] text-gray-500 font-medium'>
                            <p className='text-[14px]'>Author</p>
                            <p className='text-[14px]'>05 Jun 2089</p>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='flex flex-col lg:flex-row gap-[8px]'>
                <div className='flex-1 flex'>
                    <img alt="image preview and 3d model preview using three js"  className='aspect-[16/9] rounded-[12px] w-[924px] bg-gray-200'/>
                    <div className='flex items-center justify-center gap-[8px] absolute mt-2 ml-2'>
                        <Button size='icon' variant='ghost'className='rounded-full text-[18px] bg-foreground/90 text-background/80 font-bold'>
                            3D
                        </Button>
                        <Button size='icon' variant='ghost'className='rounded-full text-[18px] bg-foreground/90 text-background/90'>
                            <FaImage className='text-[20px]'/>
                        </Button>
                    </div>
                </div>

                {/* kumpulan image preview */}
                <div className='flex-shrink-0 flex-row lg:flex-col gap-[8px] flex'>
                    <img alt="" className='aspect-[5/4] w-[190px] bg-gray-200 rounded-[8px]'/>
                    <img alt="" className='aspect-[5/4] w-[190px] bg-gray-200 rounded-[8px]'/>
                    <img alt="" className='aspect-[5/4] w-[190px] bg-gray-200 rounded-[8px]'/>
                </div>
            </CardContent>
        </Card>
    </section>
  )
}
