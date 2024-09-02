import Image from 'next/image'
import logo from '@/assets/imagens/logo.png'
import ListProd from "@/components/ListProd";





export default function Home() {
  return (
    

    <main className='bg-[#FFFAF0]' >
      
     <div className="relative  top-20 w-full flex  justify-center  items-center ">
        <Image src={logo} alt="capa"
        width={300}
        height={300}
        
        />
      
</div>

 <div className="min-h-screen">
  
  

 
 <ListProd/>


 </div>


    </main>
    
  );
}
