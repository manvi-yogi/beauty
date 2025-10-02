import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const categories = [
    { name: 'Skin Care', path: '/shop?category=Skin Care' },
    { name: 'Hair Care', path: '/shop?category=Hair Care' },
    { name: 'Makeup', path: '/shop?category=Makeup' },
    { name: 'Fragrance', path: '/shop?category=Fragrance' },
    { name: 'Wellness', path: '/shop?category=Wellness' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              BeautyBloom
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-rose-500 transition-colors font-medium">
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 animate-fadeIn">
                  <Link
                    to="/shop"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Contact
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </form>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/cart" className="relative text-gray-700 hover:text-rose-500 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <button className="text-gray-700 hover:text-rose-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-rose-500 transition-colors">
                  <User className="w-6 h-6" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-shadow font-medium"
              >
                Login
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-slideDown">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </form>

            <div className="space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-rose-500 font-medium">
                Home
              </Link>
              <Link to="/shop" className="block py-2 text-gray-700 hover:text-rose-500 font-medium">
                Shop
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="block py-2 pl-4 text-gray-600 hover:text-rose-500"
                >
                  {category.name}
                </Link>
              ))}
              <Link to="/about" className="block py-2 text-gray-700 hover:text-rose-500 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-rose-500 font-medium">
                Contact
              </Link>

              <div className="flex items-center space-x-4 pt-4 border-t">
                <Link to="/cart" className="relative text-gray-700">
                  <ShoppingCart className="w-6 h-6" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
                <button className="text-gray-700">
                  <Heart className="w-6 h-6" />
                </button>
                {user ? (
                  <>
                    <Link to="/profile" className="text-gray-700">
                      <User className="w-6 h-6" />
                    </Link>
                    <button onClick={handleSignOut} className="text-sm text-rose-500">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="text-rose-500 font-medium">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
