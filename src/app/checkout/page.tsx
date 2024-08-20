
"use client";
import PayPalButton from "@/components/PayPalButton";
import { useCart } from "@/app/context/CartContext";
import Image from 'next/image';

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#FFFAF0] py-10 px-4">
      {/* Adicione uma margem superior para empurrar o conteúdo para baixo */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md mt-20">
        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-medium mb-2">Seu Carrinho</h2>
          
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-2 flex items-center">
                  {/* Usando o componente Image do Next.js */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-cover rounded-md mr-4"
                  />
                  <span className="flex-1">{item.name}</span>
                  <span>R${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4">
       
          <h3 className="text-xl font-medium">Total: R${calculateTotal()}</h3>
          <PayPalButton />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;