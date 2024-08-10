"use client"

import { products } from '@/constants/constants';
import Image from 'next/image'
import React, { useState } from 'react';
const ListProd: React.FC = () => {
  
  
  return (
      <div className=" min-h-screen w-full flex justify-center">
      <div className=" w-full m-2 mt-12 justify-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-6 lg:gap-10">
        {products.map((product) => (
          <div key={product.id} className="w-full">
             <Image 
            src={product.image} 
            alt={product.name} 
            width={500} // Largura da imagem
            height={300} // Altura da imagem
            className="w-full h-auto object-cover rounded-md transform transition-transform duration-500 hover:scale-105 hover:brightness-130"
          />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-bold mt-2">R${product.price}</p>
            <button 
            onClick={() => alert(`Você clicou em ${product.name}`)}
            className="mt-4 w-full py-2 px-4 bg-[#ffd8e3] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Comprar
          </button>
          </div>
        ))}
      </div>
       {/* Navegação de Paginação */}
       
      </div>
    );};

    export default ListProd;