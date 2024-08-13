"use client";

import { FaRegListAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="fixed z-20 top-0 w-full h-[25px] border-slate-50 bg-[#f1fafa] flex justify-center items-center px-3">
        <h1 className="relative h-[14px] text-[10px] italic font-light uppercase font-sans">
          FRETE GRATIS PARA GRANDE VITORIA - 5% DESCONTO VIA PIX.
        </h1>
      </div>
      <div className="fixed z-10 top-[25px] w-full h-[65px] flex justify-around items-center border-slate-50 bg-[#f1fafa]">
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
              <Link href="/produtos/vestido" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Vestido
              </Link>
              <Link href="/produtos/calca" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Calça
              </Link>
              <Link href="/produtos/blusa" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Blusa
              </Link>
              <Link href="/produtos/cropped" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Cropped
              </Link>
              <Link href="/produtos/macacao" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Macacão
              </Link>
              <Link href="/produtos/macaquinho" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Macaquinho
              </Link>
              <Link href="/produtos/saia" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Saia
              </Link>
              <Link href="/produtos/short" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Short
              </Link>
              <Link href="/produtos/conjunto" className="block px-4 py-2 text-black hover:bg-gray-200 uppercase font-sans font-light">
                Conjunto
              </Link>
            </div>
          )}
        </div>
        <Link className="flex flex-col justify-center items-center mt-5" href="/contatos">
          <FaPhoneAlt className="mb-1" />
          <span className="uppercase font-sans font-light">Contatos</span>
        </Link>
      </div>
    </>
  );
};