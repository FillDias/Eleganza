import { products } from '@/constants/constants';
import Image from 'next/image'
const ListProd = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-full border p-4 rounded-lg shadow-md">
             <Image 
            src={product.image} 
            alt={product.name} 
            width={500} // Largura da imagem
            height={300} // Altura da imagem
            className="object-cover rounded-md"
          />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    );};

    export default ListProd;