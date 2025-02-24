import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray-500 text-xs'>
                    More ways to shop:
                    <span className='underline text-blue-500 cursor-pointer'>
                        {' '} Find an Apple Store {' '}
                    </span>
                     or {' '}
                    <span className='underline text-blue-500 cursor-pointer'>
                        other retailer
                    </span>{' '}
                    near you.
                </p>
                <p className='font-semibold text-gray-500 text-xs'>
                    Or call 0614953691
                </p>
            </div>

            <div className='bg-neutral-700 my-5 h-[1px] w-full'/>

            <div className='flex md:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray-500 text-xs'>
                    Copyright © 2025 Apple Inc. All rights reserved.
                </p>
                <div className='flex gap-x-4'>
                    {footerLinks.map((link, index) => (
                        <p key={index} className='font-semibold text-gray-500 text-xs cursor-pointer hover:text-gray-300'>
                            {link}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
