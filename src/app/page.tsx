
import { FaRegListAlt } from "react-icons/fa"; 
import { AiOutlineHome } from "react-icons/ai"; 
import Image from 'next/image'
import logo from '@/assets/imagens/logo.png'
import Link from "next/link";
import ListProd from "@/components/ListProd";




 








export default function Home() {
  return (
    

    <main >
      
     
    
      <div className="fixed z-20 top-0 w-full h-[25px] border-slate-50 bg-[#f1fafa] flex  justify-center  items-center px-3   ">
          <h1 className=" relative h-[14px]  text-[8px] italic font-light">FRETE GRATIS PARA GRANDE VITORIA - 5% DESCONTO VIA PIX.</h1>
      </div>
      <div className=" relative  w-full h-[75px] flex  justify-around items-center bg-[#3f3f3f]">
      <Link className="flex justify-center items-center h-screen  " href={"/"} > Home
      <span className="flex w-full justify-center items-center ">
      <AiOutlineHome   />
      </span>
      </Link>
      <Link className="flex justify-center items-center h-screen " href={"/"} > Produtos
      <FaRegListAlt />
      </Link>
      </div>
      <div className="relative w-full flex  justify-center  items-center bg-[#f5f5f5]">
        <Image src={logo} alt="capa"
        width={200}
        height={200}
        
        />
      
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 ">
 <ListProd/>
</div>
     
    </main>
  );
}
