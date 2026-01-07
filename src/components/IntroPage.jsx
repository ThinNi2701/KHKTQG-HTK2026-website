import { motion } from 'framer-motion';

export default function IntroPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-pink-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-32 h-32 mx-auto border-4 border-white rounded-full flex items-center justify-center">
            <motion.span
              className="text-4xl font-bold italic"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Quiz
            </motion.span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.p
          className="text-sm tracking-widest uppercase mb-4 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.4 }}
        >
          Thử thách kiến thức của bạn
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-light tracking-wider mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          BÀI KIỂM TRA
        </motion.h1>

        <motion.h2
          className="text-6xl md:text-8xl font-black tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          TRẮC NGHIỆM
        </motion.h2>

        <motion.p
          className="text-lg mb-12 opacity-95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 1 }}
        >
          40 câu hỏi • Mỗi câu đúng 1 điểm • Tổng 40 điểm
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={onStart}
          className="px-12 py-4 text-lg font-semibold tracking-widest uppercase border-4 border-white rounded-full bg-transparent hover:bg-white hover:text-purple-900 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Bắt đầu ngay
        </motion.button>
      </motion.div>
    </div>
  );
}
