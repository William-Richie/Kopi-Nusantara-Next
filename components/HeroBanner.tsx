import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section id="hero-banner">
      <div className="background-banner">
        <Image
          src="/img/background-banner.png"
          alt="Banner"
          fill
          priority
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <h1>Welcome To Our Company Profile</h1>
        <h2>CITA RASA ASLI INDONESIA</h2>
      </div>
    </section>
  );
}
