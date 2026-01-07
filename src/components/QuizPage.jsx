import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, scaleOptions } from '../data/questions';

export default function QuizPage({ onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isGridCollapsed, setIsGridCollapsed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionIndex, value) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] !== undefined) {
        totalScore += answers[index];
      }
    });
    onSubmit(totalScore);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 px-4">
      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="glass rounded-full h-4 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-center mt-3 text-gray-600 font-semibold text-lg">
          Câu {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {/* LEFT SIDE - Question Card (Larger) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              style={{ flex: '1' }}
            >
              <div className="glass-light rounded-2xl shadow-xl p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-8" style={{ lineHeight: '1.4' }}>
                  Câu {currentQuestion + 1}: {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {scaleOptions.map((option, index) => {
                    const isSelected = answers[currentQuestion] === option.value;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(currentQuestion, option.value)}
                        className={`w-full p-5 text-left rounded-xl transition-all min-h-[80px] flex items-center ${
                          isSelected
                            ? 'bg-blue-500 shadow-md'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`w-6 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                              isSelected 
                                ? 'border-white bg-white' 
                                : 'border-gray-400 bg-white'
                            }`}>
                              {isSelected && (
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                              )}
                            </div>
                            <span className={`text-xl font-medium ${
                              isSelected ? 'text-white' : 'text-gray-700'
                            }`}>
                              {option.label}
                            </span>
                          </div>
                          <span className={`text-lg font-semibold px-4 py-1.5 flex-shrink-0 ${
                            isSelected
                              ? 'text-white'
                              : 'text-gray-600'
                          }`}>
                            {option.value} điểm
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-4 mt-8">
                  <motion.button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="px-8 py-4 bg-gray-200 text-gray-700 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: currentQuestion > 0 ? 1.05 : 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ← Câu trước
                  </motion.button>

                  <motion.button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    disabled={currentQuestion >= questions.length - 1}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: currentQuestion < questions.length - 1 ? 1.05 : 1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Câu tiếp →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT SIDE - Question Grid (Sidebar) */}
          <div style={{ width: '320px', position: 'sticky', top: '24px' }}>
            {/* Timer Display */}
            <div className="glass-light rounded-2xl shadow-lg p-6 mb-4">
              <div className="text-center">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Thời gian còn lại</h4>
                <div className={`text-4xl font-bold ${
                  timeLeft < 300 ? 'text-red-500' : 'text-blue-600'
                }`}>
                  {formatTime(timeLeft)}
                </div>
                {timeLeft < 300 && (
                  <p className="text-sm text-red-500 mt-2 font-medium">⚠️ Sắp hết giờ!</p>
                )}
              </div>
            </div>

            <div className="glass-light rounded-2xl shadow-lg p-6" style={{ marginBottom: '16px' }}>
              <div 
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => setIsGridCollapsed(!isGridCollapsed)}
              >
                <h4 className="text-xl font-bold text-gray-700">Danh sách câu hỏi</h4>
                <motion.div
                  animate={{ rotate: isGridCollapsed ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-gray-700"
                >
                  ▼
                </motion.div>
              </div>
              
              {!isGridCollapsed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', justifyItems: 'center' }}
                >
                  {questions.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentQuestion(index)}
                      style={{ width: '60px', height: '60px', borderRadius: '16px' }}
                      className={`font-semibold text-lg ${
                        currentQuestion === index
                          ? 'bg-purple-600 text-white'
                          : answers[index] !== undefined
                          ? 'bg-green-100 text-green-700 border-2 border-green-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {index + 1}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
            <div className="flex justify-center">
            {/* Nút nộp bài - Bên ngoài khung trắng */}
            <motion.button
              onClick={handleSubmit}
              className="block mx-auto h-10 w-full mt-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg center-block"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              ✓ Nộp bài
            </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
