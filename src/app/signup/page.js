import React from 'react'

const signup = () => {
    return (
        <div className='py-10 px-150'>
            <div className='w-100 h-120 bg-amber-100 '>
                <h1 className=' py-20 text-xl font-semibold'><span className='px-32 marker:text-black-400'>$0 delivery free</span><br></br><span className='px-25'>on your first 3 orders</span>
                </h1>
                <div className='px-20'>
                    <form className='pb-10 '>
                        <input className='h-12 w-60 border-2 border-gray-500' placeholder='Enter your email adress' type='email'></input>
                    </form>
                    <button className='w-60 h-12 bg-green-800 text-xl text-white font-semibold '>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default signup
