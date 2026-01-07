import { useState } from 'react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="page-shell">
      <div className="page-container">
        <header className="page-hero">
          <div className="page-kicker">Giải đáp thắc mắc</div>
          <h1 className="page-title">10 câu hỏi thường gặp về kiểm soát cảm xúc</h1>
          <p className="page-lead">Những thắc mắc học sinh hay gặp cùng giải đáp ngắn gọn, dễ áp dụng.</p>
        </header>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(1)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 1. Điều gì khiến một người khó nhận diện cảm xúc thật sự?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(1) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(1) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(1) ? 1 : 0,
            transform: openItems.includes(1) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Sang chấn, môi trường nuôi dưỡng, căng thẳng kéo dài, yếu tố sinh học/bệnh lý.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Các yếu tố tâm lý và hành vi</div>
                  <ul className="page-list">
                    <li><strong>Sang chấn:</strong> Kìm nén cảm xúc để tự vệ, khó nhận diện về sau.</li>
                    <li><strong>Môi trường nuôi dưỡng:</strong> Bị phán xét khi bộc lộ cảm xúc khiến trẻ che giấu.</li>
                    <li><strong>Căng thẳng kéo dài:</strong> Kiệt quệ cảm xúc, giảm khả năng nhận biết.</li>
                    <li><strong>Thiếu tự tin:</strong> Khó chấp nhận cảm xúc thật, nhất là cảm xúc tiêu cực.</li>
                  </ul>
                  <div className="page-subheading">Các yếu tố sinh học và bệnh lý</div>
                  <ul className="page-list">
                    <li><strong>Rối loạn cảm xúc:</strong> Lưỡng cực, PTSD, trầm cảm ảnh hưởng trực tiếp.</li>
                    <li><strong>Mất cân bằng hoá học:</strong> Serotonin, dopamine thay đổi làm rối loạn cảm xúc.</li>
                    <li><strong>Bệnh lý mãn tính:</strong> Tiểu đường, hạ đường huyết, bệnh thần kinh.</li>
                    <li><strong>Chấn thương sọ não:</strong> Ảnh hưởng lâu dài đến kiểm soát cảm xúc.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image1.png" alt="Khó nhận diện cảm xúc" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(2)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 2. Bị cuốn vào vòng xoáy cảm xúc tiêu cực, thoát thế nào?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(2) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(2) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(2) ? 1 : 0,
            transform: openItems.includes(2) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Đừng đè nén hay bùng nổ; coi cảm xúc là tín hiệu và quay về với chính mình.</div>
              <div className="page-split">
                <div>
                  <p>
                    Cảm xúc là tín hiệu: tức giận cho thấy ranh giới bị xâm phạm; buồn nhắc nghỉ ngơi; lo lắng báo động cần chuẩn bị. Kìm nén chỉ khiến chúng lớn dần và bùng nổ.
                  </p>
                  <div className="page-subheading">Làm gì khi cảm xúc trào lên?</div>
                  <ul className="page-list">
                    <li>Mệt mỏi: vẽ bông hoa.</li>
                    <li>Lo lắng: đan len, gấp giấy.</li>
                    <li>Bực bội: vẽ nét mạnh, dứt khoát.</li>
                    <li>Hoang mang: tô màu, vẽ cầu vồng.</li>
                  </ul>
                  <p>Đừng cố "kiểm soát" mà hãy thấu hiểu: nhận biết mình đang giận/buồn nhưng không để bị cuốn đi.</p>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image2.png" alt="Vòng xoáy cảm xúc tiêu cực" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(3)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 3. Nhận ra mất kiểm soát cảm xúc và lấy lại cân bằng thế nào?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(3) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(3) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(3) ? 1 : 0,
            transform: openItems.includes(3) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Nhận tín hiệu thể chất/tâm lý, sau đó hít thở, vận động, đổi môi trường, tìm hỗ trợ.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Dấu hiệu</div>
                  <ul className="page-list">
                    <li><strong>Thể chất:</strong> Tim nhanh, thở gấp, cơ căng.</li>
                    <li><strong>Tâm lý:</strong> Suy nghĩ tiêu cực lặp lại, tức giận, bất lực, khó tập trung.</li>
                  </ul>
                  <div className="page-subheading">Cách lấy lại cân bằng</div>
                  <ul className="page-list">
                    <li><strong>Hít thở:</strong> Hít sâu, thở chậm; đếm 1-10.</li>
                    <li><strong>Vận động:</strong> Đi dạo, yoga, nhảy dây, chạy nhẹ.</li>
                    <li><strong>Chánh niệm/nhật ký:</strong> Thiền ngắn, viết lại cảm xúc.</li>
                    <li><strong>Tìm hỗ trợ:</strong> Chia sẻ với người tin cậy; gặp chuyên gia nếu kéo dài.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image3.png" alt="Nhận ra mất kiểm soát cảm xúc" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(4)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 4. Rèn luyện lắng nghe và thấu hiểu cảm xúc người khác?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(4) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(4) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(4) ? 1 : 0,
            transform: openItems.includes(4) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Tập trung, không phán xét, đặt mình vào vị trí họ, hỏi mở và phản hồi.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Tập trung hoàn toàn</div>
                  <ul className="page-list">
                    <li>Gạt phiền nhiễu, giữ giao tiếp mắt tự nhiên.</li>
                  </ul>
                  <div className="page-subheading">Lắng nghe không phán xét</div>
                  <ul className="page-list">
                    <li>Nhìn dưới góc của họ; không áp đặt; kiên nhẫn chờ họ nói hết.</li>
                  </ul>
                  <div className="page-subheading">Tương tác và thấu hiểu</div>
                  <ul className="page-list">
                    <li>Hỏi mở, nhắc lại ý để chắc hiểu đúng.</li>
                    <li>Đọc ngôn ngữ cơ thể; thể hiện đồng cảm.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image4.png" alt="Lắng nghe và thấu hiểu cảm xúc" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(5)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 5. Vì sao bày tỏ cảm xúc không dễ?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(5) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(5) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(5) ? 1 : 0,
            transform: openItems.includes(5) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Khó vì áp lực văn hoá, sợ bị đánh giá, thiếu kỹ năng, trải nghiệm xấu; nhưng bày tỏ giúp nhẹ nhõm, kết nối, phát triển.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Vì sao khó</div>
                  <ul className="page-list">
                    <li>Áp lực xã hội/văn hoá; sợ bị đánh giá.</li>
                    <li>Thiếu kỹ năng; trải nghiệm tiêu cực; cảm xúc phức tạp.</li>
                  </ul>
                  <div className="page-subheading">Vì sao quan trọng</div>
                  <ul className="page-list">
                    <li>Giải toả, khỏe mạnh tinh thần; tạo kết nối; hiểu rõ bản thân.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image5.png" alt="Vì sao bày tỏ cảm xúc không dễ" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(6)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 6. Kiểm soát cảm xúc bùng nổ khi gặp tình huống bất ngờ?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(6) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(6) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(6) ? 1 : 0,
            transform: openItems.includes(6) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Tạm dừng, hít thở, đổi môi trường; chuyển hướng suy nghĩ; giải toả lành mạnh.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Phản ứng tức thời</div>
                  <ul className="page-list">
                    <li>Hít sâu, đếm ngược; rời tình huống ngắn hạn.</li>
                  </ul>
                  <div className="page-subheading">Thay đổi suy nghĩ</div>
                  <ul className="page-list">
                    <li>Nhìn đa góc độ; tìm điểm sáng; thực hành chánh niệm.</li>
                  </ul>
                  <div className="page-subheading">Giải toả và phòng ngừa</div>
                  <ul className="page-list">
                    <li>Vận động; chia sẻ với người tin cậy; duy trì thói quen lành mạnh.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image6.png" alt="Kiểm soát cảm xúc bùng nổ khi gặp tình huống bất ngờ" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(7)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 7. Hiểu cảm xúc ảnh hưởng thành công thế nào?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(7) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(7) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(7) ? 1 : 0,
            transform: openItems.includes(7) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Hiểu cảm xúc giúp tự quản, bình tĩnh trước thách thức, tăng động lực đạt mục tiêu.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Cuộc sống cá nhân</div>
                  <ul className="page-list">
                    <li>Cải thiện sức khỏe tinh thần; quyết định phù hợp giá trị; xây quan hệ lành mạnh; tự tin; định hướng sống.</li>
                  </ul>
                  <div className="page-subheading">Sự nghiệp</div>
                  <ul className="page-list">
                    <li>Nâng hiệu suất; giải quyết xung đột; tư duy phát triển; lãnh đạo tích cực.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image7.png" alt="Hiểu cảm xúc ảnh hưởng thành công thế nào" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(8)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 8. Duy trì lạc quan và năng lượng tích cực?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(8) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(8) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(8) ? 1 : 0,
            transform: openItems.includes(8) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Chăm sóc thân-tâm, biết ơn, tập trung điều kiểm soát, xem thử thách là cơ hội.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Chăm sóc bản thân & tinh thần</div>
                  <ul className="page-list">
                    <li>Ăn-ngủ-tập luyện đủ; chánh niệm; nuôi dưỡng lòng biết ơn.</li>
                  </ul>
                  <div className="page-subheading">Điều chỉnh tư duy</div>
                  <ul className="page-list">
                    <li>Tập trung giải pháp; coi thất bại là bài học; thay suy nghĩ tiêu cực; tìm sự hài hước.</li>
                  </ul>
                  <div className="page-subheading">Mối quan hệ tích cực</div>
                  <ul className="page-list">
                    <li>Kết giao người lạc quan; chia sẻ và lắng nghe; lan toả tích cực.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image8.png" alt="Duy trì lạc quan và năng lượng tích cực" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(9)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 9. Bài học quan trọng nhất về cảm xúc của bản thân?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(9) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(9) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(9) ? 1 : 0,
            transform: openItems.includes(9) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Chấp nhận và tôn vinh thử thách; hạnh phúc đến từ sống thật và theo đuổi ước mơ.</div>
              <div className="page-split">
                <div>
                  <div className="page-subheading">Chấp nhận và học hỏi</div>
                  <ul className="page-list">
                    <li>Thử thách là động lực; cuộc sống cần "cuộc đua" để hiểu mình.</li>
                  </ul>
                  <div className="page-subheading">Tìm kiếm hạnh phúc</div>
                  <ul className="page-list">
                    <li>Sống thật; có dũng khí theo đuổi đam mê.</li>
                  </ul>
                  <div className="page-subheading">Phát triển bản thân</div>
                  <ul className="page-list">
                    <li>Tự tin, trân trọng bản thân; lắng nghe người khác; trân trọng khoảnh khắc.</li>
                  </ul>
                </div>
                <div className="page-media" style={{ margin: 0 }}>
                  <img src="/image/GiaiDapThacMac/image9.png" alt="Bài học quan trọng nhất về cảm xúc của bản thân" className="page-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" style={{ cursor: 'pointer' }} onClick={() => toggleItem(10)}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="page-heading">Câu 10. Một kỷ niệm cảm xúc thay đổi phản ứng của bạn?</div>
            <div style={{ 
              marginLeft: '1rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2B92E4',
              transform: openItems.includes(10) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>
              ▼
            </div>
          </div>
          <div style={{
            maxHeight: openItems.includes(10) ? '1000px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-in-out',
            opacity: openItems.includes(10) ? 1 : 0,
            transform: openItems.includes(10) ? 'translateY(0)' : 'translateY(-10px)',
          }}>
            <div style={{ paddingTop: '1rem' }}>
              <div className="page-callout" style={{ marginTop: 0 }}>Ví dụ: Từ tức giận vì bị phê bình đến coi đó là cơ hội cải thiện.</div>
              <div className="page-subheading">Kỷ niệm</div>
              <p>
                Bạn thuyết trình và nhận phản hồi tiêu cực; ban đầu tức giận, bị tổn thương. Sau khi bình tĩnh đọc lại, bạn thấy góp ý hữu ích và chuyển sang chủ động cải thiện.
              </p>
              <div className="page-subheading">Bài học rút ra</div>
              <div className="page-callout" style={{ borderLeftColor: "#10b981" }}>
                Cảm xúc ban đầu không quyết định phản ứng cuối. Tạm dừng, nhìn khách quan, tìm cơ hội cải thiện sẽ biến tình huống tiêu cực thành bài học giá trị.
              </div>
            </div>
          </div>
        </section>

        <div className="page-section" style={{ background: "#EFF2F8", borderColor: "#F8D0D2" }}>
          <div className="page-heading">Lời kết</div>
          <p className="page-callout" style={{ marginTop: 0, borderLeftColor: "#7c3aed" }}>
            Kiểm soát cảm xúc là hành trình. Hãy kiên nhẫn, học từ trải nghiệm và tiếp tục luyện tập mỗi ngày để hiểu mình rõ hơn và sống lành mạnh hơn.
          </p>
        </div>
      </div>
    </div>
  );
}
