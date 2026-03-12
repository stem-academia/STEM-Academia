import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { DetailModal } from '@/components/DetailModal';
import { Apple, Droplets, Clock, Candy, Utensils, ChevronRight, Sparkles, Leaf, Info } from 'lucide-react';
import type { DetailInfo } from '@/data/content';

const principleIcons = [Apple, Utensils, Droplets, Candy];

export function NutritionSection() {
  const { language } = useLanguage();
  const t = content[language].nutrition;
  const [selectedDetail, setSelectedDetail] = useState<DetailInfo | null>(null);

  const pyramidColors = [
    'from-emerald-500 to-emerald-600 shadow-emerald-500/40',
    'from-lime-500 to-lime-600 shadow-lime-500/40',
    'from-yellow-400 to-yellow-500 shadow-yellow-500/40',
    'from-orange-400 to-orange-500 shadow-orange-500/40',
    'from-rose-400 to-rose-500 shadow-rose-500/40',
  ];

  const pyramidBgColors = [
    'bg-emerald-100 dark:bg-emerald-900/30',
    'bg-lime-100 dark:bg-lime-900/30',
    'bg-yellow-100 dark:bg-yellow-900/30',
    'bg-orange-100 dark:bg-orange-900/30',
    'bg-rose-100 dark:bg-rose-900/30',
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Banner Image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 mb-12 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <img 
          src="/images/nutrition-banner.jpg" 
          alt="Nutrition" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/50 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
            <Apple className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              {language === 'ru' ? 'Раздел 2' : '2-бөлім'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            {t.intro}
          </p>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t.principles.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.principles.items.map((item, index) => {
              const Icon = principleIcons[index];
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500" />
                  <CardContent className="p-6 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/30">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Pyramid & Tips */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pyramid */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
                <Leaf className="w-6 h-6 text-emerald-500" />
                {t.pyramid.title}
              </h3>
              <div className="space-y-3">
                {t.pyramid.levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDetail(level.details)}
                    className={`group mx-auto bg-gradient-to-r ${pyramidColors[index]} text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-between`}
                    style={{ 
                      width: `${100 - index * 15}%`,
                      minWidth: '70%'
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-8 h-8 ${pyramidBgColors[index]} rounded-lg flex items-center justify-center text-sm font-bold text-gray-700 dark:text-white`}>
                        {index + 1}
                      </span>
                      <span className="text-sm sm:text-base">{level.name}</span>
                    </span>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
                <Info className="w-4 h-4" />
                {language === 'ru' ? 'Нажми на уровень для подробностей' : 'Егжей-тегжейлі білу үшін деңгейге басыңыз'}
              </p>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                {t.tips.title}
              </h3>
              <ul className="space-y-4">
                {t.tips.items.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover/item:bg-white/30 transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-white/90">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Food Facts */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            { 
              icon: Droplets, 
              title: language === 'ru' ? 'Вода — основа' : 'Су — негізі',
              desc: language === 'ru' ? '2 литра в день' : 'Күніне 2 литр',
              color: 'from-blue-400 to-cyan-500'
            },
            { 
              icon: Apple, 
              title: language === 'ru' ? '5 порций фруктов' : '5 порция жеміс',
              desc: language === 'ru' ? 'Каждый день' : 'Күн сайын',
              color: 'from-green-400 to-emerald-500'
            },
            { 
              icon: Sparkles, 
              title: language === 'ru' ? 'Меньше сахара' : 'Аз қант',
              desc: language === 'ru' ? 'Замени на мёд' : 'Балға ауыстыр',
              color: 'from-amber-400 to-orange-500'
            },
          ].map((item, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <DetailModal 
        isOpen={!!selectedDetail} 
        onClose={() => setSelectedDetail(null)} 
        data={selectedDetail}
      />
    </section>
  );
}
