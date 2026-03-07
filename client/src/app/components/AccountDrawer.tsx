import { motion, AnimatePresence } from 'motion/react';
import { X, UserPlus, LogIn } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export function AccountDrawer() {
  const { accountOpen, setAccountOpen, isDark, t } = useApp();

  return (
    <AnimatePresence>
      {accountOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setAccountOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            className={`fixed bottom-0 left-0 right-0 z-[70] rounded-t-3xl shadow-2xl ${isDark ? 'bg-slate-900 border-t border-slate-700' : 'bg-white border-t border-gray-100'}`}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className={`w-12 h-1.5 rounded-full ${isDark ? 'bg-slate-600' : 'bg-gray-200'}`} />
            </div>

            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-3">
              <h2 className={`font-bold text-lg ${isDark ? 'text-slate-100' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t.account}
              </h2>
              <button
                onClick={() => setAccountOpen(false)}
                className={`p-2 rounded-xl ${isDark ? 'text-slate-400 hover:bg-slate-800' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Current Account */}
            <div className={`mx-6 mb-4 p-4 rounded-2xl flex items-center gap-4 ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-gray-50 border border-gray-100'}`}>
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-400 flex-shrink-0">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=NewsAgg2026" alt="Avatar" className="w-full h-full object-cover bg-gradient-to-br from-cyan-400 to-pink-400" />
              </div>
              <div className="min-w-0">
                <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-gray-900'}`}>Alex Reader</p>
                <p className={`text-sm truncate ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>alex@newsagg.app</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-xs text-emerald-500 font-medium">{t.loggedInAs} Alex</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 pb-8 space-y-3">
              <button className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0">
                <UserPlus size={18} />
                {t.createAccount}
              </button>
              <button className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 ${isDark ? 'bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500' : 'bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-gray-300'}`}>
                <LogIn size={18} />
                {t.addAccount}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}