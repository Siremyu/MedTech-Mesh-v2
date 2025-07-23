"use client"

import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { FiUpload } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Separator } from './ui/separator'
import { MdPerson, MdSettings, MdLogout } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [showLoginModal, setShowLoginModal] = React.useState(false)
    const [showSmMenu, setShowSmMenu] = React.useState(false)
    const [showSearchOverlay, setShowSearchOverlay] = React.useState(false)

    const handleSearchClick = () => {
        setShowSearchOverlay(true)
    }

    const handleCloseSearch = () => {
        setShowSearchOverlay(false)
    }

    const handleSearchSubmit = (searchTerm: string) => {
        // Logic untuk melakukan search
        console.log('Searching for:', searchTerm)
        // Tambahkan logic search di sini
        // Misalnya redirect ke halaman search atau trigger search function
    }

    const handleSearchIconClick = (inputRef: React.RefObject<HTMLInputElement | null>) => {
        if (inputRef.current) {
            const searchValue = inputRef.current.value.trim()
            if (searchValue) {
                handleSearchSubmit(searchValue)
            }
        }
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement
            const searchValue = target.value.trim()
            if (searchValue) {
                handleSearchSubmit(searchValue)
            }
        }
        if (e.key === 'Escape') {
            handleCloseSearch()
        }
    }

    const mobileSearchInputRef = React.useRef<HTMLInputElement>(null)
    const desktopSearchInputRef = React.useRef<HTMLInputElement>(null)

    return (
        <header className='fixed top-0 z-50 border-b-1 w-full bg-background'>
            {/* Search Overlay untuk mobile */}
            <div 
                className={`fixed top-0 left-0 w-full h-16 bg-background border-b z-60 flex items-center px-4 transition-all duration-300 ease-in-out ${
                    showSearchOverlay 
                        ? 'opacity-100 scale-x-100 translate-y-0' 
                        : 'opacity-0 scale-x-0 -translate-y-full pointer-events-none'
                }`}
                style={{
                    transformOrigin: 'center center'
                }}
            >
                <div className="flex items-center w-full gap-3">
                    <div className="relative flex-1">
                        <button 
                            type="button"
                            onClick={() => handleSearchIconClick(mobileSearchInputRef)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-10"
                        >
                            <HiOutlineSearch className="size-[18px]" />
                        </button>
                        <Input 
                            ref={mobileSearchInputRef}
                            placeholder='Search...' 
                            className='rounded-full pl-12 pr-4'
                            autoFocus
                            onKeyDown={handleInputKeyDown}
                        />
                    </div>
                </div>
            </div>

            {/* Backdrop untuk menutup search overlay */}
            {showSearchOverlay && (
                <div 
                    className="fixed inset-0 z-50 bg-transparent"
                    style={{ top: '64px' }}
                    onClick={handleCloseSearch}
                />
            )}

            <NavigationMenu className=''>
                <NavigationMenuList className='flex items-center justify-between w-screen py-[12px] px-[14px] lg:px-[50px]'>
                    {/* menu kiri */}
                    <div className='flex items-center gap-[24px]'>
                        <NavigationMenuItem className='flex lg:hidden'>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className='size-[40px] rounded-full' variant='ghost' size='icon'>
                                        <RxHamburgerMenu className='size-[20px]'/>
                                    </Button>
                                </DropdownMenuTrigger>
                                    <DropdownMenuContent className='flex flex-col gap-[14px] mt-[8px] w-[300px] mx-[20px]'>
                                    <DropdownMenuItem className='w-full'>
                                        <Link href='/' className='w-full'>
                                            Community
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='w-full'>
                                        <Link href='/' className='w-full'>
                                            Forum
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/'>
                                <img alt="logo" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='text-[16px] hidden lg:block '>
                            <Link href='/'>
                            Community
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='text-[16px] hidden lg:block'>
                            <Link href='/'>
                            Forum
                            </Link>
                        </NavigationMenuItem>
                    </div>
                    {/* menu kanan */}
                    <div className='flex items-center md:gap-[24px] gap-[12px]'>
                        <NavigationMenuItem className='md:hidden'>
                            <Button 
                                size='icon' 
                                variant='ghost' 
                                className='rounded-full'
                                onClick={handleSearchClick}
                            >
                                <HiOutlineSearch className='size-[20px]'/>
                            </Button>
                        </NavigationMenuItem>

                        <NavigationMenuItem className='hidden md:flex'>
                            <div className="relative">
                                <button 
                                    type="button"
                                    onClick={() => handleSearchIconClick(desktopSearchInputRef)}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-10"
                                >
                                    <HiOutlineSearch className="size-[18px]" />
                                </button>
                                <Input 
                                    ref={desktopSearchInputRef}
                                    placeholder='Search...' 
                                    className='rounded-full w-[300px] pl-12 pr-4'
                                    onKeyDown={handleInputKeyDown}
                                />
                            </div>
                        </NavigationMenuItem>

                        {/* jika belum login */}
                        <NavigationMenuItem className='hidden'>
                            <Button 
                            className='rounded-full px-[32px] py-[12px] text-[16px] font-bold cursor-pointer'
                            onClick={() => setShowLoginModal(true)}
                            >
                            Login
                            </Button>
                        </NavigationMenuItem>

                        {/* jika sudah login */}

                        {/* button upload lg */}
                        <Button className='rounded-full px-[18px] py-[12px] text-[16px] hidden lg:flex' variant='secondary'>
                            <Link href='/upload' className='flex items-center gap-[8px]'>
                                <FiUpload/>
                                Upload
                            </Link>
                        </Button>

                        {/* button upload sm */}
                        <Button className='rounded-full text-[16px] lg:hidden' variant='secondary' size='icon'>
                            <Link href='/upload' className='flex items-center gap-[8px]'>
                                <FiUpload/>
                            </Link>
                        </Button>

                        <Button className='rounded-full text-[16px]' size='icon' variant='ghost'>
                            <IoIosNotifications className='size-[20px]'/>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger className='rounded-full'>
                                <Avatar className='size-[40px] cursor-pointer'>
                                    <AvatarImage/>
                                    <AvatarFallback>SN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='w-[317px] px-[14px] py-[12px] flex flex-col gap-[14px] mt-[8px] mr-[12px]'>
                                {/* avatar user */}
                                <div className='flex items-center gap-[12px] focus:bg-none py-1'>
                                    <Link href='/profile'>
                                        <Avatar className='size-[55px] cursor-pointer'>
                                            <AvatarImage alt="Profile Picture" />
                                            <AvatarFallback>SN</AvatarFallback>
                                        </Avatar>                                    
                                    </Link>
                                    <div className='flex flex-col justify-start'>
                                        <Link href='/profile'>
                                            <p className='text-[16px] font-semibold hover:text-blue-500 cursor-pointer'>Profile Name</p>
                                        </Link>
                                        <p className='text-[16px]'>@username</p>
                                    </div>
                                </div>
                                <Separator/>
                                <div>
                                    <DropdownMenuItem>
                                        <Link href='/profile' className='flex items-center text-[16px] py-[2px]'>
                                            <MdPerson className='mr-[8px]'/>
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href='/settings' className='flex items-center text-[16px] py-[2px]'>
                                            <MdSettings className='mr-[8px]'/>
                                            Account Settings
                                        </Link>
                                    </DropdownMenuItem>  
                                </div>
                                <Separator/>
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Button variant='ghost' className='text-red-500 w-full rounded-[8px] text-[16px] justify-start cursor-pointer'>
                                            <MdLogout className=''/>
                                            Logout
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Logout</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to logout?
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction className='bg-red-500 text-white hover:bg-red-600'>Logout</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
