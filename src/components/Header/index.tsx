import { FaRegListAlt } from "react-icons/fa"; 
import { AiOutlineHome } from "react-icons/ai"; 
import Link from "next/link";


export const Header = () => {
   
  
    return (
<>

<div className="fixed z-20 top-0 w-full h-[25px] border-slate-50 bg-[#f1fafa] flex  justify-center  items-center px-3   ">
          <h1 className=" relative h-[14px]  text-[8px] italic font-light">FRETE GRATIS PARA GRANDE VITORIA - 5% DESCONTO VIA PIX.</h1>
      </div>
      <div className=" fixed z-10 top-0 w-full h-[65px] flex  justify-around items-center border-slate-50 bg-[#f1fafa]">
      <Link className="flex justify-center items-center mt-5   " href={"/"} > Home
      <span className="flex w-full justify-center items-center ">
      <AiOutlineHome   />
      </span>
      </Link>
      <Link className="flex justify-center items-center h-screen mt-5  " href={"/"} > Produtos
      <FaRegListAlt />
      </Link>
      </div>
      </>
        );
    };