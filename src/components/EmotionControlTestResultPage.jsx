import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import { emotionControlQuestions } from '../data/emotionControlTestQuestions';

// === DÁN LINK WEB APP (Google Apps Script) CỦA SHEET BÀI KIỂM TRA KIỂM SOÁT CẢM XÚC VÀO ĐÂY ===
// Lưu ý: link Google Sheet (docs.google.com/spreadsheets/...) KHÔNG thể POST trực tiếp.
// Bạn cần triển khai Apps Script thành Web App và lấy URL dạng https://script.google.com/macros/s/.../exec
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPEeXcwTufsokd-IxZcHQQWEJuGJivl6rxewOgJWvLd-JBwM41jKSq-Ge4kWRiU3z-/exec";

export default function EmotionControlTestResultPage({ score, onRetake, onGoHome }) {
  const [showConfetti, setShowConfetti] = useState(false);

  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // null | 'success' | 'error'

  const totalQuestions = emotionControlQuestions.length;
  const maxScore = totalQuestions * 5;
  const percentage = Math.round((score / maxScore) * 100);

  let evaluation = '';
  let description = '';
  let suggestions = [];
  let icon = '';
  let color = '';
  let resultImage = '';

  if (score >= 97) {
    evaluation = 'Chỉ số kiểm soát cảm xúc rất tốt';
    description =
      'Bạn có khả năng nhận thức và làm chủ cảm xúc xuất sắc, luôn giữ được sự bình tĩnh và tích cực ngay cả trong những tình huống áp lực cao.';
    suggestions = [
      'Thể hiện mức độ đồng cảm sâu sắc, thấu hiểu cảm xúc và góc nhìn của người khác, từ đó xây dựng mối quan hệ hài hòa và tin cậy.',
      'Biết điều chỉnh cảm xúc linh hoạt và phù hợp, góp phần tạo môi trường sống và học tập tích cực, hiệu quả.',
      'Có kỹ năng giao tiếp cảm xúc rất tốt, xử lý xung đột khéo léo và mang tính xây dựng.',
      'Luôn tiếp nhận phản hồi một cách cởi mở, biến thách thức thành cơ hội phát triển bản thân và tập thể.',
    ];
    icon = '🌟';
    color = 'from-yellow-400 to-orange-500';
  } else if (score >= 73) {
    evaluation = 'Chỉ số kiểm soát cảm xúc tốt';
    description =
      'Bạn có khả năng nhận diện và kiểm soát cảm xúc khá tốt, biết giữ bình tĩnh trong những tình huống áp lực.';
    suggestions = [
      'Có sự thấu hiểu và đồng cảm với người khác, lắng nghe ý kiến và cảm xúc của tập thể trước khi đưa ra phản hồi.',
      'Biết điều chỉnh cảm xúc phù hợp với hoàn cảnh, tránh để cảm xúc cá nhân ảnh hưởng tiêu cực đến việc học tập và các mối quan hệ.',
      'Có kỹ năng giao tiếp cảm xúc tích cực, thể hiện sự tôn trọng và hợp tác khi làm việc nhóm.',
      'Sẵn sàng tiếp nhận góp ý và biết chuyển phản hồi thành động lực cải thiện bản thân.',
    ];
    icon = '✨';
    color = 'from-green-400 to-emerald-500';
  } else if (score >= 49) {
    evaluation = 'Chỉ số kiểm soát cảm xúc trung bình';
    description =
      'Bạn có khả năng nhận biết cảm xúc của bản thân ở mức cơ bản, tuy nhiên đôi lúc vẫn để cảm xúc ảnh hưởng đến phản ứng hoặc quyết định.';
    suggestions = [
      'Có ý thức lắng nghe và tôn trọng người khác, nhưng mức độ đồng cảm và điều chỉnh cảm xúc chưa thật sự ổn định trong các tình huống áp lực.',
      'Giao tiếp nhìn chung phù hợp, song cần cải thiện khả năng kiểm soát cảm xúc để tránh hiểu lầm hoặc căng thẳng không cần thiết.',
      'Sẵn sàng tiếp nhận góp ý, nhưng cần chủ động hơn trong việc rèn luyện kỹ năng quản lý cảm xúc và xử lý xung đột.',
    ];
    icon = '💡';
    color = 'from-blue-400 to-cyan-500';
  } else {
    evaluation = 'Chỉ số kiểm soát cảm xúc thấp';
    description =
      'Bạn chưa kiểm soát tốt cảm xúc cá nhân, dễ bị chi phối bởi tâm trạng trong giao tiếp và học tập.';
    suggestions = [
      'Khả năng nhận diện cảm xúc của bản thân và người khác còn hạn chế, dẫn đến phản ứng đôi lúc chưa phù hợp với hoàn cảnh.',
      'Trong các tình huống áp lực hoặc mâu thuẫn, chưa thể hiện được sự bình tĩnh và linh hoạt trong ứng xử.',
      'Cần rèn luyện thêm kỹ năng quản lý cảm xúc, lắng nghe và đồng cảm, nhằm cải thiện hiệu quả giao tiếp và xây dựng mối quan hệ tích cực hơn.',
    ];
    icon = '🌱';
    color = 'from-purple-400 to-pink-500';
  }

  useEffect(() => {
    if (score >= 97) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }

    setShowConfetti(false);
    return undefined;
  }, [score]);

  const handleSaveToSheet = async () => {
    if (!userName.trim()) {
      alert('Vui lòng nhập tên của bạn!');
      return;
    }

    if (!GOOGLE_SCRIPT_URL) {
      alert(
        'Chưa cấu hình GOOGLE_SCRIPT_URL cho bài kiểm tra kiểm soát cảm xúc.\nHãy dán link Web App của Google Apps Script vào file EmotionControlTestResultPage.jsx.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const dataToSend = {
        ten: userName,
        diem: score,
        loai: evaluation,
        bai: 'Bài kiểm tra khả năng kiểm soát cảm xúc',
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      setSaveStatus('success');
    } catch (error) {
      console.error('Lỗi khi lưu:', error);
      setSaveStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center px-4 py-10">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <motion.div
        className="max-w-2xl w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <motion.div className="text-8xl mb-6">{icon}</motion.div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kết quả kiểm soát cảm xúc</h2>

          <div className={`text-7xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
            {score}/{maxScore}
          </div>
          <p className="text-2xl text-gray-600 mb-6">Tỉ lệ: {percentage}%</p>

          {resultImage && (
            <div className="mb-8">
              <img
                src={resultImage}
                alt={evaluation}
                className="w-full rounded-2xl shadow-lg"
                style={{ maxHeight: 340, objectFit: 'cover' }}
              />
            </div>
          )}

          <motion.div
            className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Lưu kết quả của bạn</h3>

            {saveStatus === 'success' ? (
              <div className="text-green-600 font-bold text-xl flex items-center justify-center gap-2">
                ✅ Đã lưu thành công!
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Nhập tên của bạn..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  disabled={isSubmitting}
                />
                <button
                  onClick={handleSaveToSheet}
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-full font-bold text-white transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Đang lưu...' : 'Lưu'}
                </button>
              </div>
            )}
            {saveStatus === 'error' && (
              <p className="text-red-500 mt-2 text-sm">Có lỗi xảy ra, vui lòng thử lại.</p>
            )}
          </motion.div>

          <div className="mb-8">
            <p className={`text-3xl font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {evaluation}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed px-4 mb-6">{description}</p>

            {suggestions.length > 0 && (
              <div className="text-left px-4 md:px-6 mt-6 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Nhận xét, góp ý:</h3>
                <ul className="space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-3 text-blue-600 font-bold text-xl">•</span>
                      <span className="text-base leading-relaxed">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <motion.button
              onClick={onRetake}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Làm lại bài test
            </motion.button>
            <motion.button
              onClick={onGoHome}
              className="px-12 py-4 bg-white text-gray-700 rounded-full text-lg font-bold shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              ⬅️ Về trang chủ
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
