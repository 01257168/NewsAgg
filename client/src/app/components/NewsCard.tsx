import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useApp } from '../contexts/AppContext';
import { NewsArticle } from '../services/newsAPI';
import { ImageWithFallback } from './utils/ImageWithFallback';

const SENTIMENT_STYLE = {
  positive: { bg: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500', dark: 'bg-emerald-900/40 text-emerald-300' },
  neutral: { bg: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400', dark: 'bg-gray-700 text-gray-300' },
  negative: { bg: 'bg-red-100 text-red-700', dot: 'bg-red-500', dark: 'bg-red-900/40 text-red-300' },
};

const CATEGORY_COLORS: Record<string, string> = {
  technology: 'bg-cyan-500',
  business: 'bg-blue-500',
  science: 'bg-violet-500',
  health: 'bg-emerald-500',
  entertainment: 'bg-pink-500',
  sports: 'bg-orange-500',
  general: 'bg-gray-500',
};

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
  const { t, isDark } = useApp();

  // Generate a simple ID from the URL for linking
  const articleId = encodeURIComponent(article.url || article.title);

  // Default to neutral sentiment
  const sentiment = 'neutral' as const;
  const sentStyle = SENTIMENT_STYLE[sentiment];

  // Default to general category
  const category = 'general';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link to={`/article/${articleId}`} className="block h-full">
        <div className={`h-full rounded-2xl border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col ${isDark ? 'bg-slate-800/80 border-slate-700/50 backdrop-blur-md hover:border-slate-500' : 'bg-white/85 border-white/60 backdrop-blur-md hover:border-cyan-200'}`}>
          {/* Image */}
          <div className="relative overflow-hidden h-48 flex-shrink-0">
            <ImageWithFallback
              src={article.urlToImage || undefined}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Category badge */}
            <div className={`absolute top-3 left-3 ${CATEGORY_COLORS[category]} text-white text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider`}>
              {t[category as keyof typeof t] as string}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-4">
            <h3 className={`font-semibold leading-snug mb-2 line-clamp-2 group-hover:text-cyan-500 transition-colors ${isDark ? 'text-slate-100' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              {article.title}
            </h3>
            <p className={`text-sm line-clamp-3 flex-1 mb-3 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              {article.description || 'No description available'}
            </p>

            {/* Sentiment tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${isDark ? sentStyle.dark : sentStyle.bg}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${sentStyle.dot}`} />
                {t[sentiment]}
              </span>
            </div>

            {/* Footer */}
            <div className={`flex flex-col gap-1 pt-3 border-t text-xs ${isDark ? 'border-slate-700 text-slate-400' : 'border-gray-100 text-gray-400'}`}>
              <div className="flex items-center gap-1">
                <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{t.source}:</span>
                <span className="truncate">{article.source.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-gray-500'}`}>{t.author}:</span>
                <span className="truncate">{article.author || 'Unknown'}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-gray-500'}`}>{t.publishedAt}:</span>
                <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
