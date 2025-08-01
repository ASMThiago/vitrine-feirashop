import { createContext, useContext, useState } from "react";
export const CartContext = createContext();
export function useCart() {
  return useContext(CartContext);
}
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(produto, loja) {
    setCart(prev => {
      const existing = prev.find(p => p.id === produto.id);
      if (existing) {
        return prev.map(p => p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p);
      }
      return [...prev, { ...produto, quantidade: 1, loja }];
    });
  }

  function updateQuantity(id, delta) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantidade: Math.max(p.quantidade + delta, 1) } : p));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
