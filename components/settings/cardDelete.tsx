import React from 'react'
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
import { Button } from '../ui/button'
import { FaTrashAlt } from "react-icons/fa";

export default function CardDelete() {
  return (
    <section className='px-[14px] lg:px-[50px] items-center justify-center w-full flex'>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='outline' className='w-full shadow-none justify-start py-6 text-[16px] text-red-500 hover:text-red-600 max-w-[1200px]'>
                    <FaTrashAlt className='' />
                    Delete Account
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. All your data will be permanently deleted.
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-red-500 text-white hover:bg-red-600'>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </section>
  )
}
