// src/App.jsx
import 'react';
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import WeeklyBestselling from './components/WeeklyBestselling';
import StorePromo from './components/StorePromo';
import TrendingNow from './components/TrendingNow';
import PopularCollections from './components/PopularCollections';
import BrandsSection from './components/BrandsSection';
import BlogSection from './components/BlogSection';
import Newsletter from './components/Newsletter';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <WeeklyBestselling />
      <StorePromo />
      <TrendingNow />
      <PopularCollections />
      <BrandsSection />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;