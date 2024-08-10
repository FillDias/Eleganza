"use client"

import { products } from '@/constants/constants';
import Image from 'next/image'
import React, { useState } from 'react';
const ListProd: React.FC = () => {
  
  
  return (
      <div className=" min-h-screen w-full flex justify-center">
      <div className=" w-full   justify-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-6 lg:gap-10">
        {products.map((product) => (
          <div key={product.id} className="w-full">
             <Image 
            src={product.image} 
            alt={product.name} 
            width={500} // Largura da imagem
            height={300} // Altura da imagem
            className="w-full object-cover rounded-md"
          />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
       {/* Navegação de Paginação */}
       
      </div>
    );};

    export default ListProd;