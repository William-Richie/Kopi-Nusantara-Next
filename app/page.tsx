import HeroBanner from '../components/HeroBanner';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <MenuSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
