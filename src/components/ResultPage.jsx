import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

export default function ResultPage({ score, onRestart }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const percentage = Math.round((score / questions.length) * 100);

  let evaluation = "";
  let icon = "";
  let color = "";

  if (score >= 36) {
    evaluation = "Xuất sắc! Bạn nắm vững kiến thức!";
    icon = "🌟";
    color = "from-yellow-400 to-orange-500";
    setShowConfetti(true);
  } else if (score >= 30) {
    evaluation = "Tốt! Bạn đã làm rất tốt!";
    icon = "✅";
    color = "from-green-400 to-emerald-500";
  } else if (score >= 20) {
    evaluation = "Trung bình. Cần ôn tập thêm!";
    icon = "⚠️";
    color = "from-blue-400 to-cyan-500";
  } else {
    evaluation = "Cần cải thiện. Hãy học lại nhé!";
    icon = "❌";
    color = "from-red-400 to-pink-500";
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center px-4">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <motion.div
        className="max-w-2xl w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          {/* Icon */}
          <motion.div
            className="text-8xl mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Kết quả của bạn
          </motion.h2>

          {/* Score */}
          <motion.div
            className={`text-7xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-4`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            {score}/{questions.length}
          </motion.div>

          <motion.p
            className="text-2xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {percentage}% đúng
          </motion.p>

          {/* Evaluation */}
          <motion.p
            className="text-3xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {evaluation}
          </motion.p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${color}`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.7, duration: 1 }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Đúng</div>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-red-600">{questions.length - score}</div>
              <div className="text-sm text-gray-600">Sai</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-600">{questions.length}</div>
              <div className="text-sm text-gray-600">Tổng</div>
            </div>
          </div>

          {/* Button */}
          <motion.button
            onClick={onRestart}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-bold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            🔄 Làm lại
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
