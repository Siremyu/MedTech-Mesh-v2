import React from 'react'
import { Dialog, DialogContent } from './ui/dialog'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp'

export default function Otpp() {
  return (
    <>
        <Dialog>
            <DialogContent className='flex flex-col w-[400px]'>
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0}/>
                        <InputOTPSlot index={1}/>
                        <InputOTPSlot index={2}/>
                        <InputOTPSlot index={3}/>
                        <InputOTPSlot index={4}/>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>
                <p className='text-[14px] text-muted-foreground mt-[16px]'>
                    Please enter the OTP sent to your email address. The OTP is valid for 5 minutes.
                </p>
            </DialogContent>
        </Dialog>
    </>
  )
}
