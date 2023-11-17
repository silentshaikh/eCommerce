import React, { useContext } from 'react';
import { FaStar } from "react-icons/fa";
import Subscribe from '../Home/Subscribe';
import { AppContext } from './proContext';
import { useNavigate } from 'react-router-dom';
function CardDisp({filt}) {
    const {addToCart} = useContext(AppContext);
    const cartNavigte = useNavigate();
    const onCartHandler = () => {
        addToCart(filt.id);
        cartNavigte('/cart');
    }
  return (
    <>
        <section className='flex justify-evenly items-start flex-wrap p-10 mb-10'>
            <div className="flex">
                <img src={filt.image} alt="CardImage" />
            </div>
            <div className="flex justify-start items-center flex-col pt-5">
                <h1 className='text-4xl pb-4'>{filt.name}</h1>
                <div className="flex pb-4">
                    <FaStar className='text-rose-400 text-3xl'/>
                    <FaStar className='text-rose-400 text-3xl'/>
                    <FaStar className='text-rose-400 text-3xl'/>
                    <FaStar className='text-rose-400 text-3xl'/>
                    <FaStar className='text-rose-400 text-3xl'/>
                </div>
                <h3 className='font-bold pb-4'>${filt.new_price}</h3>
                <p className='max-w-lg pb-4'>Hello Every One ! We Have A Latest Men Collection , Women Collection And Kids Collection Etc.</p>
                <div className="flex justify-center items-center flex-wrap pb-7">
                    <h3 className='bg-slate-100 text-teal-300 ml-2 text-3xl py-2 px-4 font-bold rounded-lg'>S</h3>
                    <h3 className='bg-slate-100 text-teal-300 ml-2 text-3xl py-2 px-4 font-bold rounded-lg'>M</h3>
                    <h3 className='bg-slate-100 text-teal-300 ml-2 text-3xl py-2 px-4 font-bold rounded-lg'>L</h3>
                    <h3 className='bg-slate-100 text-teal-300 ml-2 text-3xl py-2 px-4 font-bold rounded-lg'>XL</h3>
                    <h3 className='bg-slate-100 text-teal-300 ml-2 text-3xl py-2 px-4 font-bold rounded-lg'>XLL</h3>
                </div>
                <button className='bg-rose-400 py-3 px-5 rounded-full text-white'  onClick={onCartHandler}>ADD TO CART</button>
            </div>
        </section>
        <Subscribe/>
    </>
  )
}

export default CardDisp
