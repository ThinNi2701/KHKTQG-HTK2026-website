import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

function App() {
  const [page, setPage] = useState('home'); // 'home', 'knowledge', 'quiz', 'family', 'violence', 'emotion', 'faq', 'result'
  const [score, setScore] = useState(0);

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

  return (
    <div>
      {/* Header - Always visible except on result page */}
      {page !== 'result' && (
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
      </AnimatePresence>
    </div>
  );
}

export default App;
