import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, CornerDownRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { ImageWithFallback } from '../components/utils/ImageWithFallback';
import { NewsArticle } from '../services/newsAPI';

function CommentItem({ comment_text, isDark, depth = 0 }: { comment_text: string; isDark: boolean; depth?: number }) {
  const [replyOpen, setReplyOpen] = useState(false);
  return (
    <div className={depth > 0 ? 'ml-8 mt-3' : ''}>
      <div className={`flex gap-3 p-4 rounded-2xl ${isDark ? 'bg-slate-800/60' : 'bg-gray-50/80'}`}>
        <div className="w-9 h-9 rounded-full flex-shrink-0 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
          U
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-semibold text-sm ${isDark ? 'text-slate-200' : 'text-gray-800'}`}>User</span>
            <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-400'}`}>Just now</span>
          </div>
          <p className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{comment_text}</p>
          <button
            onClick={() => setReplyOpen(p => !p)}
            className={`flex items-center gap-1 text-xs mt-2 font-medium transition-colors ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
          >
            <CornerDownRight size={12} />
            Reply
          </button>
          {replyOpen && (
            <div className="mt-2">
              <input
                placeholder="Write a reply..."
                className={`w-full text-sm px-3 py-2 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-400/50 ${isDark ? 'bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-500' : 'bg-white border-gray-200 text-gray-800 placeholder:text-gray-400'}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { t, isDark } = useApp();
  const [comment, setComment] = useState('');
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Since the API doesn't provide a way to fetch a single article by ID,
    // we'll try to decode the URL from the parameter
    if (id) {
      try {
        const decodedUrl = decodeURIComponent(id);
        // In a real app, you'd have an endpoint to fetch article by URL
        // For now, we'll show a message that the article couldn't be loaded from API
        setLoading(false);
        setError('Article loading from API not fully implemented. Try viewing articles from the homepage.');
      } catch (err) {
        setLoading(false);
        setError('Invalid article reference');
      }
    }
  }, [id]);

  const panelBase = isDark
    ? 'bg-slate-800/80 border-slate-700/50 backdrop-blur-md'
    : 'bg-white/85 border-white/60 backdrop-blur-md';

  const mutedText = isDark ? 'text-slate-400' : 'text-gray-500';
  const bodyText = isDark ? 'text-slate-200' : 'text-gray-700';

  if (loading) {
    return (
      <div className="px-4 md:px-6 py-6 max-w-6xl mx-auto">
        <div className={`flex flex-col items-center justify-center py-20 ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>
          <div className="animate-spin text-3xl mb-4">⏳</div>
          <p className="text-lg font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="px-4 md:px-6 py-6 max-w-6xl mx-auto">
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
          >
            <ArrowLeft size={16} />
            {t.backToHome || 'Back to Home'}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center py-20 rounded-2xl border ${panelBase}`}
        >
          <div className="text-6xl mb-4">📰</div>
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>Article Not Found</h2>
          <p className={`mb-6 ${mutedText}`}>
            {error || 'The article you are looking for is not available. Please visit the homepage to browse available news.'}
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-6 max-w-6xl mx-auto">
      {/* Back button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
        >
          <ArrowLeft size={16} />
          {t.backToHome}
        </Link>
      </motion.div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Main article content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 min-w-0"
        >
          {/* Featured image */}
          <div className="relative rounded-2xl overflow-hidden h-96 mb-6 shadow-lg">
            <ImageWithFallback
              src={article.urlToImage || undefined}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Title */}
          <h1 className={`leading-tight mb-4 ${isDark ? 'text-slate-50' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
            {article.title}
          </h1>

          {/* Author info */}
          <div className={`flex flex-wrap items-center gap-4 pb-4 mb-6 border-b text-sm ${isDark ? 'border-slate-700' : 'border-gray-100'}`}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                {(article.author?.[0] || 'N').toUpperCase()}
              </div>
              <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>{article.author || 'Unknown Author'}</span>
            </div>
            <span className={mutedText}>{t.source}: <span className="font-semibold text-cyan-500">{article.source.name}</span></span>
            <span className={mutedText}>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>

          {/* Article description as intro */}
          <div className={`mb-8 text-lg leading-relaxed ${bodyText}`}>
            {article.description && (
              <p className="mb-4">{article.description}</p>
            )}
          </div>

          {/* Article content */}
          {article.content && (
            <div className={`space-y-4 leading-relaxed mb-8 ${bodyText}`} style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              {article.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Read full article link */}
          <div className={`rounded-2xl border p-5 ${panelBase}`}>
            <p className={`text-sm mb-3 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
              Read the full article on the original source:
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all text-sm"
            >
              Visit Source →
            </a>
          </div>

          {/* Comments section */}
          <div className={`rounded-2xl border p-5 ${panelBase} mt-8`}>
            <h3 className={`font-semibold mb-4 flex items-center gap-2 ${isDark ? 'text-slate-100' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              <MessageSquare size={17} className="text-cyan-500" />
              {t.comments}
            </h3>

            {/* Write comment */}
            <div className="flex gap-3 mb-5">
              <div className="w-9 h-9 rounded-full flex-shrink-0 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                Y
              </div>
              <div className="flex-1">
                <input
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder={t.writeComment}
                  className={`w-full text-sm px-4 py-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-400/50 ${isDark ? 'bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-500' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'}`}
                />
              </div>
            </div>

            {/* Sample comments */}
            <div className="space-y-3">
              <CommentItem comment_text="Great article! Very informative." isDark={isDark} />
              <CommentItem comment_text="Thanks for sharing this news." isDark={isDark} />
              <p className={`text-sm text-center py-6 ${mutedText}`}>{t.writeComment || 'Be the first to comment!'}</p>
            </div>
          </div>
        </motion.article>

        {/* Right sidebar: Info panel */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:w-72 xl:w-80 shrink-0"
        >
          <div className="lg:sticky lg:top-20 space-y-4">
            {/* Article Info */}
            <div className={`rounded-2xl border p-5 ${panelBase}`}>
              <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-slate-200' : 'text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Article Info
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{t.source}:</span>
                  <div className={isDark ? 'text-slate-300' : 'text-gray-700'}>{article.source.name}</div>
                </div>
                <div>
                  <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{t.publishedAt}:</span>
                  <div className={isDark ? 'text-slate-300' : 'text-gray-700'}>{new Date(article.publishedAt).toLocaleString()}</div>
                </div>
                <div>
                  <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{t.author}:</span>
                  <div className={isDark ? 'text-slate-300' : 'text-gray-700'}>{article.author || 'Unknown'}</div>
                </div>
              </div>
            </div>

            {/* Share section */}
            <div className={`rounded-2xl border p-5 ${panelBase}`}>
              <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-slate-200' : 'text-gray-800'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                Share
              </h3>
              <div className="flex gap-2">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title + ' ' + article.url)}`} target="_blank" rel="noopener noreferrer" className={`flex-1 py-2 rounded-lg text-center text-sm font-medium transition-colors ${isDark ? 'bg-slate-700 text-cyan-300 hover:bg-slate-600' : 'bg-gray-100 text-cyan-700 hover:bg-gray-200'}`}>
                  Twitter
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(article.url)}`} target="_blank" rel="noopener noreferrer" className={`flex-1 py-2 rounded-lg text-center text-sm font-medium transition-colors ${isDark ? 'bg-slate-700 text-cyan-300 hover:bg-slate-600' : 'bg-gray-100 text-cyan-700 hover:bg-gray-200'}`}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
