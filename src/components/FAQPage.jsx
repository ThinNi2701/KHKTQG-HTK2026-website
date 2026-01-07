export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mt-8 mb-8 content-padding">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP VỀ KIỂM SOÁT CẢM XÚC</h2>
        <p className="text-center text-gray-600 text-lg italic">(10 câu hỏi về cảm xúc mà học sinh hay thắc mắc nhất về kiểm soát cảm xúc)</p>
      </div>

      <div className="mx-auto py-12 content-padding">
        {/* Question 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 1. Điều gì khiến một người khó nhận diện được cảm xúc thật sự của mình?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Một người khó nhận diện cảm xúc thật sự của mình có thể do các yếu tố như sang chấn tâm lý, môi trường nuôi dưỡng trong quá khứ, và các vấn đề sinh học hoặc bệnh lý. Các tình trạng như căng thẳng kéo dài, rối loạn cảm xúc, hoặc do sự thay đổi hormone và hóa chất trong não cũng là những nguyên nhân phổ biến.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Các yếu tố tâm lý và hành vi</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Sang chấn tâm lý:</strong> Trải nghiệm tổn thương, đặc biệt là thời thơ ấu, có thể khiến một người kìm nén cảm xúc để tự bảo vệ bản thân, gây khó khăn trong việc nhận diện chúng sau này.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Môi trường nuôi dưỡng:</strong> Lớn lên trong một gia đình không khuyến khích hoặc phán xét các biểu hiện cảm xúc có thể khiến trẻ học cách che giấu cảm xúc của mình.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Căng thẳng kéo dài:</strong> Áp lực công việc, tài chính, hoặc các vấn đề xã hội có thể dẫn đến kiệt quệ cảm xúc và làm giảm khả năng nhận biết cảm xúc.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thiếu tự tin:</strong> Cảm giác thất vọng về bản thân có thể khiến một người khó kết nối và chấp nhận cảm xúc thật, đặc biệt là cảm xúc tiêu cực.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Các yếu tố sinh học và bệnh lý</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Rối loạn cảm xúc:</strong> Một số rối loạn như rối loạn lưỡng cực, rối loạn căng thẳng sau chấn thương (PTSD), hoặc trầm cảm có thể ảnh hưởng trực tiếp đến cách một người trải nghiệm và nhận diện cảm xúc.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Mất cân bằng hóa học trong não:</strong> Sự mất cân bằng của các chất dẫn truyền thần kinh như serotonin và dopamine có thể gây ra các rối loạn cảm xúc.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Bệnh lý mãn tính:</strong> Các bệnh như tiểu đường, hạ đường huyết, hoặc các bệnh thần kinh có thể ảnh hưởng đến cảm xúc.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Chấn thương sọ não:</strong> Các tổn thương này có thể gây ảnh hưởng lâu dài đến khả năng kiểm soát cảm xúc.</li>
          </ul>
        </div>

        {/* Question 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 2. Có khi nào bạn cảm thấy mình bị cuốn vào một vòng xoáy cảm xúc tiêu cực? Làm sao để thoát khỏi nó?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold mb-2">Giải đáp: BÍ QUYẾT "KIỂM SOÁT" CẢM XÚC TIÊU CỰC</p>
          </div>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Chúng ta hay nói về việc "kiểm soát cảm xúc" như thể đó là một cuộc chiến. Hầu hết mọi người khi gặp cảm xúc tiêu cực đều làm một trong hai việc: hoặc cố đè nén nó xuống, giả vờ như nó không tồn tại, hoặc để nó bùng nổ và phá huỷ mọi thứ. Cả hai cách đều không giải quyết được gì.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            <strong>Vì sao?</strong> Vì cảm xúc vốn không phải kẻ thù, nó là tín hiệu. Tức giận có thể là dấu hiệu bạn đang bị xâm phạm giới hạn. Buồn bã có thể là lời nhắc nhở bạn cần nghỉ ngơi, cần chữa lành. Lo lắng là cách tâm trí báo động để bạn chuẩn bị... Nhưng thay vì lắng nghe, ta lại bỏ qua hoặc chống cự. Và kết quả là gì? Nó không biến mất, mà âm thầm lớn lên.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Các bạn có để ý rằng ngay từ nhỏ, chúng ta hay được dạy phải "kiềm chế" cảm xúc: "Đừng tức giận, đừng buồn, đừng khóc…". Kể cả khi một đứa trẻ khóc, điều đa số cha mẹ làm là lớn tiếng nạt nó: "Nín!". Nhưng sự thật là: cảm xúc đó không biến mất. Thậm chí càng cố kìm chế, nó càng nén chặt. Đến một lúc nào đó, mọi thứ vượt khỏi tầm kiểm soát và bùng nổ gây ra những hệ quả không ngờ.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Vậy làm sao để không bị cuốn vào vòng lặp tiêu cực ấy?</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Có một bí quyết để xử lý cảm xúc hiệu quả mà tôi muốn chia sẻ với bạn, đó là: <strong>quay về với chính mình</strong>. Mỗi khi cảm xúc tiêu cực xuất hiện, đừng cố lờ nó đi, cũng đừng ép mình phải vui vẻ. Thay vào đó, hãy thử làm gì đó bằng tay – vẽ vài nét nguệch ngoạc, ghép hình, đan len, gấp giấy… Nghe có vẻ đơn giản, nhưng lại cực kỳ hiệu quả.
          </p>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed">Khi bạn mệt mỏi? Hãy vẽ bông hoa.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Khi bạn lo lắng? Hãy đan len hoặc gấp giấy.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Nếu bạn thấy bực bội? Hãy vẽ những nét mạnh và dứt khoát.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Khi bạn hoang mang? Hãy tô màu, hoặc thử vẽ cầu vồng.</li>
          </ul>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Đừng cố kiểm soát cảm xúc mà hãy thấu hiểu nó. Sự bình an thật sự không đến từ việc "lúc nào cũng vui vẻ", mà đến từ khả năng nhìn thấy rõ mình đang giận, đang buồn, đang thất vọng – mà không bị cuốn đi bởi nó.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 3. Làm thế nào bạn nhận ra mình đang bắt đầu mất kiểm soát cảm xúc và bạn làm gì để lấy lại sự cân bằng?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bạn có thể nhận ra mình đang mất kiểm soát cảm xúc qua các dấu hiệu thể chất (tim đập nhanh, thở gấp) và tâm lý (suy nghĩ tiêu cực, nóng giận). Để lấy lại cân bằng, hãy thử các phương pháp như hít thở sâu, vận động thể chất, thay đổi môi trường, và các kỹ thuật thư giãn.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Nhận biết dấu hiệu mất kiểm soát cảm xúc</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Dấu hiệu thể chất:</strong> Tim đập nhanh, thở gấp, cơ thể căng cứng.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Dấu hiệu tâm lý:</strong> Suy nghĩ tiêu cực và lặp đi lặp lại, cảm thấy tức giận hoặc bất lực, khó tập trung, khó chịu với mọi người.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Các phương pháp lấy lại cân bằng</h3>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Kỹ thuật hít thở:</h4>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed">Hít sâu bằng mũi, giữ lại và thở ra chậm rãi bằng miệng.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Thử đếm từ 1 đến 10 trong khi thở để giúp bình tĩnh lại.</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Vận động thể chất:</h4>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed">Đi dạo ở nơi có cây xanh, không khí trong lành để xoa dịu tâm trí.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Tập các bài tập nhẹ nhàng như yoga, nhảy dây hoặc chạy bộ để giải tỏa căng thẳng.</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Thực hành chánh niệm và thư giãn:</h4>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed">Ngồi thiền khoảng 10 phút mỗi ngày, tập trung vào hơi thở để giữ tâm trí ở hiện tại.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Viết nhật ký để ghi lại cảm xúc, suy nghĩ, nhìn nhận một cách khách quan hơn.</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Tìm kiếm sự hỗ trợ:</h4>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed">Chia sẻ cảm xúc với một người bạn tin tưởng hoặc người thân.</li>
            <li className="text-gray-700 text-lg leading-relaxed">Nếu cảm xúc tiêu cực kéo dài, hãy tìm đến chuyên gia tư vấn tâm lý.</li>
          </ul>
        </div>

        {/* Question 4 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 4. Bạn có thể chia sẻ cách bạn rèn luyện để lắng nghe và thấu hiểu cảm xúc của người khác?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Để rèn luyện lắng nghe và thấu hiểu cảm xúc của người khác, bạn cần tập trung hoàn toàn, không ngắt lời, và lắng nghe không phán xét. Đồng thời, hãy đặt mình vào vị trí của họ để thấu hiểu, chú ý đến cả ngôn ngữ cơ thể, đặt câu hỏi mở và thể hiện sự đồng cảm.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tập trung hoàn toàn</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Loại bỏ phiền nhiễu:</strong> Gạt bỏ điện thoại, laptop hay suy nghĩ vẩn vơ để dành trọn sự chú ý cho người đối diện.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Giao tiếp bằng mắt:</strong> Duy trì giao tiếp bằng mắt một cách tự nhiên để thể hiện sự quan tâm.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Lắng nghe không phán xét</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Đặt mình vào vị trí của họ:</strong> Cố gắng nhìn nhận vấn đề dưới góc nhìn của người nói.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Không áp đặt quan điểm:</strong> Đừng vội đưa ra ý kiến hoặc lời khuyên.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tôn trọng và kiên nhẫn:</strong> Chờ đợi cho đến khi họ nói hết câu chuyện.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tương tác và thấu hiểu</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Đặt câu hỏi mở:</strong> Sử dụng những câu hỏi như "Bạn có thể nói rõ hơn không?"</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Phản hồi và tóm tắt:</strong> Nhắc lại những gì bạn nghe được để đảm bảo hiểu đúng.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nhận diện ngôn ngữ cơ thể:</strong> Chú ý đến các biểu cảm, cử chỉ và tư thế.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thể hiện sự đồng cảm:</strong> Sử dụng ngôn ngữ cơ thể và lời nói để chia sẻ sự đồng cảm.</li>
          </ul>
        </div>

        {/* Question 5 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 5. Bạn có nghĩ rằng việc bày tỏ cảm xúc của mình với người khác là dễ dàng không? Tại sao hoặc tại sao không?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Việc bày tỏ cảm xúc của mình với người khác <strong>KHÔNG DỄ DÀNG</strong>, vì nó phụ thuộc vào nhiều yếu tố như môi trường văn hóa, tính cách cá nhân và mức độ thoải mái của mỗi người.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tại sao việc bày tỏ cảm xúc không dễ dàng:</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Áp lực xã hội và văn hóa:</strong> Một số nền văn hóa không khuyến khích việc thể hiện cảm xúc mạnh mẽ.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Sợ bị đánh giá:</strong> Có nỗi sợ hãi rằng người khác sẽ nghĩ gì về cảm xúc của mình.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thiếu kỹ năng:</strong> Bày tỏ cảm xúc hiệu quả là một kỹ năng cần được học hỏi và rèn luyện.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Kinh nghiệm trong quá khứ:</strong> Những trải nghiệm tiêu cực có thể khiến một người ngần ngại.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Sự phức tạp của cảm xúc:</strong> Cảm xúc có thể mạnh mẽ, khó hiểu và khó diễn đạt chính xác.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tại sao việc bày tỏ cảm xúc lại quan trọng:</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nhẹ nhõm và lành mạnh:</strong> Mang lại cảm giác nhẹ nhõm và khỏe mạnh về mặt tinh thần.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Kết nối:</strong> Tạo cơ hội cho người khác hiểu và kết nối sâu sắc hơn.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Phát triển bản thân:</strong> Giúp hiểu rõ hơn về bản thân và phát triển kỹ năng giao tiếp.</li>
          </ul>
        </div>

        {/* Question 6 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 6. Bạn có bí quyết nào để kiểm soát những cảm xúc bùng nổ khi đối mặt với những tình huống bất ngờ không?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Để kiểm soát cảm xúc bùng nổ khi đối mặt với tình huống bất ngờ, bạn nên tạm dừng phản ứng ngay lập tức, thực hành các kỹ thuật thư giãn như hít thở sâu, thay đổi hướng suy nghĩ sang tích cực hơn, và tìm cách giải tỏa cảm xúc lành mạnh.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Phản ứng tức thời</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Hít thở sâu:</strong> Dừng lại và thực hiện các bài tập hít thở sâu.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Đếm số:</strong> Nhẩm đếm ngược từ 10 hoặc 60 về 0.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thay đổi môi trường:</strong> Rời khỏi tình huống đó một lúc để lấy lại bình tĩnh.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Thay đổi suy nghĩ</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nhìn nhận vấn đề khách quan:</strong> Xem xét tình huống từ nhiều góc độ.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tìm hướng tích cực:</strong> Tìm kiếm những điểm sáng hoặc giải pháp trong tình huống.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thực hành chánh niệm:</strong> Thiền hoặc các hoạt động chánh niệm.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Giải tỏa và phòng ngừa</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Vận động cơ thể:</strong> Đi bộ, tập thể dục hoặc tham gia các hoạt động thể chất.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nói chuyện với người tin cậy:</strong> Chia sẻ cảm xúc với bạn bè hoặc người thân.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tạo thói quen lành mạnh:</strong> Xây dựng thói quen tập thể dục, thiền định, hoặc viết nhật ký.</li>
          </ul>
        </div>

        {/* Question 7 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 7. Theo bạn, việc hiểu rõ cảm xúc bản thân có ảnh hưởng thế nào đến sự thành công trong cuộc sống và sự nghiệp?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hiểu cảm xúc cho phép bạn tự quản lý tốt hơn, đối mặt với thách thức một cách bình tĩnh và có động lực hơn để đạt được mục tiêu.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tác động đến cuộc sống cá nhân</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Cải thiện sức khỏe tinh thần:</strong> Giúp chấp nhận bản thân, giảm căng thẳng, lo âu.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Đưa ra quyết định tốt hơn:</strong> Lựa chọn phù hợp với giá trị và mục tiêu.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Xây dựng mối quan hệ lành mạnh:</strong> Dễ dàng chia sẻ và tìm được những người phù hợp.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tăng sự tự tin:</strong> Hiểu rõ điểm mạnh/yếu giúp tự tin hơn.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Định hướng cuộc sống:</strong> Nhận thức rõ ràng hơn về mục đích sống.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tác động đến sự nghiệp</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nâng cao hiệu suất làm việc:</strong> Làm việc hiệu quả hơn, tập trung tốt hơn.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Giải quyết xung đột:</strong> Ứng xử phù hợp trong các tình huống khó khăn.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Xây dựng tư duy phát triển:</strong> Thái độ tích cực, kiên trì và có động lực mạnh mẽ.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Lãnh đạo hiệu quả:</strong> Đưa ra quyết định sáng suốt và tạo môi trường làm việc tích cực.</li>
          </ul>
        </div>

        {/* Question 8 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 8. Làm sao bạn có thể duy trì sự lạc quan và năng lượng tích cực khi phải đối mặt với nhiều thử thách trong công việc và cuộc sống?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Để duy trì sự lạc quan và năng lượng tích cực, bạn có thể chăm sóc sức khỏe thể chất và tinh thần, nuôi dưỡng lòng biết ơn, tập trung vào những gì có thể kiểm soát và xem thử thách là cơ hội học hỏi.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Chăm sóc bản thân và rèn luyện tinh thần</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Chăm sóc sức khỏe thể chất:</strong> Duy trì chế độ ăn uống lành mạnh, tập thể dục và ngủ đủ giấc.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thực hành chánh niệm:</strong> Dành thời gian cho các hoạt động thư giãn.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nuôi dưỡng lòng biết ơn:</strong> Thực hành lòng biết ơn đối với cả những điều tốt và khó khăn.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Điều chỉnh tư duy và thái độ</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tập trung vào giải pháp:</strong> Thay vì sa lầy vào vấn đề, tìm ra giải pháp.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Nhìn nhận thất bại như bài học:</strong> Xem thất bại như cơ hội để học hỏi.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thay đổi suy nghĩ tiêu cực:</strong> Chuyển hướng suy nghĩ tiêu cực thành tích cực.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tìm kiếm sự hài hước:</strong> Tìm thấy sự hài hước trong cuộc sống.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Xây dựng môi trường và mối quan hệ tích cực</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Kết giao với những người lạc quan:</strong> Dành thời gian ở bên những người có năng lượng tích cực.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Chia sẻ và lắng nghe:</strong> Chia sẻ vui buồn với bạn bè và người thân.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tích cực lan tỏa:</strong> Chia sẻ năng lượng tích cực với người xung quanh.</li>
          </ul>
        </div>

        {/* Question 9 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 9. Bạn đã học được điều gì quan trọng nhất về cảm xúc của bản thân trong những năm qua?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Điều quan trọng nhất là chấp nhận và tôn vinh những thử thách trong cuộc sống, vì chúng tạo nên nghị lực, định hình con người và mang lại ý nghĩa cho cuộc sống. Hạnh phúc đích thực đến từ việc được là chính mình và theo đuổi ước mơ.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Chấp nhận và học hỏi từ thử thách</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Thử thách là động lực:</strong> Những khó khăn là nguồn nghị lực giúp bạn tiến lên.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Cuộc sống không chỉ là sự an toàn:</strong> Cuộc sống cần những "cuộc đua" để bạn hiểu rõ hơn về chính mình.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tìm kiếm hạnh phúc đích thực</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Làm chính mình:</strong> Hạnh phúc lớn nhất là được sống thật với bản thân.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Theo đuổi ước mơ:</strong> Phát triển dũng khí để theo đuổi những gì mình đam mê.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Phát triển bản thân</h3>
          <ul className="list-disc pl-8 mb-4 space-y-2">
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Tự tin và trân trọng bản thân:</strong> Tự tin là điều cần thiết.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Lắng nghe và mở lòng:</strong> Tiếp xúc với những người khác biệt và lắng nghe câu chuyện.</li>
            <li className="text-gray-700 text-lg leading-relaxed"><strong>Trân trọng khoảnh khắc:</strong> Ghi nhớ và trân trọng từng khoảnh khắc.</li>
          </ul>
        </div>

        {/* Question 10 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Câu 10. Bạn có thể chia sẻ một kỷ niệm cụ thể mà cảm xúc của bạn đã thay đổi hoàn toàn cách bạn phản ứng với một tình huống không?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-800 text-lg font-semibold">Giải đáp:</p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Một kỷ niệm có thể thay đổi hoàn toàn cách bạn phản ứng là khi bạn từng tức giận trước một lời phê bình, nhưng sau đó nhận ra lời phê bình đó lại là một cơ hội để cải thiện.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Kỷ niệm cụ thể</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            <strong>Tình huống:</strong> Bạn làm một bài thuyết trình quan trọng, và sau đó nhận được phản hồi tiêu cực từ đồng nghiệp. Ban đầu, bạn cảm thấy tức giận, bị tổn thương và muốn phản bác lại vì cho rằng họ không hiểu hoặc không công nhận nỗ lực của mình.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            <strong>Thay đổi cảm xúc:</strong> Sau khi bình tĩnh lại, bạn đọc lại các ghi chú và nhận ra một số điểm mà đồng nghiệp đề cập có thể đúng. Bạn bắt đầu cảm thấy thay vì tức giận, bạn có thể coi đây là cơ hội để cải thiện kỹ năng của mình.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            <strong>Phản ứng mới:</strong> Bạn đã không còn thái độ phòng thủ hay tức giận nữa. Thay vào đó, bạn chủ động tìm kiếm thêm thông tin, liên hệ với đồng nghiệp để thảo luận thêm về những điểm cần cải thiện. Cuối cùng, bạn đã sửa lại bài thuyết trình và cảm thấy tự tin hơn khi trình bày lần sau.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Bài học rút ra</h3>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Kỷ niệm này cho thấy rằng cảm xúc ban đầu của chúng ta (tức giận) không nhất thiết phải là cách chúng ta phản ứng với tình huống. Bằng cách tạm dừng, nhìn nhận vấn đề một cách khách quan và tìm kiếm cơ hội để cải thiện bản thân, chúng ta có thể thay đổi hoàn toàn cách ứng xử của mình và biến những tình huống tiêu cực thành những bài học quý giá.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mt-8">
          <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-2">
            Lời kết:
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Kiểm soát cảm xúc là một hành trình dài, không phải là đích đến. Hãy kiên nhẫn với bản thân, học hỏi từ những trải nghiệm và không ngừng phát triển. Mỗi ngày là một cơ hội mới để hiểu rõ hơn về cảm xúc của mình và trở thành phiên bản tốt hơn của chính mình.
          </p>
        </div>
      </div>
    </div>
  );
}
