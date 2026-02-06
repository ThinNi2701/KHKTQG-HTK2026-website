export default function HomePage({ onStartQuiz }) {
  return (
    <div className="home-shell">
      <div className="home-container">
        <header className="home-header">
          <h2 className="home-title font-bold text-gray-900">BÀI KIỂM TRA TRÍ TUỆ CẢM XÚC</h2>
        </header>

        

        <section className="home-quiz-card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">TRẮC NGHIỆM TEST EQ</h2>

          <div className="home-quiz-meta text-gray-800 text-base md:text-lg text-center">
            <div><strong>Số câu:</strong> 40 câu</div>
            <div><strong>Thời gian làm bài:</strong> 30 phút (khuyến nghị)</div>
            <div><strong>Chú ý:</strong> Khi bạn làm kiểm tra xong hãy nhập tên để lưu lại kết quả</div>
          </div>

          <button
            onClick={onStartQuiz}
            className="home-quiz-button"
            style={{ margin: "0 auto", display: "block" }}
          >
            Bắt đầu
          </button>
        </section>

        <div className="home-body">
          <section className="home-section">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Khám phá bộ thẻ EQ Card</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Bộ thẻ EQ Card giúp bạn hiểu và thực hành nhận diện cảm xúc hằng ngày.
            </p>
            <a
              href="https://trinh311006-cyber.github.io/eqcard/"
              className="home-quiz-button"
              style={{ display: "inline-block", marginTop: 12, textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Truy cập bộ thẻ EQ Card
            </a>
          </section>

          <section className="home-section">
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Trong thế giới hiện đại, trí tuệ cảm xúc (EQ) ngày càng được đánh giá cao, không chỉ trong công việc
              mà còn trong các mối quan hệ cá nhân. Khác với IQ, EQ đo lường khả năng nhận biết, hiểu và quản lý
              cảm xúc của bản thân cũng như người khác. Để đánh giá chính xác khả năng này, bài kiểm tra trí tuệ
              cảm xúc chuẩn quốc tế đã trở thành công cụ không thể thiếu.
            </p>
          </section>

          <section className="home-section">
            <h2 className="text-2xl font-bold text-gray-900">EQ là gì?</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              EQ, hay Emotional Quotient, là chỉ số thể hiện khả năng cảm nhận, kiểm soát và biểu đạt cảm xúc
              của một cá nhân. Theo Daniel Goleman, nhà tâm lý học nổi tiếng, EQ gồm 5 yếu tố cơ bản:
            </p>
            <ul className="home-list text-gray-700 text-lg">
              <li><strong>Tự nhận thức (Self-Awareness):</strong> Nhận biết cảm xúc của bản thân và hiểu tác động của chúng.</li>
              <li><strong>Tự quản lý (Self-Management):</strong> Khả năng điều tiết cảm xúc, giữ bình tĩnh và phản ứng phù hợp trong mọi tình huống.</li>
              <li><strong>Động lực (Motivation):</strong> Năng lực tự thúc đẩy bản thân, kiên trì hướng tới mục tiêu.</li>
              <li><strong>Đồng cảm (Empathy):</strong> Nhận biết và thấu hiểu cảm xúc của người khác.</li>
            </ul>
          </section>

          <section className="home-section">
            <h2 className="text-2xl font-bold text-gray-900">Tại sao trí tuệ cảm xúc EQ lại quan trọng?</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Trí tuệ cảm xúc không chỉ là một kỹ năng "mềm" mà còn ảnh hưởng trực tiếp đến thành công trong cuộc sống và công việc:
            </p>
            <ul className="home-list text-gray-700 text-lg">
              <li><strong>Cải thiện mối quan hệ cá nhân:</strong> Người có EQ cao thường hiểu và đồng cảm với người khác, giúp xây dựng các mối quan hệ bền vững.</li>
              <li><strong>Quản lý căng thẳng và xung đột hiệu quả:</strong> EQ giúp bạn điều tiết cảm xúc, giữ bình tĩnh và ra quyết định sáng suốt.</li>
              <li><strong>Tăng hiệu suất công việc:</strong> Nghiên cứu cho thấy nhân viên có EQ cao làm việc nhóm tốt hơn, lãnh đạo hiệu quả và dễ thích nghi với thay đổi.</li>
              <li><strong>Hỗ trợ phát triển bản thân:</strong> Khi hiểu rõ cảm xúc của mình, bạn có thể cải thiện hành vi, tạo động lực và đạt mục tiêu dài hạn.</li>
            </ul>
          </section>

          <section className="home-section">
            <h2 className="text-2xl font-bold text-gray-900">Lợi ích khi làm bài kiểm tra trí tuệ cảm xúc</h2>
            <ul className="home-list text-gray-700 text-lg">
              <li>Hiểu rõ điểm mạnh và điểm cần cải thiện.</li>
              <li>Cải thiện hiệu quả giao tiếp và lãnh đạo.</li>
              <li>Tăng khả năng thích nghi với môi trường thay đổi.</li>
              <li>Định hướng nghề nghiệp phù hợp với khả năng cảm xúc.</li>
            </ul>
          </section>

          <section className="home-section">
            <h2 className="text-2xl font-bold text-gray-900">Cách cải thiện trí tuệ cảm xúc</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Trí tuệ cảm xúc có thể được rèn luyện và nâng cao thông qua các phương pháp sau:
            </p>
            <ul className="home-list text-gray-700 text-lg">
              <li><strong>Tăng khả năng tự nhận thức:</strong> Ghi nhật ký cảm xúc, tự đặt câu hỏi về phản ứng của bản thân.</li>
              <li><strong>Học cách tự quản lý cảm xúc:</strong> Thực hành thiền, kỹ thuật thở và quản lý căng thẳng.</li>
              <li><strong>Phát triển đồng cảm:</strong> Lắng nghe chủ động, đặt mình vào vị trí của người khác.</li>
              <li><strong>Rèn kỹ năng xã hội:</strong> Tham gia các hoạt động nhóm, học cách giao tiếp và giải quyết xung đột.</li>
              <li><strong>Tạo động lực bản thân:</strong> Đặt mục tiêu rõ ràng, theo dõi tiến độ và khen thưởng bản thân khi đạt được.</li>
            </ul>
          </section>

          <section className="home-section">
            <div className="home-quote italic text-gray-700 text-lg">
              <p className="mb-3 text-justify">
                "Cảm xúc không phải là điều cần tránh, mà là điều cần được thấu hiểu và dẫn dắt đúng cách"
              </p>
              <p className="not-italic text-sm text-justify">
                Khi biết cách lắng nghe bản thân và điều chỉnh cảm xúc phù hợp, bạn sẽ xây dựng được sự tự tin,
                bình tĩnh và chủ động hơn trong cuộc sống.
              </p>
            </div>
          </section>

          <section className="home-section">
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Việc tham gia bài kiểm tra trí tuệ cảm xúc chuẩn quốc tế giúp bạn nhận diện khả năng cảm xúc,
              phát triển kỹ năng và xây dựng các mối quan hệ bền vững.
            </p>
            <p className="text-gray-900 font-semibold text-justify">
              Hãy bắt đầu tham gia bài kiểm tra trí tuệ cảm xúc của chúng tôi ngay để đánh giá mức độ cảm xúc của mình nhé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
