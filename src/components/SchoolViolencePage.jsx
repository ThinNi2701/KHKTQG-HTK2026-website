export default function SchoolViolencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mt-8 mb-8 content-padding">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">TRÁNH XA BẠO LỰC HỌC ĐƯỜNG BẰNG CÁCH KIỂM SOÁT CẢM XÚC</h2>
      </div>

      <div className="mx-auto py-12 content-padding">
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Bạo lực học đường có thể được ngăn chặn bằng cách dạy học sinh kiểm soát cảm xúc thông qua các phương pháp như giáo dục kỹ năng sống, kỹ năng giải quyết mâu thuẫn, và tạo môi trường tâm lý an toàn. Khi đối mặt với căng thẳng, học sinh có thể hít thở sâu, bình tĩnh lại, hoặc tạm rời xa tình huống để suy nghĩ. Gia đình và nhà trường đóng vai trò quan trọng trong việc xây dựng văn hóa tôn trọng, lắng nghe, và đồng hành cùng trẻ để giảm thiểu hành vi bạo lực.
          </p>
        </div>
        <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/BaoLucHocDuong/image1.png" 
              alt="Bạo lực học đường" 
              className="w-full rounded-lg shadow-md"
            />
        </div>
        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. THỰC TRẠNG BẠO LỰC HỌC ĐƯỜNG HIỆN NAY</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Căn cứ theo quy định tại khoản 5 Điều 2 Nghị định 80/2017/NĐ-CP, <strong>bạo lực học đường</strong> là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khỏe; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của người học xảy ra trong cơ sở giáo dục hoặc lớp độc lập.
          </p>
            <div className="mb-6 flex justify-center px-8">
                <img 
                    src="/src/image/BaoLucHocDuong/image2.png" 
                    alt="Bạo lực học đường" 
                    className="w-full rounded-lg shadow-md"
                />
            </div>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Hiện tượng bạo lực học đường không phải là hiện tượng mới, xong thời gian gần đây thực trạng bạo lực học đường xảy ra liên tục hơn, có chiều hướng gia tăng trong các trường học và bộc lộ tính chất nguy hiểm và nghiêm trọng hơn. Bạo lực học đường len lỏi từ cấp tiểu học, trung học cơ sở, trung học phổ thông và cao hơn nữa. Ở mỗi cấp học mức độ có thể khác nhau nhưng hậu quả để lại rất nặng nề khiến nạn nhân chấn thương tâm lý, thậm chí phải đánh đổi bằng cả mạng sống của mình.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. BIỆN PHÁP TỐI ƯU NHẤT DÀNH CHO HỌC SINH</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Kiểm soát khi tức giận</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Khi cảm thấy tức giận, hãy hít thở sâu, nhắm mắt hoặc uống nước để bình tĩnh lại. Những hành động đơn giản này giúp bạn kiểm soát được cảm xúc và tránh những phản ứng thiếu suy nghĩ có thể dẫn đến bạo lực.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/BaoLucHocDuong/image3.png" 
              alt="Bạo lực học đường" 
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Phản ứng chậm lại</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Thay vì phản ứng ngay lập tức, hãy thử lảng tránh đi ra nơi khác để không kích động đối tượng trêu ghẹo. Việc tạo khoảng cách giúp bạn có thời gian suy nghĩ và đưa ra quyết định đúng đắn hơn.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Giải tỏa cảm xúc an toàn</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Khi cần giải phóng năng lượng, có thể bóp chai nước, vo tờ giấy hoặc nói ra cảm xúc của mình ở nơi vắng vẻ. Những cách này giúp bạn giải tỏa căng thẳng mà không gây hại cho bản thân hay người khác.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tìm kiếm sự giúp đỡ</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Nếu tình trạng bạo lực tiếp diễn, hãy nói chuyện với giáo viên chủ nhiệm hoặc phụ huynh. Đừng ngại chia sẻ những khó khăn của mình, bởi sự im lặng chỉ khiến vấn đề trở nên tồi tệ hơn.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tham gia hoạt động tích cực</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Tham gia các hoạt động nhóm, thể dục thể thao để kết nối với bạn bè và xây dựng mối quan hệ tích cực. Những hoạt động này không chỉ giúp bạn giải tỏa stress mà còn tạo ra môi trường lành mạnh, giảm thiểu nguy cơ bạo lực.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. VAI TRÒ CỦA GIA ĐÌNH VÀ NHÀ TRƯỜNG</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tạo môi trường an toàn</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Gia đình cần xây dựng một môi trường sống lành mạnh, yêu thương và tôn trọng. Nhà trường cần có các buổi sinh hoạt chuyên đề và phòng tư vấn tâm lý để học sinh có thể chia sẻ những khó khăn của mình trong môi trường an toàn và tin cậy.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/BaoLucHocDuong/image4.png" 
              alt="Bạo lực học đường" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Giáo dục kỹ năng</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Giáo dục kỹ năng sống, giải quyết mâu thuẫn, và kiểm soát cảm xúc cho học sinh thông qua các tiết học, thảo luận nhóm, hoặc các hoạt động như "Góc cảm xúc". Những kỹ năng này giúp học sinh trang bị công cụ cần thiết để đối phó với các tình huống căng thẳng một cách hiệu quả.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tăng cường lắng nghe và đồng hành</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Cha mẹ và giáo viên cần lắng nghe học sinh một cách bình tĩnh, không đổ lỗi hay phớt lờ. Sự đồng cảm và thấu hiểu từ người lớn là yếu tố quan trọng giúp học sinh cảm thấy được hỗ trợ và có thể vượt qua những khó khăn.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Phối hợp chặt chẽ</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Gia đình và nhà trường cần phối hợp chặt chẽ để theo dõi, hỗ trợ và kịp thời ngăn chặn những hành vi bạo lực. Sự hợp tác giữa hai phía tạo nên một mạng lưới bảo vệ toàn diện cho học sinh.
          </p>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            <strong>Điều quan trọng nhất:</strong> Không ai đáng bị bạo lực. Hãy mạnh dạn lên tiếng và tìm kiếm sự giúp đỡ. Sự im lặng chỉ khiến vấn đề trở nên tồi tệ hơn.
          </p>
        </div>
        <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/BaoLucHocDuong/image5.png" 
              alt="Bạo lực học đường" 
              className="w-full rounded-lg shadow-md"
            />
        </div>
      </div>
    </div>
  );
}
