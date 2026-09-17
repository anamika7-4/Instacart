import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div>
      <header className='bg-amber-100 p-5 pl-15 flex gap-10 justify-between items-center'>
        <div className='flex gap-5'>
        <Image src="/menu.svg" width={20} height={10} alt='image'/>
        <Image src="/logo.svg" width={200} height={100} alt='image'/>
        </div>
        <div>
    
            <form>
          <input className=' bg-gray-100 border-2 border-gray-500 rounded-4xl w-200 h-15' type="text" placeholder='Search products and stores'/>
        </form>
        </div>
        <div className=' flex  gap-10 '>
          <button className='bg-white text-black font-bold border-gray-400 border-2  rounded-4xl pl-10 pr-10 pt-2 pb-2'>
            <Link href={"/login"}>Log in</Link>
          </button>
           <button className='bg-green-400 text-white font-bold  rounded-4xl pl-10 pr-10'>
             <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>
      </header>
      <nav>
        <ul className='flex justify-between items-center px-20 font-bold bg-green-700 '>
          <li className='hover:bg-amber-50'>
            <Link href={"/"}>Home</Link>
          </li> 
          <li className='hover:bg-amber-50'>
            <Link href={"/ebt"}>EBT</Link>
          </li>
          <li className='hover:bg-amber-50'>
            <Link href={"/offers"}>offers</Link>
          </li>
          <li className='hover:bg-amber-50'>
            <Link href={"/grocerry"}>Grocerry</Link>
          </li>
          <li className='hover:bg-amber-50'>
            <Link href={"/express"}>Express</Link>
          </li>
          <li className='hover:bg-amber-50'>
            <Link href={"/alchohol"}>Alchohol</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
