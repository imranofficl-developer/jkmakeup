
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy load components for performance
const LandingPage = lazy(() => import('./pages/Home'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-cream">
    <div className="text-gold font-serif text-2xl tracking-widest animate-pulse">
      JK MAKEUP ARTISTRY
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </HashRouter>
  );
};

export default App;
