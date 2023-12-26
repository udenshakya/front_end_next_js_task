"use client";

import { add } from "@/redux/Cartslice";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

 const handleAdd = (product)=>{
  dispatch(add(product))
 }



  return (
    <div>
      <div className="flex justify-center items-center">
        <input className="mb-20 p-2 rounded-lg"
          type="text"
          placeholder="Search for products"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  rounded-md ">
        {products
          .filter((product) => {
            if (searchTerm == "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return product;
            }
          })

          .map((product) => (
            <div key={product.id} className="bg-white rounded-lg flex flex-col justify-center items-center">
            <Link
              href={`/product/${product.id} `}
              
              key={product.id}
            >
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    src={product.image}
                    className=""
                    width={150}
                    height={1500}
                    alt="image"
                  />
                </div>
                <h2> {product.title}</h2>
                <p>${product.price} </p>
              </div>
            </Link>
                <button onClick={()=>handleAdd(product)} className="rounded-md bg-red-500 px-4 py-3">
                  Add to Cart{" "}
                </button>
            </div>
          ))}
      </div>
    </div>
  );
}
