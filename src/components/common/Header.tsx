import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Mountain, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-slate-600" />
            <div className="text-xl font-bold text-slate-800">
              Mutare Granite
              <span className="text-sm font-normal block text-slate-500">
                Company (Zonal)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isAdminRoute && (
              <>
                <Link
                  to="/"
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/contact"
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                >
                  Contact
                </Link>
              </>
            )}
            
            {isAuthenticated && user?.role === 'admin' && (
              <Link
                to="/admin"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Admin Dashboard
              </Link>
            )}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {!isAdminRoute && (
              <Link
                to="/cart"
                className="relative text-slate-700 hover:text-slate-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            )}

            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-slate-600" />
                <span className="text-sm text-slate-700">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Admin Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-slate-900"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {!isAdminRoute && (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
              
              {isAuthenticated && user?.role === 'admin' && (
                <Link
                  to="/admin"
                  className="block px-3 py-2 text-slate-700 hover:text-slate-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;