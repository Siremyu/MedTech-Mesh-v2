import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { MdOutlineFileDownload } from 'react-icons/md'
import { AiOutlineLike } from "react-icons/ai";
import { MoreVertical, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface ProfileCardProps {
  status?: 'published' | 'verifying' | 'rejected'
  rejectionReason?: string
}

export default function ProfileCard({ status = 'published', rejectionReason }: ProfileCardProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <div className='max-w-[345px]'>
      {/* Thumbnail with optional hamburger menu for rejected items */}
      <div className='relative'>
        <Link href='/product' className='block'>
          <img alt="Product Thumbnail" className='w-[345px] aspect-[4/3] bg-gray-300 rounded-[4px]'/>
        </Link>
        
        {/* Hamburger menu button for rejected items */}
        {status === 'rejected' && (
          <div className='absolute top-2 right-2 z-10'>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon"
                  className='h-8 w-8 shadow-sm'
                >
                  <MoreVertical className='h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-80 p-4' align='end'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0'>
                    <MessageSquare className='h-5 w-5 text-red-500 mt-0.5' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='font-medium text-sm text-red-600 mb-2'>
                      Rejection Reason
                    </h4>
                    <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                      {rejectionReason || "The submitted model doesn't meet our quality standards. Please ensure the model is properly optimized, has correct dimensions, and includes all necessary files for 3D printing."}
                    </p>
                    <div className='mt-3 pt-3 border-t'>
                      <p className='text-xs text-muted-foreground'>
                        Rejected by Admin • 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className='flex flex-col mt-[16px] gap-[4px] w-full'>
        <Link href='/product'>
          <h3 className='text-[18px] font-semibold'>Product Name</h3>
        </Link>

        <div className='flex w-full items-center justify-between'>
          {/* Data ini muncul ketika kondisi product sudah di published ke publik */}
          {status === 'published' && (
            <div className='flex items-center gap-[8px]'>
              <p className='flex items-center text-muted-foreground text-[16px] gap-[4px]'>
                <MdOutlineFileDownload className='size-[20px]'/>
                0
              </p>
              <p className='flex items-center text-muted-foreground text-[16px] gap-[4px]'>
                <AiOutlineLike className='size-[20px]'/>
                0
              </p>
            </div>
          )}
          
          {/* Status indicator untuk verifying dan rejected */}
          {status === 'verifying' && (
            <div className='flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs'>
              <span>Under Review</span>
            </div>
          )}
          
          {status === 'rejected' && (
            <div className='flex items-center gap-1 px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs'>
              <span>Rejected</span>
            </div>
          )}
          
          <div className='right-0 flex items-center gap-[12px] justify-end'>
            <Button className='rounded-[4px]' variant='outline'>
              Edit
            </Button>
            <Button className='rounded-[4px]' variant='destructive'>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
