import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { FaStarOfLife } from "react-icons/fa";
import { Label } from '../ui/label';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";

export default function ModelPictures() {
  return (
    <>
        <Card className='shadow-none max-w-[1200px] w-full'>
          <CardHeader className='border-b-1 w-full pb-3'>
              <CardTitle className='flex items-center gap-[8px]'>
                  Model Picture
              </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col gap-[14px] justify-start'>
                  <div>
                    <p className='text-[16px] font-medium'>Model Cover</p>
                    <p className='text-[14px] text-muted-foreground'>jpg/png/gif, &le; 30MB. Please use real print photos</p>
                  </div>
                  <div className='flex gap-[8px] flex-col'>
                    <Label className='flex gap-[4px] text-muted-foreground text-[14px]'>
                      <FaStarOfLife className='text-red-500 size-[8px]'/>
                      Web Cover
                    </Label>

                    {/* placeholder/place for drag and drop/add image */}
                    <div className='aspect-[4/3] w-[220px] border-1 rounded-[4px] items-center flex flex-col justify-center'>
                      <MdOutlineAddPhotoAlternate className='size-[18px]'/>
                      <p className='text-[14px]'>
                        4:3 Cover
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-[8px] justify-start'>
                  <div>
                    <p className='text-[16px] font-medium'>Model Pictures (0/16)</p>
                    <p className='text-[14px] text-muted-foreground'>Photos of printed project</p>
                  </div>
                  <div className='grid lg:grid-cols-6 md:grid-cols-4 gap-[8px] grid-cols-3'>
                    {/* placeholder/place for drag and drop/add image */}
                    <div className='aspect-[4/3] w-[180px] border-1 rounded-[4px] items-center flex flex-col justify-center'>
                      <MdOutlineAddPhotoAlternate className='size-[18px]'/>
                    </div>

                    {/* ketika image sudah diupload berganti menjadi img seperti dibawah */}
                    <img alt="" className='aspect-[4/3] w-[180px] hidden rounded-[4px]'/>
                  </div>
                </div>

                <div className='flex flex-col gap-[8px] justify-start'>
                  <div>
                    <p className='text-[16px] font-medium'>3D Model Preview</p>
                    <p className='text-[14px] text-muted-foreground'>Full 3d model in one file for preview</p>
                  </div>
                  <div className='flex'>
                    {/* placeholder/place for drag and drop/add 3d model for 3d model preview in product page */}
                    <div className='aspect-[4/3] w-[180px] border-1 rounded-[4px] items-center flex flex-col justify-center gap-[4px]'>
                      <MdOutlineUploadFile className='size-[18px]'/>
                      <p className='text-[14px] text-center'>
                        .stl, .gltf, .glb, .obj, .fbx, .dae
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </CardContent>
        </Card>
    </>
  )
}
