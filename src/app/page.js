import Image from 'next/image'
import React from 'react'

const home = () => {
  return (
    <div className='px-20 py-10'>
      <h1 className='text-2xl font-bold'>Your Stores</h1>
      <div className='grid grid-cols-10 py-10'>
        <div >
          <Image className='rounded' src="/safeway.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>safeway</h1>
            <h1>45min</h1>
          </div>

        </div>
        <div >
          <Image className='rounded' src="/costco.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>costco</h1>
            <h1>By 11 am</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/sprouts.webp" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>sprouts</h1>
            <h1 className='font-bold bg-amber-400 w-15'>$15off</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/target.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>target</h1>
            <h1>By 8:15Am</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/foodsandco.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>foodsandco</h1>
            <h1>45min</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/walmart.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>walmart</h1>
            <h1 className='font-bold bg-amber-300 w-30'>No markups</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/smart and final.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>smart and final</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$5off</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/w.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>walgreen</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$10off</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/cvs.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>cvs</h1>
            <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
          </div>
        </div><div >
          <Image className='rounded' src="/lowes.png" width={100} height={100} alt='image' />
          <div>
            <h1 className='font-semibold'>lowes</h1>
            <h1 className='font-bold bg-amber-300 w-20'>$15off</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl'>Beyond grocerry</h1>
        <div className='grid grid-cols-10 py-10'>
          <div >
            <Image className='rounded' src="/worldmarket.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>World Market</h1>
              <h1 className='bg-amber-300 w-30 font-bold'>No Markup</h1>
            </div>

          </div>
          <div >
            <Image className='rounded' src="/bestbuy.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Best Buy</h1>
              <h1 className='bg-amber-300 w-30 font-bold'>No Markup</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/michels.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Micheals</h1>
              <h1 className='font-bold bg-amber-400 w-15'>$15off</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/petssmart.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Pets smart</h1>
              <h1 className='bg-amber-300 w-30 font-bold'>No Markups</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/petco.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Petco</h1>
              <h1 className='bg-amber-300 w-30 font-bold'>NO Markup</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/home.jpg" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>The dream home</h1>
              <h1 >by late 45min</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/dollar.jpg" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Dollar tree</h1>
              <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/saples.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>staples</h1>
              <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/dicks.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>Dicks spor</h1>
              <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
            </div>
          </div><div >
            <Image className='rounded' src="/sephora.png" width={100} height={100} alt='image' />
            <div>
              <h1 className='font-semibold'>lSephora</h1>
              <h1 className='font-bold bg-amber-300 w-30' >No markups</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Popular Stores Near To You</h1>
        <div className='grid grid-cols-3 py-10 '>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image className='' src="/safeway.png" width={100} height={100} alt='image ' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>Safeway</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/costco.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>Costco</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/sprouts.webp" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>Sprouts </h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3  '>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image className='' src="/target.png" width={100} height={100} alt='image ' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Safeway</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/costco.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Costco</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/mollyes.jpg" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Mollie stone market </h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-bold py-5'>Closest to you</h1>
        <div className='grid grid-cols-3 py-5 '>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image className='' src="/safeway.png" width={100} height={100} alt='image ' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>safeway</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/costco.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>Costco</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/target.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>target </h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3  '>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image className='' src="/w.png" width={100} height={100} alt='image ' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>wallgreen</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/foodsandco.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Food and co</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/cvs.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>cvs </h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-xl font-bold py-5'>Stores to help you</h1>
        <div className='grid grid-cols-3 py-5 '>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image className='' src="/costco.png" width={100} height={100} alt='image ' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>costco</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/sprouts.webp" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>sprouts</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/walmart.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>wallmart </h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3  '>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image className='' src="/w.png" width={100} height={100} alt='image ' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>wallgreen</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/smart and final.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Smart and final</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/lucky.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Lucky </h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-bold py-5'>Trending this week</h1>
        <div className='grid grid-cols-3 py-5 '>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image className='' src="/smart and final.png" width={100} height={100} alt='image ' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>smart and final</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/cvs.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>CVS</h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
          <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
            <Image src="/w.png" width={100} height={100} alt='image' />
            <div className='relative left-30 bottom-25 '>
              <h1 className='text-xl font-bold'>wallgreen </h1>
              <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
              <h1>Pick up by available</h1>
              <h1>EBT lots of deal</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3  '>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image className='' src="/sephora.png" width={100} height={100} alt='image ' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>sephora</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/foodsandco.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>Food and co</h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
        <div className='py-10 w-110 h-50 rounded-2xl border-2 border-gray-400 px-10'>
          <Image src="/petco.png" width={100} height={100} alt='image' />
          <div className='relative left-30 bottom-25 '>
            <h1 className='text-xl font-bold'>petco </h1>
            <h1 className='text-green-600 font-normal'>Delivery by 4 am</h1>
            <h1>Pick up by available</h1>
            <h1>EBT lots of deal</h1>
          </div>
        </div>
      </div>

      <div className='py-10 flex gap-3  '>
        <Image src="/safeway.png" width={100} height={100} alt='image' />
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold '>Flyer Deals sep9-15</h1>
          <h1>At safeway</h1>
        </div>
      </div>
      <div className='grid grid-cols-6'>

        <div className='w-40 h-80 bg-pink-300'>
          <div className='flex justify-center items-center py-25'>
            <Image src="/safeway1.jpg" width={100} height={100} alt='image' />

          </div>

        </div>

        <div>
          <Image src="/cheezeit.jpg" width={100} height={100} alt='image' />
          <h1 className='py-10 font-bold text-amber-700'>By one Get One Free</h1>
          <h1 className='font-semibold py-10 '>Hot and spicy cheeze</h1>
        </div>
        <div>
          <Image src="/breadgreen.jpg" width={100} height={100} alt='image' />
          <h1 className='py-10 font-bold text-amber-700'>By one Get One Free</h1>
          <h1 className='font-semibold py-10  '>Green bread</h1>
        </div>
        <div>
          <Image src="/stringcheese.jpg" width={100} height={100} alt='image' />
          <h1 className='py-10 font-bold text-amber-700'>By one Get One Free</h1>
          <h1 className='font-semibold py-10 '>Spring cheeze</h1>
        </div>
        <div>
          <Image src="/breadred.jpg" width={100} height={100} alt='image' />
          <h1 className='py-10 font-bold text-amber-700'>By one Get One Free</h1>
          <h1 className='font-semibold py-10 '>Normal bread</h1>
        </div>
        <div>
          <Image src="/multivitamin.jpg" width={100} height={100} alt='image' />
          <h1 className='py-10 font-bold text-amber-700'>By one Get One Free</h1>
          <h1 className='font-semibold py-10 '>Multavitamin Gummis</h1>
        </div>
      </div>


    </div>
  )
}

export default home








