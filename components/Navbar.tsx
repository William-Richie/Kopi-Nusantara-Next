'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '../context/StoreContext';

export default function Navbar() {
  const {
    isCartOpen,
    setIsCartOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    activeNav,
    setActiveNav,
    isCartIconActive,
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveNav(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSearchOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
      return nextState;
    });
  };

  const toggleCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCartOpen((prev) => !prev);
    if (!isCartOpen) {
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="nav-menu">
      <div className="left-menu">
        <Image
          src="/img/biji-kopi.jpg"
          alt="Logo"
          width={60}
          height={44}
          priority
          style={{ objectFit: 'cover' }}
        />
        <p>KOPI NUSANTARA</p>
        <ul className={`left-menu-show ${isMobileMenuOpen ? 'show' : ''}`}>
          <li>
            <Link
              href="/#hero-banner"
              className={activeNav === '#hero-banner' ? 'active' : ''}
              onClick={() => handleNavClick('#hero-banner')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#menu"
              className={activeNav === '#menu' ? 'active' : ''}
              onClick={() => handleNavClick('#menu')}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/#tentang"
              className={activeNav === '#tentang' ? 'active' : ''}
              onClick={() => handleNavClick('#tentang')}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/#kontak"
              className={activeNav === '#kontak' ? 'active' : ''}
              onClick={() => handleNavClick('#kontak')}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-menu">
        <ul className="right-menu-show">
          <li>
            <a href="#" id="searching" onClick={toggleSearch}>
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              id="shopping-cart"
              className={isCartIconActive ? 'active' : ''}
              onClick={toggleCart}
            >
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMobileMenu}>
              <i className="fas fa-bars fa-2x"></i>
            </a>
          </li>
        </ul>

        <div className={`search-button ${isSearchOpen ? 'active' : ''}`}>
          <input
            type="search"
            id="search-box"
            ref={searchInputRef}
            placeholder="Cari kopi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}
