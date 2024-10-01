import React from 'react'
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <div className='flex justify-between items-center py-8'>
        <Icon icon="heroicons-outline:menu-alt-1" width={30}/>

        <div className='flex gap-3 items-center text-xl font-semibold'>
            <p className='font-two font-bold text-2xl'>P</p>
            <p className='text-lg'>Off.pstore</p>
        </div>

        <div className='font-semibold flex gap-8 items-center'>
            <p>About</p>
            <p>FAQs</p>
            <div className='border rounded-full p-2'>
                <Icon icon="ic:outline-shopping-bag" width={30} className=''/>
            </div>
        </div>
    </div>
  )
}

export default Navbar