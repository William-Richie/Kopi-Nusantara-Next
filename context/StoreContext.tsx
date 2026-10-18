'use client';

import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface NotificationItem {
  id: number;
  message: string;
  show: boolean;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (name: string, price: number) => void;
  updateQuantity: (index: number, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  notifications: NotificationItem[];
  showNotif: (message: string) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  isCartIconActive: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [activeNav, setActiveNav] = useState('');
  const [isCartIconActive, setIsCartIconActive] = useState(false);

  const notifIdRef = useRef(0);

  const showNotif = (message: string) => {
    const id = ++notifIdRef.current;
    setNotifications((prev) => [...prev, { id, message, show: false }]);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, show: true } : n))
      );
    }, 10);

    setTimeout(() => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, show: false } : n))
      );
      
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 300);
    }, 2500);
  };

  const addToCart = (name: string, price: number) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.name === name);
      if (existingIndex > -1) {
        const next = [...prevCart];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }
      return [...prevCart, { name, price, quantity: 1 }];
    });

    setIsCartIconActive(true);
    showNotif(`${name} berhasil ditambahkan!`);
  };

  const updateQuantity = (index: number, delta: number) => {
    setCart((prevCart) => {
      const next = [...prevCart];
      if (!next[index]) return prevCart;

      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        next.splice(index, 1);
        return next;
      }
      next[index] = {
        ...next[index],
        quantity: newQty,
      };
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        notifications,
        showNotif,
        activeNav,
        setActiveNav,
        isCartIconActive,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
