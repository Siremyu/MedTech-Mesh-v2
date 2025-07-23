import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { MdOutlineFileDownload } from 'react-icons/md'
import { AiOutlineLike } from "react-icons/ai";
import Link from 'next/link';

export default function ProductCard() {
  return (
    <div className='max-w-[345px]'>
      <Link href='/product' className='block'>
        <img alt="Product Thumbnail" className='w-[345px] aspect-[4/3] bg-gray-300 rounded-[4px]'/>
      </Link>
      <div className='flex items-start mt-[16px] gap-[16px]'>
        <Link href='/profile'>
          <Avatar className='size-[45px]'>
            <AvatarImage/>
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
        </Link>
        <div className='flex flex-col justify-start'>
          <Link href='/product' className='text-[16px]'>
            <h3 className='text-[18px] font-semibold'>Product Name</h3>
          </Link>
          <Link href='/profile' className='text-[14px] text-gray-500'>
            <p className='text-[16px] text-gray-500'>Author</p>            
          </Link>
          <div className='flex items-center gap-[12px] mt-[4px] justify-start'>
              <div className='text-[14px] text-gray-400 flex items-center gap-[4px]'>
                <MdOutlineFileDownload className='size-[18px]'/>
                <p>100</p>
              </div>
              <div className='text-[14px] text-gray-400 flex items-center gap-[4px]'>
                <AiOutlineLike className='size-[18px]'/>
                <p>100</p>
              </div>              
          </div>
        </div>
      </div>
    </div>
  )
}
