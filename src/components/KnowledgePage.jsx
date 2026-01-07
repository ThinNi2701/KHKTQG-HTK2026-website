export default function KnowledgePage() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <header className="page-hero">
          <p className="page-kicker">HIỂU BIẾT CHUNG</p>
          <h1 className="page-title">Trí tuệ cảm xúc – nền tảng giúp bạn sống chủ động và kết nối hơn</h1>
          <p className="page-lead">
            Tổng hợp nghiên cứu, cách rèn luyện và các dấu hiệu EQ cao để bạn hiểu, kiểm soát và nâng cấp cảm xúc của mình mỗi ngày.
          </p>
        </header>

        <section className="page-section">
          <h2 className="page-heading">Những nghiên cứu và luận điểm về học thuyết EQ</h2>
          <p>
            Trong số những nghiên cứu về trí tuệ cảm xúc, có ba nghiên cứu nhận được nhiều sự chú ý (Sarkis, 2011):
          </p>
          <ul className="page-list">
            <li>
              <strong>Năm 2010</strong>, Lynda Jiwen Song và cộng sự chỉ ra rằng IQ dự báo tốt thành tựu học tập, nhưng EQ góp phần đáng kể và quan trọng hơn trong chất lượng tương tác xã hội của sinh viên.
            </li>
            <li>
              <strong>Năm 2009</strong>, Kimmy S. Kee, Peter Salovey và cộng sự cho thấy người mắc tâm thần phân liệt có EQ thấp hơn đáng kể, kém hơn ở các bài kiểm tra xác định, thấu hiểu và quản lý cảm xúc.
            </li>
            <li>
              <strong>Năm 2009</strong>, Delphine Nelis và cộng sự chứng minh EQ có thể tăng sau huấn luyện ngắn (4 buổi, mỗi buổi 2.5 giờ), trong khi nhóm không huấn luyện hầu như không đổi.
            </li>
          </ul>
          <div className="page-callout">
            Ba nghiên cứu cho thấy EQ là yếu tố quan trọng cho thành công, quan hệ, sức khỏe tinh thần và hoàn toàn có thể rèn luyện.
          </div>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Những cách để cải thiện trí tuệ cảm xúc</h2>
          <p>
            Không giống IQ, EQ có thể rèn luyện được (tính khả biến thần kinh). Bạn có thể bắt đầu bằng những thói quen nhỏ:
          </p>
          <ul className="page-list">
            <li>Rèn luyện sự tập trung để tâm trí ổn định và sáng suốt</li>
            <li>Thiền chánh niệm (Mindfulness meditation)</li>
            <li>Phát huy kỹ năng lắng nghe người khác</li>
            <li>Duy trì năng lượng và thái độ sống tích cực</li>
            <li>Rèn luyện khả năng tự nhận thức</li>
            <li>Tiếp nhận phê bình có chọn lọc</li>
            <li>Phát huy kỹ năng lãnh đạo</li>
            <li>Kiểm soát cảm xúc tiêu cực</li>
            <li>Bổ sung, cải thiện vốn từ vựng giao tiếp</li>
            <li>Đặt mình vào vị trí người khác trong giao tiếp</li>
          </ul>
        </section>

        <section className="page-section">
          <h2 className="page-heading">15 dấu hiệu của người có EQ cao</h2>
          <div className="page-grid">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((num) => null)}
            <div className="page-subsection">
              <h3>1. Bạn nghiền ngẫm về cảm xúc</h3>
              <p>Nhận thức bản thân bắt đầu bằng việc soi chiếu: điểm mạnh/yếu cảm xúc của tôi là gì?</p>
            </div>
            <div className="page-subsection">
              <h3>2. Bạn biết khi nào nên tạm dừng</h3>
              <p>Tạm dừng giúp tránh quyết định nóng vội và lời nói khiến bạn hối tiếc.</p>
            </div>
            <div className="page-subsection">
              <h3>3. Bạn kiểm soát suy nghĩ</h3>
              <p>Không kiểm soát được cảm xúc tức thời, nhưng kiểm soát được phản ứng bằng cách điều hướng suy nghĩ.</p>
            </div>
            <div className="page-subsection">
              <h3>4. Bạn hưởng lợi từ phê bình</h3>
              <p>Phản hồi tiêu cực là cơ hội học hỏi, kể cả khi cách truyền đạt chưa tối ưu.</p>
            </div>
            <div className="page-subsection">
              <h3>5. Bạn giữ tính xác thực</h3>
              <p>Nói và làm theo giá trị cốt lõi, không phải chia sẻ mọi thứ mọi lúc.</p>
            </div>
            <div className="page-subsection">
              <h3>6. Bạn đồng cảm</h3>
              <p>Hiểu suy nghĩ, cảm xúc của người khác thay vì phán xét, đặt mình vào vị trí họ.</p>
            </div>
            <div className="page-subsection">
              <h3>7. Bạn khen ngợi</h3>
              <p>Công nhận đúng lúc tạo dựng niềm tin và kết nối.</p>
            </div>
            <div className="page-subsection">
              <h3>8. Bạn phản hồi hữu ích</h3>
              <p>Chuyển lời chỉ trích thành góp ý xây dựng để người nhận thấy hữu ích thay vì tổn thương.</p>
            </div>
            <div className="page-subsection">
              <h3>9. Bạn nói lời xin lỗi</h3>
              <p>Sự khiêm tốn và can đảm giúp chữa lành và giữ uy tín cá nhân.</p>
            </div>
            <div className="page-subsection">
              <h3>10. Bạn tha thứ</h3>
              <p>Buông oán hận để cho mình cơ hội chữa lành.</p>
            </div>
            <div className="page-subsection">
              <h3>11. Bạn giữ cam kết</h3>
              <p>Thói quen giữ lời ở việc nhỏ và lớn tạo uy tín và độ tin cậy.</p>
            </div>
            <div className="page-subsection">
              <h3>12. Bạn giúp đỡ</h3>
              <p>Sẵn sàng lắng nghe, hỗ trợ, hoãn lịch để đồng hành – xây dựng niềm tin.</p>
            </div>
            <div className="page-subsection">
              <h3>13. Bạn tự bảo vệ cảm xúc</h3>
              <p>Nhận ra mặt tối của EQ (bị thao túng) và rèn luyện để không bị lợi dụng.</p>
            </div>
            <div className="page-subsection">
              <h3>14. Bạn biết điểm mạnh/yếu</h3>
              <p>Thành thật với chính mình: giỏi gì, cần cải thiện gì.</p>
            </div>
            <div className="page-subsection">
              <h3>15. Bạn tự động viên</h3>
              <p>Tự khởi động, kiên trì theo đuổi mục tiêu dù thiếu lời khen.</p>
            </div>
          </div>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Tại sao EQ quan trọng?</h2>
          <p>
            Người thông minh nhất chưa chắc thành công nhất nếu thiếu kỹ năng xã hội. EQ ảnh hưởng mạnh đến học tập, công việc và quan hệ.
          </p>
          <p className="page-strong">EQ tác động đến:</p>
          <ul className="page-list">
            <li><strong>Hiệu suất học tập/công việc:</strong> Điều hướng xã hội, lãnh đạo, thúc đẩy người khác.</li>
            <li><strong>Sức khỏe thể chất:</strong> Căng thẳng không kiểm soát làm tăng huyết áp, suy giảm miễn dịch.</li>
            <li><strong>Sức khỏe tinh thần:</strong> Cảm xúc bị kẹt dễ dẫn tới lo âu, trầm cảm.</li>
            <li><strong>Mối quan hệ:</strong> Hiểu và thể hiện cảm xúc rõ ràng giúp kết nối tốt hơn.</li>
            <li><strong>Trí thông minh xã hội:</strong> Kết nối với người khác và thế giới xung quanh.</li>
          </ul>
        </section>

        <section className="page-media">
          <img src="/image/hinh2cuatranghieubietchung.png" alt="Trí tuệ cảm xúc" className="page-img" />
        </section>

        <section className="page-section">
          <h2 className="page-heading">Kiểm soát cảm xúc</h2>
          <p>
            Kiểm soát cảm xúc không phải đè nén mà là hiểu – điều chỉnh – thể hiện phù hợp. Đặc biệt quan trọng với học sinh THPT:
          </p>
          <ul className="page-list">
            <li><strong>Học tập hiệu quả:</strong> Cảm xúc ổn định giúp não tập trung.</li>
            <li><strong>Giảm bộc phát:</strong> Phản ứng bình tĩnh, tránh lời nói/hành động vội vàng.</li>
            <li><strong>Cải thiện quan hệ:</strong> Chia sẻ, lắng nghe, giải quyết mâu thuẫn văn minh.</li>
            <li><strong>Giảm stress:</strong> Nhận diện sớm để chọn cách xử lý phù hợp.</li>
            <li><strong>Tự tin và bền bỉ:</strong> Làm chủ bản thân, biết mình cần gì.</li>
            <li><strong>Chuẩn bị tương lai:</strong> Giao tiếp tốt, chịu áp lực, dễ thích nghi.</li>
          </ul>
        </section>

        <section className="page-section">
          <h3 className="page-subheading">Quy trình thực hiện kỹ năng kiểm soát cảm xúc</h3>
          <ul className="page-list">
            <li><strong>Hiểu chính mình:</strong> Nhận diện cảm xúc để ra quyết định đúng.</li>
            <li><strong>Làm chủ cảm xúc:</strong> Chế ngự cảm xúc tiêu cực để giữ cân bằng.</li>
            <li><strong>Chuyển hóa cảm xúc:</strong> Hướng dẫn cảm xúc phục vụ mục tiêu.</li>
            <li><strong>Đồng cảm với người khác:</strong> Nền tảng của quan hệ tích cực.</li>
          </ul>
        </section>

        <section className="page-media">
          <img src="/image/BaiHocVeKyNangKiemSoatCamXuc.png" alt="Kỹ năng kiểm soát cảm xúc" className="page-img" />
        </section>

        <section className="page-section">
          <h3 className="page-subheading">Học sinh THPT với kỹ năng kiểm soát cảm xúc</h3>
          <p>Tổng hợp 5 phương pháp thực hành:</p>
          <ul className="page-list">
            <li><strong>Tách cảm xúc khỏi hành động:</strong> Không hành động khi đang quá xúc động.</li>
            <li><strong>Giữ bình tĩnh:</strong> Bình tĩnh để xử lý áp lực đúng hướng.</li>
            <li><strong>Tránh bốc đồng:</strong> Dừng lại, suy nghĩ trước khi phản ứng.</li>
            <li><strong>Viết ra cảm xúc:</strong> Ghi lại để giải tỏa và nhìn rõ vấn đề.</li>
            <li><strong>Giữ tinh thần lạc quan:</strong> Bảo vệ bản thân khỏi tiêu cực kéo dài.</li>
          </ul>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Kết luận</h2>
          <p>
            Kiểm soát cảm xúc là nền tảng để học sinh phát triển trí tuệ, nhân cách và quan hệ xã hội. Làm chủ cảm xúc giúp tránh quyết định sai, xử lý xung đột văn minh và xây dựng tinh thần tích cực, tạo tiền đề cho cuộc sống lành mạnh, hạnh phúc.
          </p>
        </section>
      </div>
    </div>
  );
}
