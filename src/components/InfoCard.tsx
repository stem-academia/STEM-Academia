import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  details?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function InfoCard({ title, description, details, icon, className = '' }: InfoCardProps) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const t = content[language].common;

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg ${className}`}>
      <CardContent className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
            {icon}
          </div>
        )}
        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        
        {details && (
          <div className="space-y-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 p-0 h-auto"
            >
              <Info className="w-4 h-4 mr-1" />
              {isExpanded ? t.close : t.readMore}
              {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>
            
            {isExpanded && (
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl text-sm text-gray-700 dark:text-gray-300 animate-in slide-in-from-top-2 duration-200">
                {details}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
