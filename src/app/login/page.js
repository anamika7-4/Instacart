import React from 'react'

const login = () => {
    return (
        <div className='flex justify-center items-center py-30'>
            <div className='w-100 h-80 bg-amber-100 px-20'>
                <h1 className='py-10 px-23 text-2xl font-bold'>Login</h1>
                <form className='pb-10'>
                    <input className='h-12 w-60 border-2 border-gray-300'   placeholder='Enter your email adress' type='email'></input>
                </form>
                <button className='w-60 h-12 bg-green-800 text-xl text-white font-semibold'>Continue</button>
            </div>
        </div>

    )
}

export default login
