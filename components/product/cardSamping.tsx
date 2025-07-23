import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { AiOutlineLike } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { Button } from '../ui/button';
import { PiShareFatLight } from "react-icons/pi";

export default function CardSamping() {
  return (
    <Card className='shadow-none w-full'>
      <CardContent className=''>
        <div className='flex flex-col gap-4'>
          <div className='flex rounded-lg overflow-hidden'>
            <Button variant='ghost' className='flex-1 rounded-none border-none'>
              <AiOutlineLike className='mr-2'/>
              100
            </Button>
            <Button variant='ghost' className='flex-1 rounded-none border-none hover:bg-background cursor-default'>
              <FiDownload className='mr-2'/>
              100
            </Button>
            <Button variant='ghost' className='flex-1 rounded-none border-none'>
              <PiShareFatLight className='mr-2'/>
              100
            </Button>
          </div>
          <Button className='w-full'>
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
