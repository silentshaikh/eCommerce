import React, { useContext } from 'react'
import { AppContext } from './proContext'
import { useParams } from 'react-router-dom';
import CardDisp from './CardDisp';

function CardGallery() {
    const {all_product} = useContext(AppContext);
    const {productId} = useParams()
    const filtProduct = all_product.find((e) => e.id === Number(productId));
  return (
    <>
        <CardDisp filt={filtProduct}/>
    </>
  );
}

export default CardGallery
