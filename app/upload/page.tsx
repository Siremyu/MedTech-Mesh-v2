import Navbar from '@/components/navbar'
import FooterUpload from '@/components/upload/footerUpload'
import Gridd from '@/components/upload/gridd'
import React from 'react'

export default function UploadPage() {
  return (
    <>
        <Navbar/>
        <main className="pt-[88px] pb-[98px]">
            <Gridd/>
        </main>
        <FooterUpload/>
    </>
  )
}
