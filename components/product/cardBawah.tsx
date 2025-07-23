import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaImage } from "react-icons/fa6";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tag } from 'lucide-react';

export default function CardBawah() {
  return (
    <Card className='shadow-none w-full'>
      <CardContent className=''>
        <div>
          {/* style isinya tergantung user mau di style kayak gimana, bebas */}
          <p className='text-[14px] text-gray-500 leading-7 [&:not(:first-child)]:mt-6'>
            Description
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In libero possimus sunt distinctio exercitationem cum nesciunt ad cupiditate quo. Ut nemo vel obcaecati saepe, molestiae laudantium esse minus fuga maxime neque veniam. Minima itaque eligendi perferendis iure voluptates consequuntur quis, quam amet delectus aliquam debitis unde dicta! Cumque nisi error quasi fuga quo libero esse, animi, cum distinctio laborum nobis id! Magnam excepturi sequi dolores praesentium ullam facere. Eaque et voluptatem quod nobis pariatur deleniti optio dolore iste beatae ducimus eum porro quibusdam deserunt nihil, reiciendis voluptatum sunt! Labore quisquam eligendi natus ipsa ad sed nihil excepturi itaque minima officiis?
          </p>
        </div>
        {/* lisensi dinamis, sesuai apa yang dipilih user di page uplaod */}
        <p className='mt-2 text-muted-foreground text-sm'>License: CC Attribution</p>

        <div className='flex items-center justify-start gap-2 mt-1'>
          <Tag className='size-[20px] text-muted-foreground'/>
          <div className='flex items-center gap-1'>
            <Badge className='px-3' variant='secondary'>Tag</Badge>
            <Badge className='px-3' variant='secondary'>Tag</Badge>
            <Badge className='px-3' variant='secondary'>Tag</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
