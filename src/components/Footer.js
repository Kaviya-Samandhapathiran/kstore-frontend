import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4 flex flex-col flex-wrap justify-center items-center gap-3'>
        <Logo w={90} h={50} />
        <div className='flex flex-wrap gap-5 justify-center items-center text-center font-bold text-lg cursor-pointer'>
          <p className='hover:underline'>Conditions of Use & Sale</p>
          <p className='hover:underline'>Privacy Notice</p>
          <p className='hover:underline'>Interest-Based Ads</p>
        </div>
        <p className='text-center text-lg font-bold'>© 1999-2025, <span className='text-orange-500'>K</span> Store.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer