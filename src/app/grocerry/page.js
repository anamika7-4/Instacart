import React from 'react'
import Image from 'next/image'
const grocerry = () => {
  return (
    <div className='px-20 py-10'>
                <h1 className='text-2xl font-bold'>GROCERRY</h1>
                <div className='grid grid-cols-10'>
                  <div>
                    <Image src="/eggs.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Eggs</h1>
                  </div>
                  <div>
                    <Image src="/milk.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Milk</h1>
                  </div>
                  <div>
                    <Image src="/cake.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Cake</h1>
                  </div>
                  <div>
                    <Image src="/flowers.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Flowers</h1>
                  </div>
                  <div>
                    <Image src="/wine.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Wine</h1>
                  </div>
                  <div>
                    <Image src="/beer.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Beer</h1>
                  </div>
                  <div>
                    <Image src="/chicken.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Chicken</h1>
                  </div>
                  <div>
                    <Image src="/beef.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Beef</h1>
                  </div>
                  <div>
                    <Image src="/laundry.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Laundry</h1>
                  </div>
                  <div>
                    <Image src="/tissue.png"width={100}height={100}alt='image'/>
                    <h1 className='font-bold px-6'>Tissue</h1>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold text-xl py-5'>Stores near to you</h1>
                  <div className='grid grid-cols-3 py-10'>
                                      <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                          <Image  src="/safeway.png" width={100} height={100} alt='image ' />
                                          <div className='relative left-30 bottom-25 '>
                                          <h1 className='text-xl font-bold'>Safeway</h1>
                                          <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                          <h1>Pick up by available</h1>
                                          <h1>EBT lots of deal</h1>
                                          </div>
                                      </div>
                                      <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                          <Image src="/costco.png" width={100} height={100} alt='image' />
                                          <div className='relative left-30 bottom-25 '>
                                          <h1 className='text-xl font-bold'>Costco</h1>
                                          <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                          <h1>Pick up by available</h1>
                                          <h1>EBT lots of deal</h1>
                                          </div>
                                      </div>
                                      <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                          <Image src="/sprouts.webp" width={100} height={100} alt='image' />
                                          <div className='relative left-30 bottom-25 '>
                                          <h1 className='text-xl font-bold'>Sprouts </h1>
                                          <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                          <h1>Pick up by available</h1>
                                          <h1>EBT lots of deal</h1>
                                          </div>
                                      </div>
                                  </div>
                                  <div className='grid grid-cols-3 py-10'>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image  src="/sprouts.webp" width={100} height={100} alt='image ' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>Sprouts</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image src="/w.png" width={100} height={100} alt='image' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>Webgreen</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image src="/smart and final.png" width={100} height={100} alt='image' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>Smart And Final</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           
                                                           <div className='grid grid-cols-3 py-10'>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image className='' src="/worldmarket.png" width={100} height={100} alt='image ' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>World Market</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image src="/target.png" width={100} height={100} alt='image' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>target</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                               <div className='py-10 w-80 h-50 rounded-2xl border-2 border-gray-400 px-10'>
                                                                   <Image src="/sephora.png" width={100} height={100} alt='image' />
                                                                   <div className='relative left-30 bottom-25 '>
                                                                   <h1 className='text-xl font-bold'>Sephora</h1>
                                                                   <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
                                                                   <h1>Pick up by available</h1>
                                                                   <h1>EBT lots of deal</h1>
                                                                   </div>
                                                               </div>
                                                               </div>
                                  
                                  
                                          </div>
                </div>
      
    
  )
}

export default grocerry
