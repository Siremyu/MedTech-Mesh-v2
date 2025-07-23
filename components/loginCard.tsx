import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { FaGithub, FaGoogle } from "react-icons/fa"

export default function LoginCard() {
  return (
    <>
        <Dialog>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Login
                    </DialogTitle>
                    <DialogDescription>
                        Please enter your credentials to login.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div>
                        <div className='flex flex-col gap-[8px]'>
                            <Label>
                                Email
                            </Label>
                            <Input type='email'/>
                        </div>
                        <div className='flex flex-col gap-[8px] mt-[16px]'>
                            <Label>
                                Password
                            </Label>
                            <Input type='password'/>
                        </div>
                        <Button className='rounded-[8px] w-full mt-[16px] font-bold text-[16px]'>
                            Login
                        </Button>
                        <div className='flex items-center justify-between mt-[16px]'>
                            <hr />
                            <p>OR</p>
                            <hr />
                        </div>
                        <div className='grid grid-cols-2 gap-[12px] w-full'>
                            <Button 
                                type="button"
                                className="w-full py-[12px] text-[16px] items-center justify-center cursor-pointer"
                            >
                                <FaGithub className="mr-[8px]" />
                                GitHub
                            </Button>
                            <Button 
                                type="button"
                                variant="outline" 
                                className="w-full py-[12px] text-[16px] items-center justify-center cursor-pointer"
                                >
                                <FaGoogle className="mr-[8px]" />
                                Google
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    </>
  )
}
