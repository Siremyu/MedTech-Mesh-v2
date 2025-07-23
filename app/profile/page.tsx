import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ProfileGrid from '@/components/profile/grid'
import React from 'react'

export default function ProfilePage() {
  return (
    <>
        <Navbar/>
        <main className="pt-[64px] flex flex-col gap-[32px] pb-[75px]">
            <ProfileGrid/>
        </main>
        <Footer/>
    </>
  )
}
