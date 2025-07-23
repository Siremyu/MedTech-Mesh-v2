"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Separator } from './ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Footer() {
    const { setTheme } = useTheme()
    return (
        <footer className='fixed bottom-0 z-50 w-full border-t-1 bg-background px-4 sm:px-[50px] py-[12px]'>
            {/* Mobile Layout - Stacked */}
            <div className='block sm:hidden space-y-3'>
                <div className='flex items-center justify-between'>
                    <p className="text-xs text-gray-400">&copy; 2025 MedTech Mesh</p>
                    <div className='flex items-center gap-3 text-gray-500'>
                        <MdEmail className='size-5'/>
                        <AiFillInstagram className='size-5'/>
                        <AiFillYoutube className='size-5'/>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3 text-xs'>
                        <Select>
                            <SelectTrigger className='w-[80px] h-8 text-xs'>
                                <SelectValue defaultValue="en"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="id">ID</SelectItem>
                                <SelectItem value="en">EN</SelectItem>
                                <SelectItem value="zh">中文</SelectItem>
                            </SelectContent>
                        </Select>
                        <Link href="#" className="text-gray-400">Privacy</Link>
                        <Link href="#" className="text-gray-400">Terms</Link>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8 w-8">
                                <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Desktop Layout - Horizontal */}
            <div className='hidden sm:flex items-center justify-between'>
                <div className='text-gray-400 flex items-center space-x-6'>
                    <p className="text-sm">&copy; 2025 MedTech Mesh</p>
                    <Select>
                        <SelectTrigger className='w-[120px] outline-none focus-visible:border-none'>
                            <SelectValue defaultValue="en"/>
                        </SelectTrigger>
                        <SelectContent className='outline-none focus-visible:border-none'>
                            <SelectItem value="id">Indonesia</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="zh">中文</SelectItem>
                        </SelectContent>
                    </Select>
                    <Link href="#" className="text-sm">Privacy</Link>
                    <Link href="#" className="text-sm">Terms</Link>
                    <Link href="#" className="text-sm">Contact</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='flex items-center gap-[18px] text-gray-500'>
                    <Link href={"mailto:info@medtechmesh.com"}>
                        <MdEmail className='size-[25px] hover:scale-110 transition-transform duration-200'/>
                    </Link>
                    <Link href={"https://www.instagram.com/medtechmesh"} target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className='size-[25px] hover:scale-110 transition-transform duration-200'/>
                    </Link>
                    <Link href={"https://www.youtube.com/@medtechmesh"} target="_blank" rel="noopener noreferrer">
                        <AiFillYoutube className='size-[25px] hover:scale-110 transition-transform duration-200'/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
