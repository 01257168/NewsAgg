import { useState, useEffect } from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { NewsGrid } from '../components/NewsGrid';
import { SentimentPanel } from '../components/SentimentPanel';
import { useApp } from '../contexts/AppContext';

export function Home() {
  const { isDark } = useApp();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Carousel - sticky below header */}
      <div className="sticky top-16 z-20">
        <HeroCarousel scrollY={scrollY} />
      </div>

      {/* Main content - two column layout */}
      <div className="flex gap-5 px-4 md:px-6 pb-12 mt-6 max-w-[1600px] mx-auto">
        {/* News Grid */}
        <div className="flex-1 min-w-0">
          <NewsGrid />
        </div>

        {/* Sentiment Panel - right sticky sidebar */}
        <div className="hidden lg:block w-72 xl:w-80 shrink-0">
          <div className="sticky top-[calc(4rem+6px)]">
            <SentimentPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
