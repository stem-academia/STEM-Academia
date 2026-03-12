import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Clock, Moon, Target, CheckCircle2, AlarmClock, Sun, Zap, Coffee, BookOpen, X, Star, Lightbulb } from 'lucide-react';

export function RoutineSection() {
  const { language } = useLanguage();
  const t = content[language].routine;
  const [selectedSchedule, setSelectedSchedule] = useState<typeof t.schedule.items[0] | null>(null);
  const [selectedTip, setSelectedTip] = useState<typeof t.productivity.tips[0] | null>(null);

  const timeColors = [
    'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800',
    'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    'bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 border-lime-200 dark:border-lime-800',
    'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  ];

  const timeIcons = [Sun, Coffee, BookOpen, Coffee, BookOpen, Zap, Star, Moon, Moon];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Banner Image */}
      <div className="relative w-full h-48 sm:h-64 lg:h-80 mb-12 overflow-hidden rounded-3xl shadow-2xl max-w-6xl mx-auto">
        <img 
          src="images/routine-banner.jpg" 
          alt="Routine" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4">
            <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {language === 'ru' ? 'Раздел 3' : '3-бөлім'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in slide-in-from-bottom-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8">
            {t.intro}
          </p>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <AlarmClock className="w-6 h-6 text-blue-500" />
            {t.schedule.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.schedule.items.map((item, index) => {
              const Icon = timeIcons[index];
              return (
                <button
                  key={index}
                  onClick={() => setSelectedSchedule(item)}
                  className={`${timeColors[index]} border-2 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/50 dark:bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-sm opacity-80">{item.activity}</div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sleep & Productivity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sleep */}
          <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white border-0 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Moon className="w-6 h-6 animate-pulse" />
                {t.sleep.title}
              </h3>
              <ul className="space-y-4">
                {t.sleep.facts.map((fact, index) => (
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

          {/* Productivity */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                {t.productivity.title}
              </h3>
              <div className="space-y-3">
                {t.productivity.tips.map((tip, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTip(tip)}
                    className="w-full flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{tip.title}</span>
                    </div>
                    <Lightbulb className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pomodoro Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-3xl shadow-2xl text-white text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <Clock className="w-12 h-12 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold mb-2">
              {language === 'ru' ? 'Техника Помодоро' : 'Помодоро техникасы'}
            </h3>
            <p className="text-white/80 mb-4">
              {language === 'ru' 
                ? '25 минут работы — 5 минут отдыха' 
                : '25 минут жұмыс — 5 минут демалыс'}
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-4 py-2 bg-white/20 rounded-full text-sm">
                {language === 'ru' ? '4 цикла = большой перерыв' : '4 цикл = үлкен үзіліс'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Detail Modal */}
      <Dialog open={!!selectedSchedule} onOpenChange={() => setSelectedSchedule(null)}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {selectedSchedule && (
                <>
                  <AlarmClock className="w-6 h-6 text-blue-500" />
                  {selectedSchedule.time} — {selectedSchedule.activity}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedSchedule && (
            <div className="py-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedSchedule.details}</p>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setSelectedSchedule(null)}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            {language === 'ru' ? 'Закрыть' : 'Жабу'}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Tip Detail Modal */}
      <Dialog open={!!selectedTip} onOpenChange={() => setSelectedTip(null)}>
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              {selectedTip && (
                <>
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                  {selectedTip.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedTip && (
            <div className="py-4">
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedTip.desc}</p>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setSelectedTip(null)}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
          >
            <X className="w-4 h-4 mr-2" />
            {language === 'ru' ? 'Закрыть' : 'Жабу'}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
