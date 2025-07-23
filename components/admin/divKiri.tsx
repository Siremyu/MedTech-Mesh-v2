import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Separator } from '../ui/separator'
import { AiOutlineLike } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Button } from '../ui/button';

export default function DivKiri() {
  return (
    <div className='w-[320px] pr-[20px]'>
        <div className='flex flex-col gap-[20px] pb-[14px]'>
            <Avatar className='size-[124px] border-background border-4 mt-[-62px]'>
                <AvatarImage/>
                <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-semibold text-lg'>
                        Display Name
                    </h1>
                    <p className='text-muted-foreground text-sm'>
                        @Username
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
