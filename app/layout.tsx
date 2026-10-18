import type { Metadata } from 'next';
import '../styles/globals.css';
import { StoreProvider } from '../context/StoreContext';
import Navbar from '../components/Navbar';
import ShoppingCart from '../components/ShoppingCart';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import BackToTop from '../components/BackToTop';

export const metadata: Metadata = {
  title: 'Kopi Nusantara - Cita Rasa Asli Indonesia',
  description:
    'Kopi Nusantara berdiri dari kecintaan pada kopi-kopi single origin Indonesia.',
  icons: {
    icon: '/img/biji-kopi.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
          integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <StoreProvider>
          <Navbar />
          <ShoppingCart />
          {children}
          <Footer />
          <Notification />
          <BackToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
