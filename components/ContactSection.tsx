'use client';

import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function ContactSection() {
  const { showNotif } = useStore();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    keperluan: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama.trim() || !formData.email.trim() || !formData.keperluan.trim()) {
      setErrorMessage('Harap isi semua kolom formulir.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setErrorMessage('Format email tidak valid.');
      return;
    }

    setErrorMessage('');
    showNotif('Pesan Anda telah berhasil dikirim!');
    setFormData({
      nama: '',
      email: '',
      keperluan: '',
    });
  };

  return (
    <section id="kontak">
      <div className="kontak-img">
        <form className="kontak-form" id="kontakform" onSubmit={handleSubmit}>
          <div className="kontak-input">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              maxLength={99}
              placeholder="Masukkan Nama Anda . . ."
              value={formData.nama}
              onChange={handleChange}
            />
          </div>

          <div className="kontak-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              maxLength={99}
              placeholder="Masukkan Email Anda . . ."
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="kontak-input">
            <label htmlFor="keperluan">Keperluan</label>
            <div className="pembungkus">
              <textarea
                id="keperluan"
                name="keperluan"
                maxLength={999}
                placeholder="Masukkan Keperluan Anda . . ."
                value={formData.keperluan}
                onChange={handleChange}
              ></textarea>
              <span id="char_count">{formData.keperluan.length}/999</span>
            </div>
          </div>

          {errorMessage && (
            <p id="pesan-error" style={{ color: '#d9534f', fontSize: '12px' }}>
              {errorMessage}
            </p>
          )}

          <button type="submit" className="kontak_submit">
            Submit
          </button>
        </form>
      </div>

      <div className="kontak-info">
        <h2>Hubungi Kami</h2>
        <h4>Untuk setiap pertanyaan, pemesanan, maupun kerja sama.</h4>
        <p>
          <strong>WhatsApp:</strong>
          <a href="#"> 0812-3456-7890</a>
        </p>
        <p>
          <strong>Email:</strong>
          <a href="#"> kopi_nusantara@gmail.com</a>
        </p>
        <p>
          <strong>Alamat:</strong>
          <a href="#"> Jl. Letjen S. Parman, Jakarta Barat</a>
        </p>
      </div>
    </section>
  );
}
