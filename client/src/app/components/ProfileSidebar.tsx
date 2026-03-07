import { motion, AnimatePresence } from 'motion/react';
import { X, User, Bookmark, Settings, Sun, Moon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export function ProfileSidebar() {
  const { sidebarOpen, setSidebarOpen, setAccountOpen, isDark, toggleTheme, t } = useApp();

  const menuItems = [
    { icon: User, label: t.account, action: () => { setSidebarOpen(false); setTimeout(() => setAccountOpen(true), 200); } },
    { icon: Bookmark, label: t.bookmarks, action: () => {} },
    { icon: Settings, label: t.settings, action: () => {} },
  ];

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            className={`fixed left-0 top-0 bottom-0 z-[70] w-72 flex flex-col shadow-2xl ${isDark ? 'bg-slate-900 border-r border-slate-700' : 'bg-white border-r border-gray-100'}`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-5 border-b ${isDark ? 'border-slate-700' : 'border-gray-100'}`}>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
                NewsAgg
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className={`p-2 rounded-xl transition-colors ${isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Profile section */}
            <div className={`p-5 border-b ${isDark ? 'border-slate-700' : 'border-gray-100'}`}>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-cyan-400">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=NewsAgg2026" alt="Avatar" className="w-full h-full object-cover bg-gradient-to-br from-cyan-400 to-pink-400" />
                </div>
                <div>
                  <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>Alex Reader</p>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>alex@newsagg.app</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {menuItems.map(item => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all hover:translate-x-1 ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <item.icon size={16} className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
                  </div>
                  <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Bottom: Theme Toggle */}
            <div className={`p-5 border-t ${isDark ? 'border-slate-700' : 'border-gray-100'}`}>
              <button
                onClick={toggleTheme}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-gray-50 text-gray-700'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    {isDark ? <Moon size={16} className="text-cyan-400" /> : <Sun size={16} className="text-yellow-500" />}
                  </div>
                  <span className="font-medium">{isDark ? t.darkMode : t.lightMode}</span>
                </div>
                <div className={`relative w-11 h-6 rounded-full transition-colors ${isDark ? 'bg-cyan-500' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${isDark ? 'left-6' : 'left-1'}`} />
                </div>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}