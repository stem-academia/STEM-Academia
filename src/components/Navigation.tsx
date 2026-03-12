import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { content } from '@/data/content';
import { Menu, Globe, Sun, Moon, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: '', label: 'home' },
  { id: 'sport', label: 'sport' },
  { id: 'nutrition', label: 'nutrition' },
  { id: 'routine', label: 'routine' },
  { id: 'hygiene', label: 'hygiene' },
  { id: 'habits', label: 'habits' },
];

export function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const currentPath = location.pathname.slice(1) || '';
  const t = content[language].nav;

  const getSectionLabel = (section: string) => {
    switch (section) {
      case '': return t.home;
      case 'sport': return t.sport;
      case 'nutrition': return t.nutrition;
      case 'routine': return t.routine;
      case 'hygiene': return t.hygiene;
      case 'habits': return t.habits;
      default: return t.home;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
          >
            <span className="bg-gradient-to-br from-emerald-400 to-teal-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-emerald-500/30">
              <Heart className="w-5 h-5" />
            </span>
            <span className="hidden sm:inline dark:text-white">{language === 'ru' ? 'ЗОЖ' : 'ДСӨ'}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPath === section.id
                    ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {getSectionLabel(section.id)}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="dark:text-gray-300">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 dark:bg-gray-900 dark:border-gray-800">
                <div className="flex flex-col gap-2 mt-8">
                  {sections.map((section) => (
                    <Link
                      key={section.id}
                      to={`/${section.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-left font-medium transition-all ${
                        currentPath === section.id
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {getSectionLabel(section.id)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
