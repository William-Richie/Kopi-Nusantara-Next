'use client';

import React from 'react';
import Image from 'next/image';
import { useStore } from '../context/StoreContext';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'tubruk-jawa',
    name: 'Kopi Tubruk Jawa',
    description: 'Kopi hitam ala tradisional, diseduh kasar dengan gula batu secukupnya.',
    price: 15000,
    image: '/img/kopi/tubrukjawa.png',
    alt: 'Kopi Tubruk Jawa',
  },
  {
    id: 'robusta-lampung',
    name: 'Robusta Lampung',
    description: 'Karakter kuat dan pahit tegas, favorit yang butuh dorongan energi ekstra.',
    price: 18000,
    image: '/img/kopi/lampungrobusta.png',
    alt: 'Kopi Lampung Robusta',
  },
  {
    id: 'flores-bajawa',
    name: 'Flores Bajawa',
    description: 'Manis alami dengan sentuhan cokelat, tumbuh di lereng Gunung Inerie.',
    price: 23000,
    image: '/img/kopi/floresbajawa.png',
    alt: 'Kopi Flores Bajawa',
  },
  {
    id: 'susu-gula-aren',
    name: 'Kopi Susu Gula Aren',
    description: 'Espresso lokal, susu segar, dan gula aren asli. manis pas.',
    price: 19000,
    image: '/img/kopi/susugulaaren.png',
    alt: 'Kopi Susu Gula Aren',
  },
  {
    id: 'kalosi-sulawesi',
    name: 'Kalosi Sulawesi',
    description: 'Full body dengan after taste rempah, cocok diseduh French press.',
    price: 24000,
    image: '/img/kopi/sulawesi.png',
    alt: 'Kopi Kalosi Sulawesi',
  },
  {
    id: 'vietnam-drip',
    name: 'Vietnam Drip',
    description: 'Kopi pekat menetes pelan, disajikan dengan susu kental manis dingin.',
    price: 20000,
    image: '/img/kopi/vietnamdrip.png',
    alt: 'Kopi Vietnam Drip',
  },
  {
    id: 'americano-dingin',
    name: 'Americano Dingin',
    description: 'Espresso ganda diseduh dengan air dingin, ringan tapi tetap nendang.',
    price: 18000,
    image: '/img/kopi/americanodingin.png',
    alt: 'Kopi Americano Dingin',
  },
  {
    id: 'latte-pandan',
    name: 'Latte Pandan',
    description: 'Sentuhan pandan lokal berpadu dengan susu creamy dan espresso lembut.',
    price: 21000,
    image: '/img/kopi/lattepandan.png',
    alt: 'Kopi Latte Pandan',
  },
];

export default function MenuSection() {
  const { searchQuery, addToCart } = useStore();

  const filteredItems = MENU_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <section id="menu">
      <h2>Menu Kami</h2>
      {filteredItems.length === 0 ? (
        <p
          id="pesan-kosong"
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '16px',
            color: '#693b22',
          }}
        >
          Kopi yang dicari tidak ditemukan...
        </p>
      ) : (
        <div className="menu-container">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <Image
                src={item.image}
                alt={item.alt}
                width={300}
                height={300}
                style={{
                  width: '70%',
                  height: 'auto',
                  margin: '0 auto',
                  borderRadius: '8px',
                }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span
                className="menu-price"
                onClick={() => addToCart(item.name, item.price)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    addToCart(item.name, item.price);
                  }
                }}
              >
                Rp {item.price.toLocaleString('id-ID')}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
