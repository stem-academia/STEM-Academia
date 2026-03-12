import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { SportSection } from '@/sections/SportSection';
import { NutritionSection } from '@/sections/NutritionSection';
import { RoutineSection } from '@/sections/RoutineSection';
import { HygieneSection } from '@/sections/HygieneSection';
import { HabitsSection } from '@/sections/HabitsSection';
import { Toaster } from '@/components/ui/sonner';

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <Navigation />
      
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/sport" element={<SportSection />} />
          <Route path="/nutrition" element={<NutritionSection />} />
          <Route path="/routine" element={<RoutineSection />} />
          <Route path="/hygiene" element={<HygieneSection />} />
          <Route path="/habits" element={<HabitsSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
