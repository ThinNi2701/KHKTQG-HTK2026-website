import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Header({ currentPage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [useHamburger, setUseHamburger] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navMeasureRef = useRef(null);

  const menuItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'knowledge', label: 'Hiểu biết chung' },
    { id: 'quiz', label: 'Kiểm tra trí tuệ cảm xúc' },
    { id: 'family', label: 'Mâu thuẫn gia đình' },
    { id: 'violence', label: 'Bạo lực học đường' },
    { id: 'emotion', label: 'Điều chỉnh cảm xúc' },
    { id: 'faq', label: 'Giải đáp thắc mắc' }
  ];

  const recompute = () => {
    const containerEl = containerRef.current;
    const logoEl = logoRef.current;
    const navMeasureEl = navMeasureRef.current;
    if (!containerEl || !logoEl || !navMeasureEl) return;

    const containerWidth = containerEl.clientWidth;
    const logoWidth = logoEl.clientWidth;
    const availableForNav = Math.max(0, containerWidth - logoWidth - 24); // small gap (kept in case of future use)
    const _neededForNav = navMeasureEl.scrollWidth;

    const shouldHamburger = window.innerWidth < 1024; // only switch on narrower screens

    setUseHamburger(shouldHamburger);
    if (!shouldHamburger) {
      setIsMobileMenuOpen(false);
    }
  };

  // Measure on mount and resize
  useEffect(() => {
    const measure = () => requestAnimationFrame(recompute);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute on page change (labels/active state can change width)
  useEffect(() => {
    const raf = requestAnimationFrame(recompute);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Recompute once fonts load to avoid late text wrap
  useEffect(() => {
    if (!document.fonts || !document.fonts.ready) return;
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      requestAnimationFrame(recompute);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Recompute when compact mode toggles
  // (Compact mode removed)

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
        <div className="flex items-center justify-between" ref={containerRef}>
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            ref={logoRef}
          >
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #2B92E4 0%, #F8B5C1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              EQ
            </div>
            
          </motion.div>

          {/* Desktop Navigation Menu */}
          <nav
            className="flex"
            ref={navRef}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              minWidth: 0,
              gap: '0.5rem',
              display: useHamburger ? 'none' : 'flex',
            }}
          >
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`rounded-2xl font-semibold transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  padding: 'clamp(0.45rem, 0.82vw, 0.7rem) clamp(0.85rem, 1.25vw, 1.1rem)',
                  fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
                  lineHeight: 1.1,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          {useHamburger && (
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.line
                  x1="6"
                  y1="10"
                  x2="26"
                  y2="10"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    x: isMobileMenuOpen ? 5 : 0,
                    y: isMobileMenuOpen ? 6 : 0
                  }}
                  style={{ originX: '0.5px', originY: '0.5px' }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line
                  x1="6"
                  y1="16"
                  x2="26"
                  y2="16"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line
                  x1="6"
                  y1="22"
                  x2="26"
                  y2="22"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    x: isMobileMenuOpen ? 5 : 0,
                    y: isMobileMenuOpen ? -6 : 0
                  }}
                  style={{ originX: '0.5px', originY: '0.5px' }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {useHamburger && isMobileMenuOpen && (
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
                        ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Hidden measuring nav to get accurate width without affecting layout */}
      <nav
        aria-hidden="true"
        ref={navMeasureRef}
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          display: 'flex',
          gap: '0.5rem',
          whiteSpace: 'nowrap',
          padding: 0,
          margin: 0,
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            style={{
              flexShrink: 0,
              whiteSpace: 'nowrap',
              padding: 'clamp(0.45rem, 0.82vw, 0.7rem) clamp(0.85rem, 1.25vw, 1.1rem)',
              fontSize: 'clamp(0.88rem, 1vw, 0.98rem)',
              lineHeight: 1.1,
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </motion.header>
  );
}
