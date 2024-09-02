"use client";

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import CartaoCredito from '@/pagamento/CartaoCredito';

const Cart = () => {
  const { cartItems, isCartOpen, toggleCart, removeItem, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    clearCart(); // Limpa o carrinho se necessário
    toggleCart(); // Fecha o carrinho
  };

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
              <li key={index} className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="mr-4" />
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p>R${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => removeItem(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <Link href="/checkout" onClick={handleCheckout} className="bg-black text-white py-2 px-4 rounded">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;