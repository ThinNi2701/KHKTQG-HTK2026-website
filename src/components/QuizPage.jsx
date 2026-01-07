import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';

export default function QuizPage({ onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        score++;
      }
    });
    onSubmit(score);
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

      <div className="max-w-7xl mx-auto">
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
                <h3 className="text-4xl font-bold text-gray-800 mb-8" style={{ lineHeight: '1.4' }}>
                  Câu {currentQuestion + 1}: {questions[currentQuestion].question}
                </h3>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(currentQuestion, index)}
                      className={`w-full p-6 text-left rounded-2xl border-2 transition-all text-xl ${
                        answers[currentQuestion] === index
                          ? 'border-purple-500 bg-purple-50 shadow-md'
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium text-gray-700">{option}</span>
                    </motion.button>
                  ))}
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
            <div className="glass-light rounded-2xl shadow-lg p-6" style={{ marginBottom: '16px' }}>
              <h4 className="text-xl font-bold mb-4 text-gray-700 text-center">Danh sách câu hỏi</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', justifyItems: 'center' }}>
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
              </div>
            </div>
            <div className="flex justify-center">
            {/* Nút nộp bài - Bên ngoài khung trắng */}
            <motion.button
              onClick={handleSubmit}
              className="block mx-auto h-[40px] w-1/2 mt-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg center-block"
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
