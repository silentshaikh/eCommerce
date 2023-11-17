import React from 'react';
import crdOne from '../Images/product_11.png';
import crdTwo from '../Images/product_2.png';
import crdThree from '../Images/product_3.png';
import crdFour from '../Images/product_4.png';
import { Divider } from 'antd';
function PopWomen() {
    const cardObj= [
        {
            img:crdOne,
            price:'$30',
            text:'Premium Collection',
        },
        {
            img:crdTwo,
            price:'$30',
            text:'Premium Collection',
        },
        {
            img:crdThree,
            price:'$30',
            text:'Premium Collection',
        },
        {
            img:crdFour,
            price:'$30',
            text:'Premium Collection',
        },
    ];
  return (
    <section className='p-10'>
    <h1 className='uppercase text-center text-4xl font-bold'>popular in women</h1>
    <Divider/>
    <div className="flex justify-center items-center flex-wrap">
    {
        cardObj.map((element,index) => {
            return(
                <div key={index} className="flex justify-center items-start flex-col p-2 transition-all hover:scale-105">
                <img className='w-72' src={element.img} alt="cardImage" />
                <h3 className='text-xl font-bold'>{element.text}</h3>
                <p className='font-bold'>{element.price}</p>
                </div>
            );
        })
    }
    </div>
    </section>
  )
}

export default PopWomen
