import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Our Team' },
    { path: '/events', label: 'Upcoming Events' },
    { path: '/blogs', label: 'Our Blogs' },
    { path: '/glimpses', label: 'Glimpses' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav-glass">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/acm-logo.png" alt="ACM Logo" className="w-10 h-10" />
            <div>
              <h1 className="text-lg font-poppins font-bold text-primary">Symbiosis ACM</h1>
              <p className="text-xs text-text-secondary">Student Chapter</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 relative ${isActive(item.path)
                    ? 'text-accent'
                    : 'text-text-primary hover:text-accent'
                  }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-glass-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 px-3 rounded-lg transition-all duration-300 ${isActive(item.path)
                      ? 'text-accent bg-accent/10'
                      : 'text-text-primary hover:text-accent hover:bg-accent/5'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;