"use client"

import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string; 
};

type CartContextProps = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  addToCart: (item: CartItem, quantity: number) => void;
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };
  const clearCart = () => setCartItems([]);
  const addToCart = (item: CartItem, quantity: number) => {
    const updatedCartItems = [...cartItems, ...Array(quantity).fill(item)];
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, toggleCart, removeItem, clearCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};