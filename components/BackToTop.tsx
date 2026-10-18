'use client';

import React from 'react';

export default function BackToTop() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      className="btn-ke-atas"
      title="Kembali ke atas"
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
}
