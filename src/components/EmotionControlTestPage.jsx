import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { emotionControlQuestions } from '../data/emotionControlTestQuestions';
import { scaleOptions } from '../data/questions';

const PASSWORD = 'HTK-KHKT-2026';
const STORAGE_KEY = 'emotion_control_test_progress_v1';
const ACCESS_SESSION_KEY = 'emotion_control_test_access_session_v1';

export default function EmotionControlTestPage({ onSubmit }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [endTimeMs, setEndTimeMs] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  const answersRef = useRef(answers);
  const initRef = useRef(false);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Remember access only within the current browser tab/session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(ACCESS_SESSION_KEY) === 'granted') {
        setHasAccess(true);
      }
    } catch {
      // ignore session storage errors
    }
  }, []);

  useEffect(() => {
    if (!hasAccess || initRef.current) return;
    initRef.current = true;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const initialEnd = Date.now() + 30 * 60 * 1000;
        setEndTimeMs(initialEnd);
        setTimeLeft(Math.max(0, Math.floor((initialEnd - Date.now()) / 1000)));
        return;
      }

      const parsed = JSON.parse(raw);
      const savedAnswers = parsed?.answers ?? {};
      const savedCurrent = Number.isFinite(parsed?.currentQuestion) ? parsed.currentQuestion : 0;
      const savedEnd = Number.isFinite(parsed?.endTimeMs) ? parsed.endTimeMs : null;

      setAnswers(savedAnswers);
      setCurrentQuestion(savedCurrent);

      if (!savedEnd) {
        const initialEnd = Date.now() + 30 * 60 * 1000;
        setEndTimeMs(initialEnd);
        setTimeLeft(Math.max(0, Math.floor((initialEnd - Date.now()) / 1000)));
        return;
      }

      setEndTimeMs(savedEnd);
      setTimeLeft(Math.max(0, Math.floor((savedEnd - Date.now()) / 1000)));
    } catch {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore cleanup errors
      }
      const initialEnd = Date.now() + 30 * 60 * 1000;
      setEndTimeMs(initialEnd);
      setTimeLeft(Math.max(0, Math.floor((initialEnd - Date.now()) / 1000)));
    }
  }, [hasAccess]);

  useEffect(() => {
    if (!hasAccess || !endTimeMs) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers,
          currentQuestion,
          endTimeMs,
        })
      );
    } catch {
      // ignore storage errors
    }
  }, [answers, currentQuestion, endTimeMs, hasAccess]);

  useEffect(() => {
    if (!hasAccess || !endTimeMs) return;

    const tick = () => {
      const secondsLeft = Math.max(0, Math.floor((endTimeMs - Date.now()) / 1000));
      setTimeLeft(secondsLeft);
      if (secondsLeft <= 0) {
        handleSubmit(true);
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTimeMs, hasAccess]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionIndex, value) => {
    setAnswers({ ...answers, [questionIndex]: value });
  };

  const handleSubmit = (isAutoSubmit = false) => {
    let totalScore = 0;
    emotionControlQuestions.forEach((_, index) => {
      const answerValue = answersRef.current[index];
      if (answerValue !== undefined) {
        totalScore += answerValue;
      }
    });

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore cleanup errors
    }

    onSubmit(totalScore);
  };

  const progress = ((currentQuestion + 1) / emotionControlQuestions.length) * 100;

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (passwordInput.trim() === PASSWORD) {
      setHasAccess(true);
      setPasswordError('');
      setPasswordInput('');
      try {
        sessionStorage.setItem(ACCESS_SESSION_KEY, 'granted');
      } catch {
        // ignore session storage errors
      }
    } else {
      setPasswordError('Mật khẩu chưa đúng, vui lòng thử lại.');
    }
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center px-4">
        <motion.div
          className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/60"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-3 text-center">
            Bài kiểm tra khả năng kiểm soát cảm xúc
          </h1>
          <p className="text-gray-600 text-sm mb-6 text-center">
            Nhập mật khẩu được cung cấp để bắt đầu bài kiểm tra chuyên sâu dành riêng cho nhóm được cấp quyền.
          </p>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
            />
            {passwordError && (
              <p className="text-sm text-red-500 text-center">{passwordError}</p>
            )}
            <motion.button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Gửi
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-light rounded-2xl shadow-2xl p-4"
        style={{
          position: 'fixed',
          top: 84,
          right: 24,
          zIndex: 2000,
          maxWidth: 220,
          background: 'rgba(255, 255, 255, 0.55)',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.18)',
        }}
      >
        <div className="text-center">
          <h4 className="text-xs font-semibold text-gray-600 mb-1">Thời gian còn lại</h4>
          <div
            className={`font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-blue-600'}`}
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
          >
            {formatTime(timeLeft)}
          </div>
          {timeLeft < 300 && (
            <p className="text-xs text-red-500 mt-1 font-medium">⚠️ Sắp hết giờ!</p>
          )}
        </div>
      </motion.div>

      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded-full shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          zIndex: 2000,
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(17, 24, 39, 0.82)',
          backdropFilter: 'blur(12px) saturate(180%)',
          WebkitBackdropFilter: 'blur(12px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow:
            '0 10px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
        }}
        aria-label="Mở menu câu hỏi"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </motion.button>

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
          Câu {currentQuestion + 1} / {emotionControlQuestions.length}
        </p>
      </div>

      <div
        className="max-w-4xl mx-auto px-4 md:px-8"
        style={{
          minHeight: 'calc(100vh - 220px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(1.5rem, 4vw, 3rem)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%' }}
            >
              <div className="glass-light rounded-2xl shadow-xl p-4 md:p-8 lg:p-12">
                <h3
                  className="font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8"
                  style={{
                    lineHeight: '1.4',
                    fontSize: 'clamp(1.05rem, 2.4vw, 1.9rem)',
                  }}
                >
                  Câu {currentQuestion + 1}: {emotionControlQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-2 md:space-y-3">
                  {scaleOptions.map((option, index) => {
                    const isSelected = answers[currentQuestion] === option.value;
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(currentQuestion, option.value)}
                        className={`w-full text-left rounded-xl transition-all flex items-center ${
                          isSelected ? 'bg-blue-500 shadow-md' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                        style={{
                          padding: 'clamp(1.0rem, 2.0vw, 1.45rem) clamp(1.05rem, 2.4vw, 1.7rem)',
                          minHeight: 'clamp(88px, 10vw, 124px)',
                          border: 'none',
                          outline: 'none',
                          boxShadow: isSelected ? undefined : '0 10px 24px rgba(15, 23, 42, 0.06)',
                        }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div
                            className="flex items-center flex-1"
                            style={{ gap: 'clamp(0.6rem, 1.2vw, 1rem)' }}
                          >
                            <div
                              className={`rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'border-white bg-white' : 'border-gray-400 bg-white'
                              }`}
                              style={{
                                width: 'clamp(22px, 2.2vw, 28px)',
                                height: 'clamp(22px, 2.2vw, 28px)',
                              }}
                            >
                              {isSelected && (
                                <div
                                  className="rounded-full bg-blue-500"
                                  style={{
                                    width: 'clamp(10px, 1.2vw, 14px)',
                                    height: 'clamp(10px, 1.2vw, 14px)',
                                  }}
                                ></div>
                              )}
                            </div>
                            <span
                              className={`text-sm md:text-lg lg:text-xl font-medium ${
                                isSelected ? 'text-white' : 'text-gray-700'
                              }`}
                              style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.25rem)' }}
                            >
                              {option.label}
                            </span>
                          </div>
                          <span
                            className={`text-xs md:text-base lg:text-lg font-semibold px-2 md:px-3 lg:px-4 py-1 md:py-1.5 flex-shrink-0 ${
                              isSelected ? 'text-white' : 'text-gray-600'
                            }`}
                            style={{
                              fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)',
                              padding: 'clamp(0.25rem, 0.6vw, 0.5rem) clamp(0.6rem, 1.2vw, 1rem)',
                              borderRadius: 9999,
                              background: isSelected ? 'rgba(255,255,255,0.15)' : 'transparent',
                            }}
                          >
                            {option.value} điểm
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-8 flex justify-between gap-2 md:gap-4">
                  <motion.button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="bg-gray-200 text-gray-700 rounded-xl md:rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: currentQuestion > 0 ? 1.05 : 1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: 'clamp(0.7rem, 1.5vw, 1.05rem) clamp(1.1rem, 2.4vw, 1.85rem)',
                      fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    ← Câu trước
                  </motion.button>

                  <motion.button
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    disabled={currentQuestion >= emotionControlQuestions.length - 1}
                    className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-xl md:rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{
                      scale: currentQuestion < emotionControlQuestions.length - 1 ? 1.05 : 1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: 'clamp(0.7rem, 1.5vw, 1.05rem) clamp(1.1rem, 2.4vw, 1.85rem)',
                      fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    Câu tiếp →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => handleSubmit(false)}
            className="w-full max-w-md px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)',
              paddingTop: 'clamp(0.85rem, 1.8vw, 1.15rem)',
              paddingBottom: 'clamp(0.85rem, 1.8vw, 1.15rem)',
              paddingLeft: 'clamp(1.25rem, 2.6vw, 2.2rem)',
              paddingRight: 'clamp(1.25rem, 2.6vw, 2.2rem)',
            }}
          >
            ✓ Nộp bài
          </motion.button>
        </div>

      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.55)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    zIndex: 3000,
                  }}
                />

                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                  className="glass-light shadow-2xl"
                  style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    width: 'min(92vw, 22rem)',
                    zIndex: 3001,
                    overflow: 'hidden',
                    borderTopLeftRadius: 24,
                    borderBottomLeftRadius: 24,
                  }}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Danh sách câu hỏi"
                >
                  <div className="p-6" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="flex items-center justify-between mb-4" style={{ flexShrink: 0 }}>
                      <h4
                        className="font-bold text-gray-800"
                        style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)' }}
                      >
                        Danh sách câu hỏi
                      </h4>
                      <motion.button
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-gray-100 rounded-full"
                        whileHover={{ scale: 1.08, rotate: 90 }}
                        whileTap={{ scale: 0.92 }}
                        style={{
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 20,
                          color: '#4B5563',
                        }}
                        aria-label="Đóng menu"
                      >
                        ✕
                      </motion.button>
                    </div>

                    <div style={{ overflowY: 'auto', flex: 1, paddingRight: 6 }}>
                      <div
                        className="grid gap-3"
                        style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                      >
                        {emotionControlQuestions.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => {
                              setCurrentQuestion(index);
                              setIsMenuOpen(false);
                            }}
                            className={`rounded-xl font-semibold ${
                              currentQuestion === index
                                ? 'bg-purple-600 text-white'
                                : answers[index] !== undefined
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-700'
                            }`}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.94 }}
                            style={{
                              aspectRatio: '1 / 1',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border:
                                answers[index] !== undefined && currentQuestion !== index
                                  ? '2px solid rgba(4, 120, 87, 0.35)'
                                  : 'none',
                              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                            }}
                          >
                            {index + 1}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
