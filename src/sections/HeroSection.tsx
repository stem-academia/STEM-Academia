import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Zap, Star, Activity, Sparkles, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language].hero;

  const sections = [
    { id: 'sport', icon: Activity, color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
    { id: 'nutrition', icon: Heart, color: 'from-emerald-400 to-green-500', bgColor: 'bg-emerald-100 dark:bg-emerald-900/30' },
    { id: 'routine', icon: Target, color: 'from-blue-400 to-indigo-500', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
    { id: 'hygiene', icon: Sparkles, color: 'from-cyan-400 to-teal-500', bgColor: 'bg-cyan-100 dark:bg-cyan-900/30' },
    { id: 'habits', icon: TrendingUp, color: 'from-rose-400 to-pink-500', bgColor: 'bg-rose-100 dark:bg-rose-900/30' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/40 dark:bg-emerald-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/40 dark:bg-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/30 dark:bg-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/30 dark:bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] animate-bounce delay-0 duration-[3000ms]">
          <Heart className="w-8 h-8 text-rose-400/60 dark:text-rose-400/40" />
        </div>
        <div className="absolute top-[25%] right-[15%] animate-bounce delay-500 duration-[3500ms]">
          <Zap className="w-10 h-10 text-amber-400/60 dark:text-amber-400/40" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] animate-bounce delay-1000 duration-[4000ms]">
          <Star className="w-6 h-6 text-yellow-400/60 dark:text-yellow-400/40" />
        </div>
        <div className="absolute bottom-[30%] right-[10%] animate-bounce delay-700 duration-[3200ms]">
          <Activity className="w-8 h-8 text-emerald-400/60 dark:text-emerald-400/40" />
        </div>
        <div className="absolute top-[60%] left-[5%] animate-pulse delay-300">
          <Sparkles className="w-5 h-5 text-cyan-400/50 dark:text-cyan-400/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {language === 'ru' ? 'Для всех, кто хочет быть здоровым' : 'Барлығына, денсаулықты қалайтындарға'}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          {t.subtitle}
        </p>

        {/* CTA Button */}
        <Link to="/sport">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-lg px-8 py-6 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300"
          >
            {t.cta}
            <ArrowRight className="w-5 h-5 ml-2 animate-pulse" />
          </Button>
        </Link>

        {/* Quick Navigation Cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
          {sections.map((section) => {
            const Icon = section.icon;
            const labels: Record<string, { ru: string; kz: string }> = {
              sport: { ru: 'Спорт', kz: 'Спорт' },
              nutrition: { ru: 'Питание', kz: 'Тамақтану' },
              routine: { ru: 'Распорядок', kz: 'Тәртіп' },
              hygiene: { ru: 'Гигиена', kz: 'Гигиена' },
              habits: { ru: 'Привычки', kz: 'Дағдылар' },
            };
            return (
              <Link
                key={section.id}
                to={`/${section.id}`}
                className={`group p-4 ${section.bgColor} rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-12 h-12 mx-auto bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {labels[section.id][language]}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-center gap-8 animate-in fade-in duration-700 delay-700">
          {[
            { value: '5', label: language === 'ru' ? 'Тем' : 'Тақырып' },
            { value: '2', label: language === 'ru' ? 'Языка' : 'Тіл' },
            { value: '∞', label: language === 'ru' ? 'Пользы' : 'Пайда' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
