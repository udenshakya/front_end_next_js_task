
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getData(id){
    const res=await fetch(`https://fakestoreapi.com/products/${id} `)
  
    if(!res.ok){
      throw new Error("failed to fetch data")
    }
    return res.json()
  }
  


const page = async({params}) => {
    const product=await getData(params.id)

    

      return (
        <div className="flex  justify-center items-center gap-8">
            <div className="flex-1">
                <Image src={product.image} width={300} height={300} alt="image" />
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <h1>{product.title}</h1>
                <h2>{product.category} </h2>
                <h2>${product.price} </h2>
                <p>{product.description} </p>
                 </div>
        </div>
      );
    }

export default page;
