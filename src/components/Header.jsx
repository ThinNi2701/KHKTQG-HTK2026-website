import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header({ currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Trang chủ', icon: '🏠' },
    { id: 'knowledge', label: 'Hiểu biết chung', icon: '📚' },
    { id: 'quiz', label: 'Kiểm tra trí tuệ cảm xúc', icon: '✍️' },
    { id: 'family', label: 'Mâu thuẫn gia đình', icon: '👨‍👩‍👧' },
    { id: 'violence', label: 'Bạo lực học đường', icon: '⚠️' },
    { id: 'emotion', label: 'Điều chỉnh cảm xúc', icon: '🧘' },
    { id: 'faq', label: 'Giải đáp thắc mắc', icon: '❓' }
  ];

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleNavigate = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="glass-header shadow-md"
      style={{ position: 'sticky', top: 0, zIndex: 100 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #2563EB 0%, #9333EA 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              Q
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-800">Tên Web</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          {!isMobile && (
            <nav className="flex gap-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold text-base transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.div
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-full h-0.5 bg-gray-700 rounded"
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobile && isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full px-6 py-4 rounded-xl font-semibold text-base transition-all text-left ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
