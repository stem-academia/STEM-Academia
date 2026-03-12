import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Dumbbell, Heart, Brain, Moon, Music, Bike, Trophy, Sparkles, Waves, Gamepad2, X, Flame, Zap } from 'lucide-react';

const benefitIcons = [Dumbbell, Heart, Brain, Moon];
const activityIcons = [Gamepad2, Music, Bike, Trophy, Sparkles, Waves];

export function SportSection() {
  const { language } = useLanguage();
  const t = content[language].sport;
  const [selectedActivity, setSelectedActivity] = useState<typeof t.activities.items[0] | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Banner Image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 mb-12 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <img 
          src="images/sport-banner.jpg" 
          alt="Sport" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/50 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
            <Dumbbell className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
              {language === 'ru' ? 'Раздел 1' : '1-бөлім'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            {t.intro}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t.benefits.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500" />
                  <CardContent className="p-6 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/30">
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

        {/* Facts & Activities */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Facts */}
          <Card className="bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 text-white border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 animate-pulse" />
                {t.facts.title}
              </h3>
              <ul className="space-y-4">
                {t.facts.items.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover/item:bg-white/30 transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-white/90">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.activities.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {t.activities.items.map((activity, index) => {
                  const Icon = activityIcons[index];
                  return (
                    <button 
                      key={index}
                      onClick={() => setSelectedActivity(activity)}
                      className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/30 dark:hover:to-amber-900/30 transition-all duration-300 group text-left hover:shadow-lg hover:-translate-y-1"
                    >
                      <Icon className="w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{activity.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{activity.desc}</p>
                      <div className="mt-2 flex items-center gap-1 text-orange-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <Zap className="w-3 h-3" />
                        <span>{language === 'ru' ? 'Подробнее' : 'Толығырақ'}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motivation Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl shadow-2xl text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <Flame className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">
              {language === 'ru' ? 'Начни сегодня!' : 'Бүгін баста!'}
            </h3>
            <p className="text-white/80">
              {language === 'ru' 
                ? 'Даже 15 минут активности уже дают результат' 
                : 'Тіпті 15 минут белсенділік нәтиже береді'}
            </p>
          </div>
        </div>
      </div>

      {/* Activity Detail Modal */}
      <Dialog open={!!selectedActivity} onOpenChange={() => setSelectedActivity(null)}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {selectedActivity && (
                <>
                  <Gamepad2 className="w-6 h-6 text-orange-500" />
                  {selectedActivity.name}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedActivity && (
            <div className="py-4">
              <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedActivity.desc}</p>
              <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedActivity.details}</p>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setSelectedActivity(null)}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            {language === 'ru' ? 'Закрыть' : 'Жабу'}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
