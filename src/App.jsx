import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import KnowledgePage from './components/KnowledgePage';
import FamilyConflictPage from './components/FamilyConflictPage';
import SchoolViolencePage from './components/SchoolViolencePage';
import EmotionControlPage from './components/EmotionControlPage';
import FAQPage from './components/FAQPage';
import EmotionControlTestPage from './components/EmotionControlTestPage';
import EmotionControlTestResultPage from './components/EmotionControlTestResultPage';

function App() {
  const [page, setPage] = useState('home'); // 'home', 'knowledge', 'quiz', 'family', 'violence', 'emotion', 'faq', 'result', 'emotionTest', 'emotionTestResult'
  const [score, setScore] = useState(0);
  const [emotionControlScore, setEmotionControlScore] = useState(0);

  const appShellRef = useRef(null);
  const rafRef = useRef(0);
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const hasCurrentRef = useRef(false);
  const lastMoveTsRef = useRef(0);

  const handleNavigate = (targetPage) => {
    setPage(targetPage);
  };

  const handleStart = () => {
    setPage('quiz');
  };

  const handleSubmit = (finalScore) => {
    setScore(finalScore);
    setPage('result');
  };

  const handleRestart = () => {
    setScore(0);
    setPage('home');
  };

  const handleEmotionTestSubmit = (finalScore) => {
    setEmotionControlScore(finalScore);
    setPage('emotionTestResult');
  };

  const handleEmotionTestRestart = () => {
    setEmotionControlScore(0);
    setPage('emotionTest');
  };

  return (
    <div
      ref={appShellRef}
      className="app-shell"
      onMouseMove={(e) => {
        const el = appShellRef.current;
        if (!el) return;

        const x = e.clientX;
        const y = e.clientY;
        targetPosRef.current = { x, y };
        lastMoveTsRef.current = performance.now();
        el.style.setProperty('--spot-opacity', '1');

        if (!hasCurrentRef.current) {
          currentPosRef.current = { x, y };
          hasCurrentRef.current = true;
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
        }

        if (rafRef.current) return;

        const tick = () => {
          const host = appShellRef.current;
          if (!host) {
            rafRef.current = 0;
            return;
          }

          const target = targetPosRef.current;
          const current = currentPosRef.current;
          const ease = 0.14;
          const nx = current.x + (target.x - current.x) * ease;
          const ny = current.y + (target.y - current.y) * ease;
          currentPosRef.current = { x: nx, y: ny };
          host.style.setProperty('--mx', `${nx}px`);
          host.style.setProperty('--my', `${ny}px`);

          const dx = target.x - nx;
          const dy = target.y - ny;
          const dist = Math.hypot(dx, dy);
          const idleForMs = performance.now() - lastMoveTsRef.current;

          if (dist < 0.5 && idleForMs > 160) {
            rafRef.current = 0;
            return;
          }

          rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
      }}
      onMouseLeave={() => {
        const el = appShellRef.current;
        if (!el) return;
        el.style.setProperty('--spot-opacity', '0');
      }}
    >
      {/* Header - Always visible except on result page */}
      {page !== 'result' && page !== 'emotionTestResult' && (
        <Header currentPage={page} onNavigate={handleNavigate} />
      )}

      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <HomePage onStartQuiz={handleStart} />
          </motion.div>
        )}

        {page === 'knowledge' && (
          <motion.div
            key="knowledge"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <KnowledgePage />
          </motion.div>
        )}

        {page === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <QuizPage onSubmit={handleSubmit} />
          </motion.div>
        )}

        {page === 'emotionTest' && (
          <motion.div
            key="emotionTest"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <EmotionControlTestPage onSubmit={handleEmotionTestSubmit} />
          </motion.div>
        )}

        {page === 'family' && (
          <motion.div
            key="family"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FamilyConflictPage />
          </motion.div>
        )}

        {page === 'violence' && (
          <motion.div
            key="violence"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <SchoolViolencePage />
          </motion.div>
        )}

        {page === 'emotion' && (
          <motion.div
            key="emotion"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <EmotionControlPage />
          </motion.div>
        )}

        {page === 'faq' && (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FAQPage />
          </motion.div>
        )}

        {page === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AboutPage onStartQuiz={handleStart} />
          </motion.div>
        )}

        {page === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <ResultPage score={score} onRestart={handleRestart} />
          </motion.div>
        )}

        {page === 'emotionTestResult' && (
          <motion.div
            key="emotionTestResult"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <EmotionControlTestResultPage
              score={emotionControlScore}
              onRetake={handleEmotionTestRestart}
              onGoHome={() => handleNavigate('home')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
