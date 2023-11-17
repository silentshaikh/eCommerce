import React, { useContext } from 'react'
import { AppContext } from '../Product/proContext';
// import { IoCloseOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { Divider } from 'antd';
function Cart() {
    const {totalAmount,all_product,setCart,removCart,addToCart} = useContext(AppContext);
    const list = ['PRODUCT','title','price','quantity','total','add','remove']
  return (
    <section className='flex justify-center items-center flex-col p-12'>
   <div className="overflow-auto">
   <table className='w-full  border '>
        <thead className="max-[741px]:overflow-x-scroll">
                    <tr>
            {list.map((e,i) => {
                
                return(
                        <th key={i} className='uppercase border py-2 px-4 font-bold text-lg'>{e}</th>
                )
            })}
                    </tr>
        </thead>
        <tbody className="max-[741px]:overflow-x-scroll">
            {all_product.map((element) => {
               if(setCart[element.id]>0){
                return(
                    <tr className="" key={element.id}>
                        <td className='border'><img className='w-[4vw] p-1' src={element.image} alt="" /></td>
                        <td className='px-8 border'>{element.name}</td>
                        <td className='px-8 border'>{element.new_price}</td>
                        <td className='px-8 border'>{setCart[element.id]}</td>
                        <td className='px-8 border'>{element.new_price*setCart[element.id]}</td>
                        <td className='border pl-4'><IoIosAdd className='text-4xl text-teal-400 cursor-pointer ' onClick={() => addToCart(element.id)}/></td>
                        <td className='pl-6 border'><IoIosClose className='text-4xl text-center text-teal-400 cursor-pointer' onClick={() => removCart(element.id)}/></td>
                    </tr>
                );
               }
            })}
        </tbody>
        </table>
   </div>
        <div className="flex justify-evenly items-center flex-wrap p-14">
            <div className="flex justify-center items-start flex-col ">
                <h1 className='text-3xl pb-6'>Cart Total</h1>
                <div className="flex">
                    <h3 className='font-bold'>Subs Total</h3>
                    <h3 className='pl-28'>${totalAmount()}</h3>
                </div>
                <Divider/>
                <div className="flex">
                    <h3 className='font-bold'>Shipping Free</h3>
                    <h3 className='pl-28'>Free</h3>
                </div>
                <Divider/>
                <div className="flex pb-8">
                    <h3 className='font-bold'>Total Amount</h3>
                    <h3 className='pl-28'>${totalAmount()}</h3>
                </div>
                <button className='bg-rose-400  py-3 px-5 text-white rounded-full'>Checkout</button>
            </div>
            <div className="flex flex-col ml-40">
                <h3 className='pb-4'>if you have a promo code , Enter it here</h3>
                <form action="" className='flex flex-wrap'>
                    <input className='max-w-lg border py-3 px-5 rounded-full outline-none' type="text" required placeholder='Promo Code' name="" id="" />
                    <button className='ml-2 bg-black py-3 px-5 text-white rounded-full max-[811px]:mt-2'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Cart
