import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-br from-emerald-400 to-teal-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-emerald-500/30 animate-pulse">
              <Sparkles className="w-7 h-7" />
            </span>
          </div>
          
          {/* Slogan */}
          <p className="text-2xl text-gray-300 mb-6 flex items-center justify-center gap-2">
            {t.slogan}
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
          </p>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
