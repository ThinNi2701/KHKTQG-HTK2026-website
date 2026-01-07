export default function FamilyConflictPage() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <header className="page-hero">
          <p className="page-kicker">Mâu thuẫn gia đình</p>
          <h1 className="page-title">Học sinh nên làm gì khi mâu thuẫn với gia đình?</h1>
          <p className="page-lead">
            Hiểu nguyên nhân, nhận diện áp lực và tìm cách trao đổi tôn trọng giúp thu hẹp khoảng cách giữa các thế hệ, giữ không khí gia đình ấm áp hơn.
          </p>
        </header>

        <section className="page-section">
          <h2 className="page-heading">Mâu thuẫn là gì?</h2>
          <p>
            Mâu thuẫn là sự đối lập quan điểm, giá trị hoặc cách sống giữa các thành viên. Trong gia đình, khác biệt thế hệ và trải nghiệm dễ dẫn tới tranh cãi, căng thẳng và mất kết nối nếu thiếu lắng nghe và tôn trọng.
          </p>
          <p>
            Nhận diện sớm nguồn gốc xung đột giúp gia đình chọn cách trao đổi phù hợp, tránh leo thang cảm xúc và bảo vệ mối quan hệ.
          </p>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Nguyên nhân khiến cha mẹ và con cái mâu thuẫn</h2>
          <p> Có nhiều lý do đẩy căng thẳng gia đình lên cao. Dưới đây là 5 nguyên nhân thường gặp:</p>

          <div className="reason-grid">
            <div className="reason-card">
              <h3>Sự khác biệt thế hệ và quan niệm sống</h3>
              <p>
                Cha mẹ lớn lên trong bối cảnh truyền thống, coi trọng kỷ luật; con tiếp xúc công nghệ, tư duy mở, đề cao tự do. Khác biệt này dễ tạo cảm giác “không được hiểu” ở cả hai phía.
              </p>
              <img src="/image/MauThuanGiaDinh/image1.png" alt="Sự khác biệt thế hệ" className="reason-img" />
            </div>

            <div className="reason-card">
              <h3>Áp đặt kỳ vọng và áp lực</h3>
              <p>
                Kỳ vọng “an toàn, ổn định” đôi khi thành áp lực. Khi đam mê của con không được lắng nghe, con dễ thấy gò bó và tổn thương tự tin.
              </p>
              <img src="/image/MauThuanGiaDinh/image2.png" alt="Áp lực kỳ vọng" className="reason-img" />
            </div>

            <div className="reason-card">
              <h3>Thiếu giao tiếp và hiểu biết lẫn nhau</h3>
              <p>
                Không lắng nghe dẫn đến hiểu sai, phán xét. Con nghĩ cha mẹ “không hiểu”, cha mẹ nghĩ con “chống đối”, làm khoảng cách lớn dần.
              </p>
              <img src="/image/MauThuanGiaDinh/image3.png" alt="Thiếu giao tiếp" className="reason-img" />
            </div>

            <div className="reason-card">
              <h3>Kiểm soát quá mức</h3>
              <p>
                Tuổi vị thành niên cần tự do. Kiểm soát chặt khiến con cảm thấy bị nghi ngờ, dễ phản ứng mạnh và ảnh hưởng sức khỏe tinh thần.
              </p>
              <img src="/image/MauThuanGiaDinh/image4.png" alt="Kiểm soát quá mức" className="reason-img" />
            </div>

            <div className="reason-card">
              <h3>So sánh con với người khác</h3>
              <p>
                So sánh liên tục làm con thấy “không đủ tốt”, giảm tự tin và xa cách với cha mẹ.
              </p>
              <img src="/image/MauThuanGiaDinh/image5.png" alt="So sánh con cái" className="reason-img" />
            </div>
          </div>

          <div className="page-callout">
            Cốt lõi: thiếu lắng nghe và tôn trọng khác biệt khiến mâu thuẫn leo thang. Giao tiếp mở và thấu hiểu là chìa khóa.
          </div>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Học sinh cần làm gì khi mâu thuẫn cha mẹ</h2>
          <p>
            Giữ bình tĩnh, lắng nghe, trao đổi tôn trọng và chịu trách nhiệm giúp giảm căng thẳng và tìm điểm chung.
          </p>

          <h3 className="page-subheading">1) Giữ bình tĩnh và quản lý cảm xúc</h3>
          <ul className="page-list">
            <li><strong>Học cách im lặng:</strong> Tạm dừng khi căng thẳng để tránh lời nói nóng.</li>
            <li><strong>Kiểm soát cơn giận:</strong> Tránh để cảm xúc dẫn dắt quyết định.</li>
          </ul>

          <h3 className="page-subheading">2) Lắng nghe và thấu hiểu</h3>
          <ul className="page-list">
            <li><strong>Lắng nghe quan điểm:</strong> Hiểu lý do và lo lắng của cha mẹ trước khi phản hồi.</li>
            <li><strong>Đặt mình vào vị trí họ:</strong> Nhìn vấn đề từ góc nhìn cha mẹ để hiểu gốc rễ bất đồng.</li>
            <li><strong>Biết ơn:</strong> Dù không đồng ý, vẫn ghi nhận sự quan tâm.</li>
          </ul>

          <h3 className="page-subheading">3) Trao đổi và tìm giải pháp</h3>
          <ul className="page-list">
            <li><strong>Trò chuyện thẳng thắn:</strong> Chọn thời điểm yên tĩnh, nói rõ ràng và tôn trọng.</li>
            <li><strong>Tìm mục tiêu chung:</strong> Hạnh phúc và an toàn của gia đình làm điểm tựa.</li>
            <li><strong>Đề xuất giải pháp:</strong> Cùng đưa phương án dung hòa thay vì chỉ phàn nàn.</li>
          </ul>

          <h3 className="page-subheading">4) Rèn luyện bản lĩnh cá nhân</h3>
          <ul className="page-list">
            <li><strong>Không lệ thuộc hoàn toàn:</strong> Xem lời khuyên là tham khảo nhưng vẫn tự suy nghĩ.</li>
            <li><strong>Chịu trách nhiệm:</strong> Nhận trách nhiệm với lựa chọn của mình là dấu hiệu trưởng thành.</li>
          </ul>
        </section>

        <section className="page-section">
          <h2 className="page-heading">Kết luận</h2>
          <p>
            Mỗi thành viên đều góp phần giữ hòa khí: cha mẹ mở lòng, con cái tôn trọng giá trị gia đình. Giao tiếp cởi mở và lắng nghe chân thành là chìa khóa giảm mâu thuẫn và giữ kết nối bền vững.
          </p>
        </section>

        <section className="page-media">
          <img src="/image/MauThuanGiaDinh/image6.png" alt="Gia đình hòa hợp" className="page-img" />
        </section>
      </div>
    </div>
  );
}
