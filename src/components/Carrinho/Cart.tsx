"use client";
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

const Cart = () => {
  const { cartItems, isCartOpen, toggleCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-0 right-0 z-50 w-full md:w-1/3 h-full bg-white shadow-lg overflow-auto">
      <button onClick={toggleCart} className="text-right p-4">
        Fechar
      </button>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Seu Carrinho</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <Link href="/checkout" className="bg-black text-white py-2 px-4 rounded">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;