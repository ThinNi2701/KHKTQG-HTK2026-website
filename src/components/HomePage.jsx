export default function HomePage({ onStartQuiz }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="mt-8 mb-8 content-padding">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">TIÊU ĐỀ</h2>
      </div>
      <div className="mx-auto py-12 content-padding">
        {/* Quiz Info Box */}
        <div className="mb-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">TRẮC NGHIỆM TEST EQ</h2>
          
          <div className="text-left max-w-md mx-auto mb-6 space-y-2">
            <p className="text-gray-700 text-lg">
              <strong>Số câu:</strong> 40 câu
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Thời gian làm bài:</strong> 30 phút (khuyến nghị)
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Mục đích:</strong> mục đích...
            </p>
          </div>

          <button
            onClick={onStartQuiz}
            disabled={false}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Bắt đầu
          </button>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Trong thế giới hiện đại, trí tuệ cảm xúc (EQ) ngày càng được đánh giá cao, không chỉ trong công việc 
            mà còn trong các mối quan hệ cá nhân. Khác với IQ, EQ đo lường khả năng nhận biết, hiểu và quản lý 
            cảm xúc của bản thân cũng như người khác. Để đánh giá chính xác khả năng này, bài kiểm tra trí tuệ 
            cảm xúc chuẩn quốc tế đã trở thành công cụ không thể thiếu.
          </p>
        </div>

        {/* EQ Definition */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">EQ là gì?</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            EQ, hay Emotional Quotient, là chỉ số thể hiện khả năng cảm nhận, kiểm soát và biểu đạt cảm xúc 
            của một cá nhân. Theo Daniel Goleman, nhà tâm lý học nổi tiếng, EQ gồm 5 yếu tố cơ bản:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tự nhận thức (Self-Awareness):</strong> Nhận biết cảm xúc của bản thân và hiểu tác động của chúng.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tự quản lý (Self-Management):</strong> Khả năng điều tiết cảm xúc, giữ bình tĩnh và phản ứng phù hợp trong mọi tình huống.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Động lực (Motivation):</strong> Năng lực tự thúc đẩy bản thân, kiên trì hướng tới mục tiêu.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Đồng cảm (Empathy):</strong> Nhận biết và thấu hiểu cảm xúc của người khác.</span>
            </li>
          </ul>
        </div>

        {/* Why EQ is Important */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tại sao trí tuệ cảm xúc EQ lại quan trọng?</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Trí tuệ cảm xúc không chỉ là một kỹ năng "mềm" mà còn ảnh hưởng trực tiếp đến thành công trong cuộc sống và công việc:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Cải thiện mối quan hệ cá nhân:</strong> Người có EQ cao thường hiểu và đồng cảm với người khác, giúp xây dựng các mối quan hệ bền vững.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Quản lý căng thẳng và xung đột hiệu quả:</strong> EQ giúp bạn điều tiết cảm xúc, giữ bình tĩnh và ra quyết định sáng suốt.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tăng hiệu suất công việc:</strong> Nghiên cứu cho thấy nhân viên có EQ cao làm việc nhóm tốt hơn, lãnh đạo hiệu quả và dễ thích nghi với thay đổi.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Hỗ trợ phát triển bản thân:</strong> Khi hiểu rõ cảm xúc của mình, bạn có thể cải thiện hành vi, tạo động lực và đạt mục tiêu dài hạn.</span>
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Lợi ích khi làm bài kiểm tra trí tuệ cảm xúc</h2>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Hiểu rõ điểm mạnh và điểm cần cải thiện.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Cải thiện hiệu quả giao tiếp và lãnh đạo.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Tăng khả năng thích nghi với môi trường thay đổi.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Định hướng nghề nghiệp phù hợp với khả năng cảm xúc.</span>
            </li>
          </ul>
        </div>

        {/* How to Improve */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cách cải thiện trí tuệ cảm xúc</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Trí tuệ cảm xúc có thể được rèn luyện và nâng cao thông qua các phương pháp sau:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tăng khả năng tự nhận thức:</strong> Ghi nhật ký cảm xúc, tự đặt câu hỏi về phản ứng của bản thân.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Học cách tự quản lý cảm xúc:</strong> Thực hành thiền, kỹ thuật thở và quản lý căng thẳng.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Phát triển đồng cảm:</strong> Lắng nghe chủ động, đặt mình vào vị trí của người khác.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Rèn kỹ năng xã hội:</strong> Tham gia các hoạt động nhóm, học cách giao tiếp và giải quyết xung đột.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tạo động lực bản thân:</strong> Đặt mục tiêu rõ ràng, theo dõi tiến độ và khen thưởng bản thân khi đạt được.</span>
            </li>
          </ul>
        </div>

        {/* Quote */}
        <div className="mb-8 italic text-gray-700 text-lg border-l-4 border-gray-400 pl-4 py-2">
          <p className="mb-3 text-justify">
            "Cảm xúc không phải là điều cần tránh, mà là điều cần được thấu hiểu và dẫn dắt đúng cách"
          </p>
          <p className="not-italic text-sm text-justify">
            Khi biết cách lắng nghe bản thân và điều chỉnh cảm xúc phù hợp, bạn sẽ xây dựng được sự tự tin, 
            bình tĩnh và chủ động hơn trong cuộc sống.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Việc tham gia bài kiểm tra trí tuệ cảm xúc chuẩn quốc tế giúp bạn nhận diện khả năng cảm xúc, 
            phát triển kỹ năng và xây dựng các mối quan hệ bền vững.
          </p>
          <p className="text-gray-900 font-semibold mb-6 text-justify">
            Hãy bắt đầu tham gia bài kiểm tra trí tuệ cảm xúc của chúng tôi ngay để đánh giá mức độ cảm xúc của mình nhé.
          </p>
        </div>
      </div>
    </div>
  );
}
