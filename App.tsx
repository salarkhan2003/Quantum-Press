
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/category/:categorySlug/:articleSlug" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/latest" element={<Home />} /> {/* Mocking latest as home for now */}
          <Route path="*" element={<div className="container mx-auto px-6 py-24 text-center">404 - Reality Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
