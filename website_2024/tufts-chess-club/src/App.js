import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';  // Import the GalleryPage component
import ContactPage from './pages/ContactPage';  // Import the ContactPage component
import NotFoundPage from './pages/NotFoundPage';  // 404 Page
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />  {/* The header appears on all pages */}

      <Routes>
        <Route path="/" element={<HomePage />} />  {/* HomePage for the '/' route */}
        <Route path="/about" element={<AboutPage />} />  {/* AboutPage for the '/about' route */}
        <Route path="/gallery" element={<GalleryPage />} />  {/* GalleryPage for the '/gallery' route */}
        <Route path="/contact" element={<ContactPage />} />  {/* ContactPage for the '/contact' route */}
        <Route path="*" element={<NotFoundPage />} />  {/* 404 page for non-existent routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
