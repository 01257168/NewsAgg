import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { newsAPI, NewsArticle } from '../services/newsAPI';

interface SentimentBadgeProps {
  sentiment: string;
}

function SentimentBadge({ sentiment }: SentimentBadgeProps) {
  const colors = {
    positive: 'bg-emerald-500/90 text-white',
    neutral: 'bg-gray-500/90 text-white',
    negative: 'bg-red-500/90 text-white',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${colors[sentiment as keyof typeof colors]}`}>
      {sentiment}
    </span>
  );
}

interface HeroCarouselProps {
  scrollY: number;
}

export function HeroCarousel({ scrollY }: HeroCarouselProps) {
  const { t, isDark } = useApp();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [headlines, setHeadlines] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const isCompact = scrollY > 280;
  const heroHeight = isCompact ? 100 : Math.max(420 - scrollY * 0.5, 100);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await newsAPI.getTopHeadlines('general', 5);
        if (response.success && response.data?.articles) {
          setHeadlines(response.data.articles.slice(0, 5));
        }
      } catch (err) {
        console.error('Failed to fetch headlines:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  useEffect(() => {
    if (isHovered || headlines.length === 0) return;
    const interval = setInterval(() => {
      setCurrent(p => (p + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, headlines.length]);

  const prev = () => setCurrent(p => (p - 1 + headlines.length) % headlines.length);
  const next = () => setCurrent(p => (p + 1) % headlines.length);

  if (loading || headlines.length === 0) {
    return (
      <div style={{ height: `${heroHeight}px` }} className={`${isDark ? 'bg-slate-800' : 'bg-gray-100'} transition-all duration-300 flex items-center justify-center`}>
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-2">⏳</div>
          <p>Loading headlines...</p>
        </div>
      </div>
    );
  }

  const article = headlines[current];

  return (
    <div
      className="relative overflow-hidden transition-all duration-300 ease-out"
      style={{ height: `${heroHeight}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={article.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image'}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Trending badge */}
      {!isCompact && (
        <div className="absolute top-4 left-6 flex items-center gap-2 z-10">
          <div className="flex items-center gap-1.5 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <TrendingUp size={11} />
            {t.topHeadlines}
          </div>
        </div>
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-6 z-10"
        >
          {!isCompact ? (
            <Link to={`/article/${encodeURIComponent(article.url)}`} className="block group">
              <div className="flex items-center gap-2 mb-2">
                <SentimentBadge sentiment="neutral" />
                <span className="text-white/70 text-xs">{article.source.name}</span>
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2 group-hover:text-cyan-300 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {article.title}
              </h2>
              <p className="text-white/75 text-sm line-clamp-2 mb-3 max-w-2xl">
                {article.description || 'No description available'}
              </p>
              <div className="flex items-center gap-4 text-white/60 text-xs">
                <span>{t.author}: {article.author || 'Unknown'}</span>
                <span>{t.publishedAt}: {new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ) : (
            <Link to={`/article/${encodeURIComponent(article.url)}`} className="flex items-center gap-3 group">
              <div className="flex items-center gap-2 min-w-0">
                <SentimentBadge sentiment="neutral" />
                <span className="text-white font-semibold text-sm truncate group-hover:text-cyan-300 transition-colors">{article.title}</span>
              </div>
              <span className="text-white/60 text-xs flex-shrink-0">{article.source.name}</span>
            </Link>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots indicator */}
      {!isCompact && (
        <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-10">
          {headlines.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-10">
        <motion.div
          key={current}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="h-full bg-cyan-400"
        />
      </div>
    </div>
  );
}
