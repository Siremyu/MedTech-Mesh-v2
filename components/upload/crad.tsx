import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MdOutlineUploadFile } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FaStarOfLife } from "react-icons/fa";

export default function Crad() {
  return (
    <>
        <Card className='shadow-none max-w-[1200px] w-full'>
            <CardHeader className='border-b-1 w-full pb-3'>
                <CardTitle className='flex items-center gap-[8px]'>
                    <FaStarOfLife className='text-red-500 size-[8px]'/>
                    Upload Model
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className='border-1 flex flex-col rounded-[8px]'>
                        <div className='w-full py-[56px] border-b-1'>
                            <div className='items-center flex justify-center flex-col gap-[8px]'>
                                <div className='flex items-center gap-[8px] justify-center'>
                                    <MdOutlineUploadFile className='size-[20px]'/>
                                    <p className='text-[18px] font-semibold'>Drag and drop your files here</p>
                                </div>
                                <p className='text-[16px] text-gray-500'>Supported 3D formats: blend, 3ds, obj, stl, zip, skp</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center py-[14px] w-full'>
                            <Button className='text-[16px] text-blue-500 border-blue-500 bg-blue-100 hover:bg-blue-100/50 hover:border-blue-500/50 hover:text-blue-500/50 rounded-[4px] border-2 font-semibold' variant='outline'>
                                <MdOutlineUploadFile className='size-[20px]'/>
                                Browse
                            </Button>
                        </div>

                        {/* muncul ketika ada file yang mau diupload/ketika sudah ada file yang di drag n drop */}
                        <div className='flex flex-col lg:flex-row items-start lg:items-center py-[32px] justify-between px-[20px] lg:px-[40px] w-full border-t-1 gap-[16px] lg:gap-0'>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-[18px] w-full lg:flex-1'>
                                <img alt="placeholder/tampilan dari file 3d modelnya" className='aspect-[5/4] w-[80px] sm:w-[100px] bg-gray-200 rounded-[4px] flex-shrink-0'/>
                                <div className='flex flex-col gap-[8px] w-full'>
                                    <div className='flex items-center justify-between border-1 px-[8px] py-[4px] w-full'>
                                        <p className='truncate'>Nama File</p>

                                            {/* format file */}
                                        <p className='text-gray-500 flex-shrink-0'>.stl</p>
                                    </div>
                                    <Input className='border-1 px-[8px] py-[4px] w-full rounded-none' placeholder='Note'/>
                                </div>
                            </div>
                            <div className='flex gap-[16px] lg:gap-[28px] items-center justify-between sm:justify-end w-full sm:w-auto lg:w-[120px]'>
                                <p className='text-sm lg:text-base'>6 MB</p>
                                <Button className='rounded-full' size='icon' variant='ghost'>
                                    <FaTrashAlt className='text-red-500 size-[16px] lg:size-[20px]'/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </form>
            </CardContent>
        </Card>
    </>
  )
}
