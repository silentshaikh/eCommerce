import React from 'react'
import mainImage from '../Images/img-removebg-preview.png';
import PopWomen from './PopWomen';
import Subscribe from './Subscribe';
function Home() {
  return (
   <>
    <section className=' p-10 flex justify-evenly items-center  rounded-bl-[25%] flex-wrap bg-[linear-gradient(180deg,#fff,#fb718d)]'>
      <div className='flex justify-center items-start  flex-col'>
      <h3 className='text-2xl text-rose-400 font-bold pb-3'>NEW ARRIVAL</h3>
      <h1 className='capitalize text-[3rem] font-bold text-white '>new collection for everyone</h1>
      <p className='capitalize max-w-lg pb-4'>Hello Every One ! we have a latest men collection , women collection and kids collection etc. </p>
      <button className='bg-rose-400 py-3 px-5 rounded-full text-white'>Collection</button>
      </div>
      <div className="flex">
      <img className='w-[42vw]' src={mainImage} alt="mainImage" />
      </div>
    </section>
    <PopWomen/>
    <Subscribe/>
   </>
  )
}

export default Home
