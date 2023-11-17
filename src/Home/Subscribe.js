import React from 'react'

function Subscribe() {
  return (
   <section className='flex justify-start items-center rounded-xl flex-col py-16 px-10 bg-[linear-gradient(180deg,#fb718d,#fff)]  mx-36 max-[663px]:mx-16 max-[463px]:mx-8 mb-8'>
    <h1 className='uppercase text-4xl font-bold pb-4 text-white'>get exclusive offer on your email</h1>
    <p className='capitalize font-bold pb-4'>subscribe to our newsletter and stay updated</p>
    <form action="" className='flex justify-evenly items-center flex-wrap'>
        <input className='py-3 px-16 border rounded-full outline-none max-lg:w-full' type="email" name="" id="" required placeholder='Enter Your Email' />
        
        <button className='ml-1 bg-black py-3 px-5 text-white rounded-full max-[811px]:mt-2'>Subscribe</button>
    </form>
   </section>
  )
}

export default Subscribe
