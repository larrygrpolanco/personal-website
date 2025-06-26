import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Import page components
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Creative from './pages/Creative';
import Writing from './pages/Writing';
import About from './pages/About';

import './App.css';

/**
 * Main App Component
 * 
 * This is the root component that sets up routing for the entire website.
 * It uses React Router to handle navigation between different pages.
 * 
 * React Learning Notes:
 * - BrowserRouter provides routing context to the entire app
 * - Routes component contains all possible route definitions
 * - Route components define which component renders for each URL path
 * - The layout (Header/Footer) stays consistent across all pages
 */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Header with navigation - appears on all pages */}
        <Header />
        
        {/* Main content area - changes based on current route */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        {/* Footer - appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
