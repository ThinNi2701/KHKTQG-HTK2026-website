import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

// === THAY LINK WEB APP CỦA BẠN VÀO DƯỚI ĐÂY ===
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDgdYVaFhIalt1Q2C1Uai_GrNdAx6bdJggTNoB1VSCT2ZP-uGwH852n8i1kI1fPgJ7/exec"; 

export default function ResultPage({ score, onRestart }) {
  const [showConfetti, setShowConfetti] = useState(false);
  
  // State cho việc lưu tên vào Sheet
  const [userName, setUserName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // null | 'success' | 'error'

  const totalQuestions = questions.length;
  const maxScore = totalQuestions * 5; 
  const percentage = Math.round((score / maxScore) * 100);

  let evaluation = "";
  let description = "";
  let suggestions = [];
  let icon = "";
  let color = "";

  // Phân loại EQ
  if (score >= 161) {
    evaluation = "Chỉ số trí tuệ cảm xúc rất tốt";
    description = "Bạn có khả năng nhận thức và làm chủ cảm xúc xuất sắc, luôn giữ được sự bình tĩnh và tích cực ngay cả trong những tình huống áp lực cao.";
    suggestions = [
      "Thể hiện mức độ đồng cảm sâu sắc, thấu hiểu cảm xúc và góc nhìn của người khác, từ đó xây dựng mối quan hệ hài hòa và tin cậy.",
      "Biết điều chỉnh cảm xúc linh hoạt và phù hợp, góp phần tạo môi trường làm việc tích cực và hiệu quả.",
      "Có kỹ năng giao tiếp cảm xúc rất tốt, xử lý xung đột khéo léo và mang tính xây dựng.",
      "Luôn tiếp nhận phản hồi một cách cởi mở, biến thách thức thành cơ hội phát triển bản thân và tập thể."
    ];
    icon = "🌟";
    color = "from-yellow-400 to-orange-500";
  } else if (score >= 121) {
    evaluation = "Chỉ số trí tuệ cảm xúc tốt";
    description = "Bạn có khả năng nhận diện và kiểm soát cảm xúc khá tốt, biết giữ bình tĩnh trong những tình huống áp lực.";
    suggestions = [
      "Có sự thấu hiểu và đồng cảm với người khác, lắng nghe ý kiến và cảm xúc của tập thể trước khi đưa ra phán hồi.",
      "Biết điều chỉnh cảm xúc phù hợp với hoàn cảnh, tránh để cảm xúc cá nhân ảnh hưởng tiêu cực đến công việc và các mối quan hệ.",
      "Có kỹ năng giao tiếp cảm xúc tích cực, thể hiện sự tôn trọng và hợp tác khi làm việc nhóm.",
      "Sẵn sàng tiếp nhận góp ý và biết chuyển phản hồi thành động lực cải thiện bản thân."
    ];
    icon = "✨";
    color = "from-green-400 to-emerald-500";
  } else if (score >= 81) {
    evaluation = "Chỉ số trí tuệ cảm xúc trung bình";
    description = "Bạn có khả năng nhận biết cảm xúc của bản thân ở mức cơ bản, tuy nhiên đôi lúc vẫn để cảm xúc ảnh hưởng đến phản ứng hoặc quyết định.";
    suggestions = [
      "Có ý thức lắng nghe và tôn trọng người khác, nhưng mức độ đồng cảm và điều chỉnh cảm xúc chưa thật sự ổn định trong các tình huống áp lực.",
      "Giao tiếp nhìn chung phù hợp, song cần cải thiện khả năng kiểm soát cảm xúc để tránh hiểu lầm hoặc căng thẳng không cần thiết.",
      "Sẵn sàng tiếp nhận góp ý, nhưng cần chủ động hơn trong việc rèn luyện kỹ năng quản lý cảm xúc và xử lý xung đột."
    ];
    icon = "💡";
    color = "from-blue-400 to-cyan-500";
  } else {
    evaluation = "Chỉ số trí tuệ cảm xúc thấp";
    description = "Bạn chưa kiểm soát tốt cảm xúc cá nhân, dễ bị chi phối bởi tâm trạng trong giao tiếp và công việc.";
    suggestions = [
      "Khả năng nhận diện cảm xúc của bản thân và người khác còn hạn chế, dẫn đến phản ứng đôi lúc chưa phù hợp với hoàn cảnh.",
      "Trong các tình huống áp lực hoặc mâu thuẫn, chưa thể hiện được sự bình tĩnh và linh hoạt trong ứng xử.",
      "Cần rèn luyện thêm kỹ năng quản lý cảm xúc, lắng nghe và đồng cảm, nhằm cải thiện hiệu quả giao tiếp và xây dựng mối quan hệ tích cực hơn."
    ];
    icon = "🌱";
    color = "from-purple-400 to-pink-500";
  }

  useEffect(() => {
    // Chỉ chạy confetti nếu điểm cao
    if (score >= 161) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }

    // Đảm bảo tắt confetti nếu điểm thấp hơn ngưỡng
    setShowConfetti(false);
    return undefined;
  }, [score]);

  // Hàm xử lý gửi dữ liệu lên Google Sheet
  const handleSaveToSheet = async () => {
    if (!userName.trim()) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }

    setIsSubmitting(true);

    try {
      // Dữ liệu gửi đi: Tên, Điểm, Loại
      const dataToSend = {
        ten: userName,
        diem: score,
        loai: evaluation 
      };

      // Sử dụng mode 'no-cors' để tránh lỗi CORS từ Google Script (tuy nhiên sẽ không đọc được response chi tiết)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      // Giả lập thành công vì no-cors không trả về status 200 chuẩn
      setSaveStatus('success');
      
    } catch (error) {
      console.error("Lỗi khi lưu:", error);
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
          
          {/* Icon */}
          <motion.div className="text-8xl mb-6">{icon}</motion.div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Kết quả đánh giá EQ</h2>

          {/* Score */}
          <div className={`text-7xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
            {score}/{maxScore}
          </div>
          <p className="text-2xl text-gray-600 mb-6">Điểm EQ: {percentage}%</p>

          {/* === FORM NHẬP TÊN ĐỂ LƯU === */}
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
          {/* === KẾT THÚC FORM === */}

          {/* Evaluation Content */}
          <div className="mb-8">
            <p className={`text-3xl font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {evaluation}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed px-4 mb-6">
              {description}
            </p>
            
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

          {/* Button Restart */}
          <motion.button
            onClick={onRestart}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-lg font-bold shadow-lg mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔄 Làm lại bài test
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}