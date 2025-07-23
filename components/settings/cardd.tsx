import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import { IoIosArrowForward } from 'react-icons/io'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Cardd() {
  return (
    <section className='px-[14px] lg:px-[50px] items-center justify-center w-full flex'>
        <Card className='shadow-none max-w-[1200px] w-full'>
            <CardHeader className='border-b-1 w-full pb-3'>
                <CardTitle className='scroll-m-20 text-[20px] font-semibold tracking-tight'>
                    Account Information
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex items-center justify-between border-b-1 pb-3'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Avatar</p>
                        <Avatar className='size-[95px]'>
                            <AvatarImage/>
                            <AvatarFallback>SN</AvatarFallback>
                        </Avatar>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Change Avatar</DialogTitle>
                                <DialogDescription>
                                    Select a new avatar for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant='outline'>Cancel</Button>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                {/* Display Name */}
                <div className='flex items-center justify-between border-b-1 py-[18px]'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Display Name</p>
                        <p className=''>Display Name</p>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Edit Display Name</DialogTitle>
                                <DialogDescription>
                                    Enter a new display name for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <div className='flex flex-col gap-[8px] mt-[12px]'>
                                <Label className=''>
                                    Display Name
                                </Label>
                                <Input placeholder='Display Name'/>
                            </div>
                            <DialogFooter>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* @Username */}
                <div className='flex items-center justify-between border-b-1 py-[18px]'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Username</p>
                        <p>@Username</p>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Edit Username</DialogTitle>
                                <DialogDescription>
                                    Enter a new username for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <div className='flex flex-col gap-[8px] mt-[12px]'>
                                <Label className=''>
                                    Username
                                </Label>
                                <Input placeholder='@Username'/>
                            </div>
                            <DialogFooter>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Email */}
                <div className='flex items-center justify-between border-b-1 py-[18px]'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Email</p>
                        <p>Email</p>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Edit Email</DialogTitle>
                                <DialogDescription>
                                    Enter a new Email for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <div className='flex flex-col gap-[8px] mt-[12px]'>
                                <Label className=''>
                                    Email
                                </Label>
                                <Input type='email' placeholder='Email'/>
                            </div>
                            <DialogFooter>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Gender */}
                <div className='flex items-center justify-between border-b-1 py-[18px]'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Gender</p>
                        <p className=''>Male</p>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Change Gender</DialogTitle>
                                <DialogDescription>
                                    Select a new gender for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Genders</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="non-binary">Non-binary</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <DialogFooter>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Region */}
                <div className='flex items-center justify-between pt-[18px]'>
                    <div className='flex items-center gap-[8px]'>
                        <p className='w-[300px] font-medium text-gray-500'>Region</p>
                        <p className=''>United States</p>
                    </div>
                    <Dialog>
                        <DialogTrigger>
                            <IoIosArrowForward className='cursor-pointer'/>
                        </DialogTrigger>
                        <DialogContent className='w-[400px]'>
                            <DialogHeader>
                                <DialogTitle>Change Region</DialogTitle>
                                <DialogDescription>
                                    Select a new region for your account.
                                </DialogDescription>
                            </DialogHeader>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Regions</SelectLabel>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="mx">Mexico</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>                            
                            <DialogFooter>
                                <Button type='submit'>Save</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    </section>
  )
}
