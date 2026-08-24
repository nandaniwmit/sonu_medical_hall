import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, useOutletContext } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RootLayout } from './layouts/RootLayout';

// Lazy load the 6 distinct pages
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then((m) => ({ default: m.Login })));

// Helper wrappers to pass layout context (like openWhatsAppOrder) to pages
const HomePage = () => {
  const context = useOutletContext<{ onOpenWhatsAppOrder: () => void; onOpenQuickInquiry: () => void }>();
  return <Home onOpenWhatsAppOrder={context.onOpenWhatsAppOrder} onOpenQuickInquiry={context.onOpenQuickInquiry} />;
};

const AboutPage = () => {
  const context = useOutletContext<{ onOpenWhatsAppOrder: () => void }>();
  return <About onOpenWhatsAppOrder={context.onOpenWhatsAppOrder} />;
};

const ServicesPage = () => {
  const context = useOutletContext<{ onOpenWhatsAppOrder: (med?: string) => void }>();
  return <Services onOpenWhatsAppOrder={context.onOpenWhatsAppOrder} />;
};

const ContactPage = () => {
  const context = useOutletContext<{ onOpenWhatsAppOrder: () => void }>();
  return <Contact onOpenWhatsAppOrder={context.onOpenWhatsAppOrder} />;
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="login" element={<Login />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
