import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { MenuSection } from './components/sections/MenuSection';
import { SpaceRentalSection } from './components/sections/SpaceRentalSection';
import { GalleryProgramSection } from './components/sections/GalleryProgramSection';
import { ReservationSection } from './components/sections/ReservationSection';
import { LocationSection } from './components/sections/LocationSection';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Terrazza Lounge | 방배동 카페·와인 라운지·공간대여</title>
        <meta name="description" content="방배동 Terrazza Lounge는 낮에는 커피와 베이킹 카페, 저녁에는 와인 라운지로 운영되는 복합 공간입니다. 세미나, 전시, 원데이클래스, 촬영, 프라이빗 모임 대관이 가능합니다." />
        <meta name="keywords" content="방배동 카페, 방배동 와인바, 방배동 공간대여, 서초 공간대여, 방배동 갤러리, 방배동 세미나룸, 방배동 원데이클래스, 방배동 촬영공간" />
        <meta property="og:title" content="Terrazza Lounge | 방배동 카페·와인 라운지·공간대여" />
        <meta property="og:description" content="방배동 Terrazza Lounge는 낮에는 커피와 베이킹 카페, 저녁에는 와인 라운지로 운영되는 복합 공간입니다. 세미나, 전시, 원데이클래스, 촬영, 프라이빗 모임 대관이 가능합니다." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1596401057633-54a8fea69be6?q=80&w=2670&auto=format&fit=crop" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Terrazza Lounge",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "서울 서초구 방배동 807-17",
                "addressLocality": "Seoul",
                "addressRegion": "Seoul",
                "addressCountry": "KR"
              },
              "servesCuisine": ["Cafe", "Wine"],
              "areaServed": "Seoul, Seocho-gu, Bangbae-dong",
              "priceRange": "₩₩"
            }
          `}
        </script>
      </Helmet>
      
      <div className="font-sans antialiased text-charcoal bg-ivory scroll-smooth">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <SpaceRentalSection />
          <GalleryProgramSection />
          <ReservationSection />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
