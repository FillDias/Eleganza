"use client";

import { FaRegListAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleCart } = useCart();

  return (
    <>
      <div className="fixed z-20 top-0 w-full h-[25px] border-slate-50 bg-[#FFE4C4] flex justify-center items-center px-3">
        <h1 className="relative h-[14px] text-[10px] italic font-light uppercase font-sans">
          FRETE GRATIS PARA GRANDE VITORIA - 5% DESCONTO VIA PIX.
        </h1>
      </div>
      <div className="fixed z-10 top-[25px] w-full h-[65px] flex justify-around items-center border-slate-50 bg-[#FFFFFF]">
        <Link className="flex flex-col justify-center items-center mt-5" href={"/"}>
          <AiOutlineHome className="mb-1" />
          <span className="uppercase font-sans font-light">Home</span>
        </Link>
        <div className="relative mt-5 flex flex-col justify-center items-center">
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaRegListAlt className="mb-1" />
            <span className="uppercase font-sans font-light">Produtos</span>
          </button>
          {showDropdown && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48">
              {/* Dropdown menu items */}
              <Link href="/produtos/vestido" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Vestido
              </Link>
              {/* Adicione mais links conforme necessário */}
            </div>
          )}
        </div>
        <Link className="flex flex-col justify-center items-center mt-5" href="/contatos">
          <FaPhoneAlt className="mb-1" />
          <span className="uppercase font-sans font-light">Contatos</span>
        </Link>
        <button
          className="flex flex-col justify-center items-center mt-5"
          onClick={toggleCart}
        >
          <AiOutlineShoppingCart className="mb-1" />
          <span className="uppercase font-sans font-light">Carrinho</span>
        </button>
      </div>
    </>
  );
};