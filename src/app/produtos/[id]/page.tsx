"use client";

import Image from 'next/image';
import { products } from '@/constants/constants';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { calculateShipping } from '@/utils/calculateShipping';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id as string));
  const [zipCode, setZipCode] = useState('');
  const [shipping, setShipping] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculateShipping = async () => {
    const result = await calculateShipping(zipCode);
    if (result.error) {
      setError(result.message || 'Erro ao calcular o frete');
      setShipping(null);
    } else {
      setShipping(result.value || 0);
      setError(null);
    }
  };

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-[#FFFAF0] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Image
              src={product.images[0]} // Usando a primeira imagem
              alt={product.name}
              width={400}
              height={300}
              className="object-cover rounded-md"
            />
            {/* Adicione outras imagens se desejar */}
          </div>
          <div className="flex-1 lg:ml-6 mt-6 lg:mt-0">
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">R${product.price.toFixed(2)}</p>

            <button
              onClick={() => window.location.href = '/pagamento'}
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 mb-4"
            >
              Comprar
            </button>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Calcular Frete</h2>
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-2"
              />
              <button
                onClick={handleCalculateShipping}
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                Calcular Frete
              </button>
              {shipping !== null && (
                <p className="mt-4 text-lg font-bold">Frete: R${shipping.toFixed(2)}</p>
              )}
              {error && <p className="mt-4 text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;