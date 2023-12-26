'use client'
import { remove } from '@/redux/Cartslice';
import Image from 'next/image';
import React from 'react';
import {useDispatch,useSelector} from 'react-redux'


const page = () => {
    const dispatch = useDispatch()
    const cartitem = useSelector((state)=>state.cart)

    const handleRemove =(id)=>{
        dispatch(remove(id))
    }

  return (
    <div>
      <h3>Cart Page</h3>
      <div>
        {
            cartitem.map((item)=>(
                <div className='flex gap-5 justify-between items-center bg-white m-2'>
                    <Image src={item.image} alt='image' height={100} width={100}  />
                    <p>{item.title} </p>
                    <p>{item.price} </p>
                    <button className='rounded-md bg-red-500 px-4 py-3' onClick={()=>handleRemove(item.id)} >Remove </button>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default page;
