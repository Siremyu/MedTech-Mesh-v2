import React from 'react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CiFilter } from "react-icons/ci";
import { Separator } from '../ui/separator';

export default function Categoriee() {
  return (
    <section className='px-[50px] md:items-center md:justify-between justify-start flex-col md:flex-row flex'>
        {/* menu kiri */}
        <div className='flex items-center gap-[20px] md:gap-[32px]'>
            <div className='flex items-center gap-[14px]'>
                <Button variant='outline' className='w-[100px] items-center justify-between'>
                    <MdOutlineStarBorder className='size-[18px]' />
                    Popular
                </Button>
                <Button variant='outline'>
                    <BsClockHistory className='size-[18px]' />
                    Newest
                </Button>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger className='rounded-[8px]'>
                    <Button variant='outline' className='w-[130px] px-[8px] flex items-center justify-between'>
                        30 Days
                        <IoIosArrowDown className='ml-[10px]' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[100px]'>
                    <DropdownMenuItem>
                        All Time
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        7 Days
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        30 Days
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        This Year
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <Separator className='sm:block md:hidden my-4' />

        {/* menu kanan */}
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button variant='outline' className='w-[90px] px-[8px] flex items-center justify-between'>
                        Filter
                        <CiFilter className='size-[18px]' />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Filter Options
                        </DialogTitle>
                    </DialogHeader>
                    <form>
                        <div>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className='cursor-pointer'>
                                        Category
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='grid grid-cols-4 gap-[10px]'>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                All Categories
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Brace
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Necklace
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Earring
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Ring
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Pendant
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Brooch
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Anklet
                                            </Button>
                                            <Button variant='outline' className='px-[20px] cursor-pointer'>
                                                Jewelry Set
                                            </Button>    
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </form>
                    <DialogFooter>
                        <Button className='w-fit px-[20px]'>
                            Search
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </section>
  )
}
