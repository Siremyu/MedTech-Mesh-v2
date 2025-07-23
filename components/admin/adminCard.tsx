import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { Button } from '../ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Clock } from 'lucide-react'
import { Card } from '../ui/card'

export default function AdminCard() {
  return (
    <Card className='max-w-[345px] p-4 shadow-none'>
      {/* Thumbnail with Status Badge */}
      <div className='relative'>
        <Link href='/product' className='block'>
          <img 
            alt="Product Thumbnail" 
            className='w-full aspect-[4/3] bg-gray-300 rounded-[4px]'
          />
        </Link>
        {/* Status Badge positioned over thumbnail */}
        <div className='absolute top-2 left-2 z-10'>
          <div className='flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs'>
            <Clock className='w-3 h-3' />
            Waiting Approval
          </div>
        </div>
      </div>
      
      <div className='flex items-start gap-[16px] mb-4'>
        <Link href='/profile'>
          <Avatar className='size-[45px]'>
            <AvatarImage/>
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
        </Link>
        <div className='flex flex-col justify-start flex-1'>
          <Link href='/product' className='text-[16px]'>
            <h3 className='text-[18px] font-semibold line-clamp-2'>Product Name</h3>
          </Link>
          <Link href='/profile' className='text-[14px] text-gray-500'>
            <p className='text-[16px] text-gray-500'>Author</p>            
          </Link>
          <p className='text-sm text-gray-400 mt-1'>Submitted 2 days ago</p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className='flex items-center gap-[12px] justify-end'>
        <Button className='rounded-[4px] bg-green-500 hover:bg-green-600 text-white' variant='default'>
          Approve
        </Button>              
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className='rounded-[4px]' variant='destructive'>
              Reject
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Reject Product Submission
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className='flex flex-col gap-2'>
              <Label htmlFor="rejection-reason">Rejection Reason</Label>
              <Textarea
                id="rejection-reason"
                placeholder="Please provide a detailed reason for rejecting this product submission..."
                rows={4}
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction className='bg-red-500 hover:bg-red-600 text-white'>
                Reject Product
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Card>
  )
}
