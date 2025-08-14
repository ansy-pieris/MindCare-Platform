import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* Prefer /public path or import the asset */}
          <img
            src="src/assets/images/logo.png"
            alt="MindCare Logo"
            className="w-19 h-19 mr-3 object-contain"
          />
          <span className="text-xl font-bold text-purple-700">MindCare</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-purple-700 focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-700">About Us</Link></li>
          <li><Link to="/faq" className="hover:text-purple-700">FAQ</Link></li>
          <li><Link to="/blog-news" className="hover:text-purple-700">Blog &amp; News</Link></li>
          <li><Link to="/contact" className="hover:text-purple-700">Contact Us</Link></li>
        </ul>

        {/* Desktop Sign Up / Login */}
        <div className="hidden md:flex space-x-2">
          <Link
            to="/signup"
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden px-4 pb-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-purple-700" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-700" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-purple-700" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          </li>
          <li>
            <Link to="/blog-news" className="hover:text-purple-700" onClick={() => setMobileMenuOpen(false)}>Blog &amp; News</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-purple-700" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </li>

          <div className="flex space-x-2 mt-2">
            <Link
              to="/signup"
              className="flex-1 text-center px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
