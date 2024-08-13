import Image from 'next/image'
import logo from '@/assets/imagens/logo.png'
import ListProd from "@/components/ListProd";




export default function Home() {
  return (
    

    <main >
      
     <div className="relative  top-20 w-full flex  justify-center  items-center bg-[#f5f5f5]">
        <Image src={logo} alt="capa"
        width={200}
        height={200}
        
        />
      
</div>

 <div className="min-h-screen">
 <ListProd/>
 </div>


    </main>
    
  );
}
