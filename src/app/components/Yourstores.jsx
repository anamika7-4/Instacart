import Image from 'next/image'
import React from 'react'

const home = () => {
  return (
    <div className='px-20 py-10'>
      <h1 className='text-2xl font-bold'>Your Stores</h1>
      <div className='grid grid-cols-10 py-10'>
        <div >
          <Image  className='rounded'  src="/safeway.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>safeway</h1>
            <h1>45min</h1>
          </div>
          
        </div>
        <div >
          <Image   className='rounded'      src="/costco.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>costco</h1>
            <h1>By 11 am</h1>
          </div>
        </div><div >
          <Image   className='rounded'       src="/sprouts.webp" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>sprouts</h1>
            <h1 className='font-bold bg-amber-400 w-15'>$15off</h1>
          </div>
        </div><div >
          <Image  className='rounded'             src="/target.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>target</h1>
            <h1>By 8:15Am</h1>
          </div>
        </div><div >
          <Image  className='rounded'           src="/foodsandco.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>foodsandco</h1>
            <h1>45min</h1>
          </div>
        </div><div >
          <Image   className='rounded'                 src="/walmart.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>walmart</h1>
            <h1 className='font-bold bg-amber-300 w-30'>No markups</h1>
          </div>
        </div><div >
          <Image className='rounded'             src="/smart and final.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>smart and final</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$5off</h1>
          </div>
        </div><div >
          <Image className='rounded'            src="/w.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>walgreen</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$10off</h1>
          </div>
        </div><div >
          <Image    className='rounded'             src="/cvs.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>cvs</h1>
            <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
          </div>
        </div><div >
          <Image  className='rounded'                 src="/lowes.png" width={100} height={100}  alt='image'/>
          <div>
            <h1 className='font-semibold'>lowes</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$15off</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home


