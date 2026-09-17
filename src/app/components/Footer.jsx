import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[40vh] bg-amber-100  py-10 '>
            <div className='px-170 '>
                <Image src="/carrot.svg" width={50} height={0} alt='image' />
            </div>
            <h1 className='text-2xl font-semibold px-145 '>There's more to explore</h1>
            <h1 className='px-130 font-semibold'>Shop 120 stores (and counting) in San Francisco.</h1>
            <div className='px-160 py-10'>
                <button className=' bg-green-800 text-white font-bold rounded-3xl pt-2 pb-2 pl-5 pr-5'>View all stores</button>

            </div>
        </div>
    )
}

export default Footer
