import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Sparkles, Droplets, Hand, Shirt, Smile, Shield, Heart, X, Info, Sparkle } from 'lucide-react';

const dailyIcons = [Droplets, Hand, Shirt, Smile];

export function HygieneSection() {
  const { language } = useLanguage();
  const t = content[language].hygiene;
  const [selectedDaily, setSelectedDaily] = useState<typeof t.daily.items[0] | null>(null);
  const [selectedStep, setSelectedStep] = useState<typeof t.dental.steps[0] | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Banner Image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 mb-12 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <img 
          src="images/hygiene-banner.jpg" 
          alt="Hygiene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              {language === 'ru' ? 'Раздел 4' : '4-бөлім'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            {t.intro}
          </p>
        </div>

        {/* Daily Rules */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t.daily.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.daily.items.map((item, index) => {
              const Icon = dailyIcons[index];
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDaily(item)}
                  className="group text-left"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                    <CardContent className="p-6 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.desc}</p>
                      <div className="flex items-center gap-1 text-cyan-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <Info className="w-3 h-3" />
                        <span>{language === 'ru' ? 'Подробнее' : 'Толығырақ'}</span>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dental & Facts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dental Care */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Smile className="w-6 h-6 text-cyan-500" />
                {t.dental.title}
              </h3>
              <div className="space-y-3">
                {t.dental.steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedStep(step)}
                    className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group text-left"
                  >
                    <div className="w-10 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 flex-1">{step.step}</span>
                    <Info className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Facts */}
          <Card className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                {t.facts.title}
              </h3>
              <ul className="space-y-4">
                {t.facts.items.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <Heart className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-200 group-hover/item:scale-110 transition-transform" />
                    <span className="text-white/90">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Hygiene Tips Banner */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            { 
              icon: Droplets, 
              title: language === 'ru' ? '20 секунд' : '20 секунд',
              desc: language === 'ru' ? 'Мой руки не меньше 20 секунд' : 'Қолды кем дегенде 20 секунд жу',
              color: 'from-cyan-400 to-blue-500'
            },
            { 
              icon: Sparkle, 
              title: language === 'ru' ? '2 раза в день' : 'Күніне 2 рет',
              desc: language === 'ru' ? 'Чисти зубы утром и вечером' : 'Таңертең және кешке тіс жу',
              color: 'from-teal-400 to-emerald-500'
            },
            { 
              icon: Shirt, 
              title: language === 'ru' ? 'Чистая одежда' : 'Таза киім',
              desc: language === 'ru' ? 'Меняй каждый день' : 'Күн сайын ауыстыр',
              color: 'from-violet-400 to-purple-500'
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

      {/* Daily Detail Modal */}
      <Dialog open={!!selectedDaily} onOpenChange={() => setSelectedDaily(null)}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {selectedDaily && (
                <>
                  <Sparkles className="w-6 h-6 text-cyan-500" />
                  {selectedDaily.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedDaily && (
            <div className="py-4">
              <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedDaily.desc}</p>
              <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedDaily.details}</p>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setSelectedDaily(null)}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            {language === 'ru' ? 'Закрыть' : 'Жабу'}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Dental Step Modal */}
      <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {selectedStep && (
                <>
                  <Smile className="w-6 h-6 text-teal-500" />
                  {selectedStep.step}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedStep && (
            <div className="py-4">
              <div className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedStep.details}</p>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setSelectedStep(null)}
            className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            {language === 'ru' ? 'Закрыть' : 'Жабу'}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
