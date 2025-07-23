import React from 'react'
import { Button } from '../ui/button'

export default function FooterUpload() {
  return (
    <footer className='w-full flex items-center justify-center border-t-1 py-[24px] bg-background fixed bottom-0 z-50'>
        <Button className='bg-blue-400 hover:bg-blue-400/50 text-white hover:text-white/50 font-semibold text-[16px] px-[24px] py-[12px] rounded-[4px]'>
            Publish
        </Button>
    </footer>
  )
}
