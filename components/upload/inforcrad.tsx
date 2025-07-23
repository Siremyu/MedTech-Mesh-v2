"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { FaStarOfLife } from "react-icons/fa";
import { Input } from '../ui/input';
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Textarea } from "../ui/textarea"
import { Button } from '../ui/button';
import { FaPlus } from "react-icons/fa6";
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  List, 
  ListOrdered, 
  Indent, 
  Outdent,
  Link, 
  Image,
  Table,
  Undo,
  Redo,
  Search
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function ModelInformation() {
  const [activeFormats, setActiveFormats] = useState<string[]>([]);

  return (
    <>
      <Card className='shadow-none max-w-[1200px] w-full'>
        <CardHeader className='border-b-1 w-full pb-3'>
          <CardTitle className='flex items-center gap-[8px]'>
            Model Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-[18px]'>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  <FaStarOfLife className='text-red-500 size-[8px]' />
                  Model Name
                </Label>
                <Input className='w-full rounded-[4px]'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  <FaStarOfLife className='text-red-500 size-[8px]' />
                  Category
                </Label>
                <Input className='w-full rounded-[4px]'placeholder='Quick search by entering category keywords'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  Tags (0/10)
                </Label>
                <Input className='w-full rounded-[4px]'placeholder='Press “Enter” to separate tags. Choose similar tags from the dropdown to boost discoverability'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  <FaStarOfLife className='text-red-500 size-[8px]' />
                  License
                </Label>
                <Card className='shadow-none rounded-[4px]'>
                  <CardContent className='flex flex-col gap-[16px]'>
                    <RadioGroup className='flex flex-col gap-[8px]' defaultValue="yes">
                      <div>
                        <Label>
                          Allow adaptations of your work to be shared?
                        </Label>
                        <div className='flex items-center gap-[16px] mt-2'>
                          <div className='flex items-center'>
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className='ml-2 font-normal'>Yes</Label>
                          </div>
                          <div className='flex items-center'>
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className='ml-2 font-normal'>No</Label>
                          </div>
                          <div className='flex items-center'>
                            <RadioGroupItem value="yes, as long as others share in the same way" id="yes, as long as others share in the same way" />
                            <Label htmlFor="yes, as long as others share in the same way" className='ml-2 font-normal'>Yes, as long as others share in the same way</Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                    <RadioGroup className='flex flex-col gap-[8px]' defaultValue="yes">
                      <div>
                        <Label>
                          Allow commercial uses of your work?
                        </Label>
                        <div className='flex items-center gap-[16px] mt-2'>
                          <div className='flex items-center'>
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className='ml-2 font-normal'>Yes</Label>
                          </div>
                          <div className='flex items-center'>
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className='ml-2 font-normal'>No</Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                    <RadioGroup className='flex flex-col gap-[8px]' defaultValue="yes">
                      <div>
                        <Label>
                          Allow sharing or redistributing of your work or its derivatives?
                        </Label>
                        <div className='flex items-center gap-[16px] mt-2'>
                          <div className='flex items-center'>
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className='ml-2 font-normal'>Yes</Label>
                          </div>
                          <div className='flex items-center'>
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className='ml-2 font-normal'>No</Label>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  <FaStarOfLife className='text-red-500 size-[8px]' />
                  Description
                </Label>
                
                {/* Rich Text Formatting Toggles */}
                <div className='border rounded-[4px] overflow-hidden'>
                  <div className='border-b p-2'>
                    <ToggleGroup 
                      type="multiple" 
                      value={activeFormats} 
                      onValueChange={setActiveFormats}
                      className='justify-start gap-1'
                    >
                      {/* Text Style Group */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="bold" aria-label="Bold" size="sm">
                            <Bold className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Bold</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="italic" aria-label="Italic" size="sm">
                            <Italic className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Italic</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="underline" aria-label="Underline" size="sm">
                            <Underline className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Underline</TooltipContent>
                      </Tooltip>
                      
                      <div className="w-px h-6 bg-gray-300 mx-1" />
                      
                      {/* Alignment Group */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="align-left" aria-label="Align Left" size="sm">
                            <AlignLeft className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Align Left</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="align-center" aria-label="Align Center" size="sm">
                            <AlignCenter className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Align Center</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="align-right" aria-label="Align Right" size="sm">
                            <AlignRight className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Align Right</TooltipContent>
                      </Tooltip>
                      
                      <div className="w-px h-6 bg-gray-300 mx-1" />
                      
                      {/* List Group */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="bullet-list" aria-label="Bullet List" size="sm">
                            <List className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Bullet List</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="numbered-list" aria-label="Numbered List" size="sm">
                            <ListOrdered className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Numbered List</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="indent" aria-label="Indent" size="sm">
                            <Indent className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Increase Indent</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="outdent" aria-label="Outdent" size="sm">
                            <Outdent className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Decrease Indent</TooltipContent>
                      </Tooltip>
                      
                      <div className="w-px h-6 bg-gray-300 mx-1" />
                      
                      {/* Insert Group */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="link" aria-label="Insert Link" size="sm">
                            <Link className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Insert Link</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="image" aria-label="Insert Image" size="sm">
                            <Image className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Insert Image</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="table" aria-label="Insert Table" size="sm">
                            <Table className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Insert Table</TooltipContent>
                      </Tooltip>
                      
                      <div className="w-px h-6 bg-gray-300 mx-1" />
                      
                      {/* Action Group */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="undo" aria-label="Undo" size="sm">
                            <Undo className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Undo</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="redo" aria-label="Redo" size="sm">
                            <Redo className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Redo</TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <ToggleGroupItem value="search" aria-label="Search" size="sm">
                            <Search className="h-3 w-3" />
                          </ToggleGroupItem>
                        </TooltipTrigger>
                        <TooltipContent>Search</TooltipContent>
                      </Tooltip>
                    </ToggleGroup>
                  </div>
                  
                  <Textarea 
                    className='border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-32' 
                    placeholder="Tell others about your model" 
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <Label className='text-[16px] font-medium flex items-center'>
                  Documentation
                </Label>
                <Button className='text-blue-500 items-center flex border-blue-500 bg-blue-100 hover:bg-blue-100/50 hover:border-blue-500/50 hover:text-blue-500/50 rounded-none border-2 aspect-[254/40] w-[190px]' variant='outline'>
                  <FaPlus className='size-[12px]' /> Add Documentation
                </Button>

                {/* unhide ketika foto dokumentasi diupload/ditambahkan */}
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[8px] mt-[4px]'>
                  <img alt='Documentation' className='aspect-[4/3] w-[180px] border-1 rounded-[4px] hidden' />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
