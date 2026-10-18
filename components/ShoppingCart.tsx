'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../context/StoreContext';

export default function ShoppingCart() {
  const {
    cart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    showNotif,
  } = useStore();

  const [isConfirmMode, setIsConfirmMode] = useState(false);
  const confirmTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      showNotif('Keranjang kamu kosong!');
      return;
    }

    if (!isConfirmMode) {
      setIsConfirmMode(true);
      if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
      confirmTimeoutRef.current = setTimeout(() => {
        setIsConfirmMode(false);
      }, 3000);
      return;
    }

    if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
    setIsConfirmMode(false);
    showNotif('Terima kasih telah berbelanja di Kopi Nusantara!');
    clearCart();
    setIsCartOpen(false);
  };

  useEffect(() => {
    return () => {
      if (confirmTimeoutRef.current) clearTimeout(confirmTimeoutRef.current);
    };
  }, []);

  return (
    <div className={`shopping-cart-button ${isCartOpen ? 'active' : ''}`}>
      <h3>Keranjang Saya</h3>

      <div className="content-cart">
        {cart.length === 0 ? (
          <p className="message-cart">Tidak ada barang yang dibeli...</p>
        ) : (
          cart.map((item, index) => {
            const itemSubtotal = item.price * item.quantity;
            return (
              <div className="cart-item" key={item.name}>
                <div className="item-info">
                  <p>{item.name}</p>
                  <span>Rp {itemSubtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="qty-controls">
                  <button
                    type="button"
                    className="btn-qty btn-minus"
                    onClick={() => updateQuantity(index, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    className="btn-qty btn-plus"
                    onClick={() => updateQuantity(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="info-cart">
        <div className="total-cart">
          <p className="content-total-cart">
            Total: <span id="price">Rp {total.toLocaleString('id-ID')}</span>
          </p>
        </div>

        <button
          type="button"
          className={`submit-cart ${isConfirmMode ? 'confirm-mode' : ''}`}
          id="submit-cart"
          onClick={handleCheckout}
        >
          {isConfirmMode ? 'Yakin beli sekarang?' : 'Beli'}
        </button>
      </div>
    </div>
  );
}
