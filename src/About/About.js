import React from 'react'
import aboutImg from '../Images/a6.jpg';
import abdVideo from '../Images/1.mp4';
function About() {
  return (
    <>
   <section className="flex justify-evenly items-center flex-wrap p-16">
    <div className="flex justify-start flex-col">
      <h1 className='text-4xl text-rose-400 font-bold pb-5'>About</h1>
      <p className='max-w-lg pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim facere inventore eaque modi expedita rerum dicta nemo ut veniam, tenetur porro obcaecati neque tempora aliquid dolor delectus facilis. Soluta asperiores laboriosam recusandae, accusamus quasi natus iure voluptate deleniti hic.</p>
      <marquee class="text-white w-80 bg-teal-400"  loop="-1" scrollamount="5" width="100%">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quis porro iure optio accusantium? Neque sed dolores a? Quidem, consequuntur?
                </marquee>
    </div>
    <div className="flex">
    <img className='w-[36vw]' src={aboutImg} alt="" />
    </div>
   </section>
   <section className='flex justify-center items-center flex-col'>
   <h1 className='text-4xl text-teal-400 font-bold pb-5'>Downlaod Our App</h1>
   <video className='w-[60vw]' autoPlay loop muted>
    <source src={abdVideo} type='video/mp4'/>
   </video>
   </section>
   </>
  )
}

export default About
