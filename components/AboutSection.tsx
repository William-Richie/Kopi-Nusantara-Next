import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="tentang">
      <h2>Tentang Kami</h2>
      <div className="tentang-container">
        <div className="tentang-img">
          <Image
            src="/img/LogoKopi.png"
            className="logo"
            alt="Tentang1"
            width={200}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="tentang-text">
          <h2>Cerita Kami</h2>
          <p>
            Kopi Nusantara berdiri dari kecintaan pada kopi-kopi single origin Indonesia.
            Kami bekerja sama langsung dengan petani dari Aceh, Toraja, hingga Bali untuk
            menghadirkan biji kopi terbaik yang disangrai segar setiap minggunya di kedai kami.
            Selain menjaga kualitas rasa, kami juga berkomitmen mendukung kesejahteraan petani
            lokal dengan sistem perdagangan yang adil. Setiap cangkir yang kami sajikan bukan
            hanya menghadirkan aroma dan cita rasa khas Nusantara, tetapi juga membawa cerita
            perjalanan panjang dari kebun kopi hingga ke meja Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
