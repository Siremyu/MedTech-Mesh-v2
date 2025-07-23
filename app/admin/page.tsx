import AdminGrid from '@/components/admin/grid'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

export default function AdminPage() {
  return (
    <>
        <Navbar/>
        <main className="pt-[64px] flex flex-col gap-[32px] pb-[75px]">
            <AdminGrid/>
        </main>
        <Footer/>
    </>
  )
}
