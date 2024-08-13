"use client"

import React from 'react';
import Image from 'next/image';
import { products } from '@/constants/constants';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
}




const ListProd: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mt-20 m-4"> 
      {products.map((product) => (
        <div key={product.id} className="w-full mb-8 p-4 bg-white shadow rounded-lg"> 
          <Swiper 
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
          >
            {product.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-md">
                  <Image 
                    src={image} 
                    alt={`${product.name} image ${index + 1}`} 
                    width={500} 
                    height={300} 
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-bold mt-2">R${product.price}</p>
          <button 
            onClick={() => alert(`Você clicou em ${product.name}`)}
            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Comprar
          </button>
          </div>
        ))}
      </div>
    
       
      
    );};

    export default ListProd;