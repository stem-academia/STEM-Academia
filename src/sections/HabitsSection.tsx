import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Cigarette, Wine, Pill, XCircle, CheckCircle, Users, MessageCircle, Shield, Heart, Zap, Lightbulb } from 'lucide-react';

export function HabitsSection() {
  const { language } = useLanguage();
  const t = content[language].habits;

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Banner Image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 mb-12 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <img 
          src="/images/habits-banner.jpg" 
          alt="Habits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/50 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-sm font-medium text-red-700 dark:text-red-300">
              {language === 'ru' ? 'Раздел 5' : '5-бөлім'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            {t.intro}
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Smoking */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
                <Cigarette className="w-5 h-5" />
                {t.smoking.title}
              </h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {t.smoking.facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Alcohol */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
                <Wine className="w-5 h-5" />
                {t.alcohol.title}
              </h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {t.alcohol.facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <XCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Drugs */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-red-600 via-rose-700 to-pink-700 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl font-bold text-white flex items-center gap-2 relative z-10">
                <Pill className="w-5 h-5" />
                {t.drugs.title}
              </h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {t.drugs.facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Motivation */}
        <Card className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white border-0 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardContent className="p-8 relative">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              {t.motivation.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.motivation.items.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors group/item"
                >
                  {index === 0 && <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />}
                  {index === 1 && <Users className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />}
                  {index === 2 && <Heart className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />}
                  {index === 3 && <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />}
                  {index === 4 && <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />}
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <Heart className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">
              {language === 'ru' ? 'Ты не один!' : 'Сен жалғыз емессің!'}
            </h3>
            <p className="text-white/80 mb-4">
              {language === 'ru' 
                ? 'Если нужна помощь, обратись к родителям, учителю или психологу' 
                : 'Көмек керек болса, ата-анаңа, мұғаліміңе немесе психологқа жүгін'}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 bg-white/20 rounded-full text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                {language === 'ru' ? 'Доверься близким' : 'Жақындарыңа сен'}
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                {language === 'ru' ? 'Попроси совета' : 'Кеңес сұра'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
