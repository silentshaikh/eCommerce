import React, { useContext } from 'react';
import {AppContext} from '../Product/proContext';
import { NavLink } from 'react-router-dom';
function Product() {
  const {all_product} = useContext(AppContext);
  return (
   <>
    <section className='p-10'>
    <h1 className='text-center uppercase text-[3rem] text-rose-400 pb-8 font-bold'>our collection</h1>
    <div className="flex justify-evenly items-center flex-wrap">
    {
        all_product.map((element,index) => {
            return(
                <div key={element.id} className="flex justify-center items-start flex-col cursor-pointer p-2 transition-all hover:scale-105">
                <NavLink to={`/product/${element.id}`}><img className='w-72' src={element.image} alt="cardImage" /></NavLink>
                <h3 className='text-xl font-bold'>{element.name}</h3>
                <p className='font-bold'>${element.new_price}</p>
                </div>
            );
        })
    }
    </div>
    </section>
   </>
  )
}

export default Product
