import React from 'react'
import { useNavigate } from 'react-router-dom';
function Error() {
    const errNavig = useNavigate();
  return (
    <>
         <section className='h-96 flex justify-center items-center flex-col'>
    <h1 className='text-8xl'>404 Error</h1>
    <button className='bg-rose-400 text-white py-3 px-4 rounded-full' onClick={() => errNavig('/')} >Go Back</button>
   </section>
    </>
  )
}

export default Error
