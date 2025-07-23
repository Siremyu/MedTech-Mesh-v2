'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Clock, HardHat } from 'lucide-react'
import AdminCard from './adminCard'

export default function MenuKanan() {
  const [activeSubTab, setActiveSubTab] = useState('waiting')
  
  // Hanya tab 3D Models
  const tabs = ['3d Models']
  
  // Hanya sub-tab waiting
  const subTabs3D = [
    { key: 'waiting', label: 'Waiting for Approval', count: 12 }
  ]

  const ThreeDModelsContent = () => (
    <div>
      <div className='flex gap-0 mb-6 bg-background rounded-lg p-1 w-fit'>
        {subTabs3D.map((subTab, index) => (
          <React.Fragment key={subTab.key}>
            <button
              onClick={() => setActiveSubTab(subTab.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeSubTab === subTab.key
                  ? 'bg-background text-blue-600'
                  : 'text-muted-foreground hover:bg-background'
              }`}
            >
              {subTab.label} ({subTab.count})
            </button>
            {index < subTabs3D.length - 1 && (
              <div className="w-px bg-border self-stretch mx-1" />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Konten berdasarkan sub-tab aktif */}
      <div className='space-y-6'>
        {activeSubTab === 'waiting' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <AdminCard/>
            <AdminCard/>
            <AdminCard/>
            <AdminCard/>
            <AdminCard/>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className='border-l-1 pl-6 min-h-screen pt-[40px] w-full'>
      {/* Tab Navigation - Hanya 3D Models */}
      <div className='flex flex-wrap gap-4 mb-2 border-b-1 w-full font-medium'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className='pb-3 px-1 border-b-2 border-blue-500 text-blue-600 font-medium'
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Dynamic Content - Langsung tampilkan 3D Models */}
      <div className='mb-8'>
        <ThreeDModelsContent />
      </div>
    </div>
  )
}
