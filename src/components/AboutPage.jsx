import { motion } from 'framer-motion';

export default function AboutPage({ onStartQuiz }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-black text-gray-800 mb-4">
            📖 Giới thiệu dự án
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* Card 1 - Mục tiêu */}
          <motion.div
            className="glass-light rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-purple-600 mb-4 flex items-center gap-3">
              🎯 Mục tiêu dự án
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Website kiểm tra trắc nghiệm được xây dựng nhằm giúp người học kiểm tra và đánh giá 
              kiến thức về lập trình web cơ bản (HTML, CSS, JavaScript). Hệ thống cung cấp 40 câu hỏi 
              trắc nghiệm với giao diện thân thiện và trực quan.
            </p>
          </motion.div>

          {/* Card 2 - Tính năng */}
          <motion.div
            className="glass-light rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}>
            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              ✨ Tính năng chính
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <strong>40 câu hỏi trắc nghiệm</strong> về HTML, CSS, JavaScript
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <strong>Giao diện hiện đại</strong> với animations mượt mà
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <strong>Tính điểm tự động</strong> và đánh giá kết quả chi tiết
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🗺️</span>
                <div>
                  <strong>Danh sách câu hỏi</strong> giúp dễ dàng điều hướng
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <strong>Responsive</strong> - Hoạt động tốt trên mọi thiết bị
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Card 3 - Công nghệ */}
          <motion.div
            className="glass-light rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center gap-3">
              🛠️ Công nghệ sử dụng
            </h2>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <span className="text-3xl">⚛️</span>
                <strong>React 18</strong>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                <span className="text-3xl">✨</span>
                <strong>Framer Motion</strong>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                <span className="text-3xl">⚡</span>
                <strong>Vite</strong>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                <span className="text-3xl">🎨</span>
                <strong>Custom CSS</strong>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Hướng dẫn */}
          <motion.div
            className="glass-light rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-orange-600 mb-4 flex items-center gap-3">
              📚 Hướng dẫn sử dụng
            </h2>
            <ol className="space-y-3 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">1.</span>
                Nhấn nút <strong>"Bắt đầu ngay"</strong> để bắt đầu làm bài
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">2.</span>
                Chọn đáp án cho mỗi câu hỏi
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">3.</span>
                Sử dụng danh sách câu hỏi bên phải để di chuyển nhanh
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">4.</span>
                Nhấn <strong>"Nộp bài"</strong> khi hoàn thành
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">5.</span>
                Xem kết quả và đánh giá của bạn
              </li>
            </ol>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            onClick={onStartQuiz}
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Bắt đầu làm bài ngay
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
