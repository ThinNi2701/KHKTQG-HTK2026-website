import { motion } from 'framer-motion';

export default function Header({ currentPage, onNavigate }) {
  const menuItems = [
    { id: 'home', label: 'Trang chủ', icon: '🏠' },
    { id: 'knowledge', label: 'Hiểu biết chung', icon: '📚' },
    { id: 'quiz', label: 'Kiểm tra trí tuệ cảm xúc', icon: '✍️' },
    { id: 'family', label: 'Mâu thuẫn gia đình', icon: '👨‍👩‍👧' },
    { id: 'violence', label: 'Bạo lực học đường', icon: '⚠️' },
    { id: 'emotion', label: 'Điều chỉnh cảm xúc', icon: '🧘' },
    { id: 'faq', label: 'Giải đáp thắc mắc', icon: '❓' }
  ];

  return (
    <motion.header
      className="glass shadow-md"
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
            onClick={() => onNavigate('home')}
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
              <h1 className="text-2xl font-black text-gray-800">Quiz Master</h1>
              <p className="text-sm text-gray-500">Kiểm tra kiến thức</p>
            </div>
          </motion.div>

          {/* Navigation Menu */}
          <nav className="flex gap-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
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
        </div>
      </div>
    </motion.header>
  );
}
