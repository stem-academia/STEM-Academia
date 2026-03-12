import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Check, Sparkles, Pill, Apple } from 'lucide-react';
import type { DetailInfo } from '@/data/content';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DetailInfo | null;
}

export function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  const { language } = useLanguage();
  const t = content[language].common;

  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            {data.title}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {data.description}
          </p>

          {/* Items List */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500" />
              {language === 'ru' ? 'Что включать:' : 'Не қосу керек:'}
            </h4>
            <div className="grid gap-3">
              {data.items.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800"
                >
                  <div className="flex items-start gap-3">
                    <Apple className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vitamins & Minerals */}
          {(data.vitamins || data.minerals) && (
            <div className="grid sm:grid-cols-2 gap-4">
              {data.vitamins && (
                <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill className="w-5 h-5 text-amber-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {language === 'ru' ? 'Витамины' : 'Витаминдер'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{data.vitamins}</p>
                </div>
              )}
              {data.minerals && (
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {language === 'ru' ? 'Минералы' : 'Минералдар'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{data.minerals}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <Button 
          onClick={onClose}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
        >
          <X className="w-4 h-4 mr-2" />
          {t.close}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
