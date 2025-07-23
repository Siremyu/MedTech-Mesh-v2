'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Clock, HardHat } from 'lucide-react'
import ProfileCard from './profileCard'

export default function MenuKanan() {
  const [activeTab, setActiveTab] = useState('Home')
  const [activeSubTab, setActiveSubTab] = useState('published')
  
  const tabs = [
    'Home',
    'Collections', 
    '3d Models',
    'Laser & Cut Models',
    'Posts',
    'Ratings'
  ]

  const subTabs3D = [
    { key: 'published', label: 'Published Models', count: 57 },
    { key: 'verifying', label: 'Verifying Models', count: 12 },
    { key: 'rejected', label: 'Rejected Models', count: 3 }
  ]

  // Komponen Coming Soon
  const ComingSoonContent = () => (
    <div className='flex flex-col items-center justify-center py-16 text-center'>
      <div className='w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6'>
        <HardHat className='w-10 h-10 text-gray-400' />
      </div>
      <h3 className='text-xl font-semibold text-gray-700 mb-2'>Coming Soon</h3>
      <p className='text-gray-500 max-w-md'>
        This feature is under development and will be available soon. Stay tuned for updates!
      </p>
      <div className='flex items-center gap-2 mt-4 text-gray-400'>
        <Clock className='w-4 h-4' />
        <span className='text-sm'>In Development</span>
      </div>
    </div>
  )

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
        {activeSubTab === 'published' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <ProfileCard status="published"/>
            <ProfileCard status="published"/>
            <ProfileCard status="published"/>
            <ProfileCard status="published"/>
            <ProfileCard status="published"/>
          </div>
        )}

        {activeSubTab === 'verifying' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <ProfileCard status="verifying"/>
            <ProfileCard status="verifying"/>
            <ProfileCard status="verifying"/>
            <ProfileCard status="verifying"/>
            <ProfileCard status="verifying"/>
          </div>
        )}

        {activeSubTab === 'rejected' && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <ProfileCard 
              status="rejected" 
              rejectionReason="The model has quality issues with mesh topology and is not suitable for 3D printing."
            />
            <ProfileCard 
              status="rejected" 
              rejectionReason="Missing required files and documentation for proper usage."
            />
            <ProfileCard 
              status="rejected" 
              rejectionReason="Copyright violation detected. Please ensure you have rights to distribute this model."
            />
          </div>
        )}
      </div>
    </div>
  )

  // Render konten berdasarkan tab aktif
  const renderTabContent = () => {
    if (activeTab === '3d Models') {
      return <ThreeDModelsContent />
    } else {
      return <ComingSoonContent />
    }
  }

  return (
    <div className='border-l-1 pl-6 min-h-screen pt-[40px] w-full'>
      {/* Tab Navigation */}
      <div className='flex flex-wrap gap-4 mb-2 border-b-1 w-full font-medium'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-1 border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600 font-medium'
                : 'border-transparent text-muted-foreground hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className='mb-8'>
        {renderTabContent()}
      </div>
    </div>
  )
}
