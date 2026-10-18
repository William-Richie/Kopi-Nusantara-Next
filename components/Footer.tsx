import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2026 Kopi Nusantara.</p>
        <div className="social-media">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
