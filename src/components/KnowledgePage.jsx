export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mt-8 mb-8 content-padding">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">HIỂU BIẾT CHUNG VỀ TRÍ TUỆ CẢM XÚC</h2>
      </div>

      <div className="mx-auto py-12 content-padding">
        {/* Research Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NHỮNG NGHIÊN CỨU VÀ LUẬN ĐIỂM VỀ HỌC THUYẾT EQ</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Trong số những nghiên cứu về trí tuệ cảm xúc, có ba nghiên cứu nhận được nhiều sự chú ý (Sarkis, 2011):
          </p>
          <ul className="space-y-3">
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Năm 2010</strong>, nhà nghiên cứu Lynda Jiwen Song và các đồng nghiệp đã khám phá cách trí tuệ cảm xúc và trí tuệ nhận thức ảnh hưởng một cách tích cực đến kết quả học tập và mối tương tác xã hội của sinh viên đại học. Họ nhận thấy rằng trong khi IQ là một yếu tố dự báo mạnh mẽ về thành tựu trong học tập, EQ cũng là một nhân tố đóng góp đáng kể. Hơn nữa, EQ là một yếu tố quan trọng trong chất lượng tương tác xã hội với bạn bè, trong khi IQ dường như không đóng nhiều vai trò trong cuộc sống xã hội của một sinh viên đại học.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Năm 2009</strong>, Kimmy S. Kee, Peter Salovey và các đồng nghiệp đã hỏi một câu hỏi thú vị về EQ và bệnh tâm thần: Liệu những người bị tâm thần phân liệt có EQ thấp hơn đáng kể so với những người không mắc bệnh? Họ phát hiện ra rằng những người mắc bệnh tâm thần phân liệt thực sự có EQ thấp hơn đáng kể và làm bài kiểm tra kém hơn đáng kể ở ba trong số bốn bài kiểm tra EQ liên quan đến việc xác định, thấu hiểu và quản lý cảm xúc.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Năm 2009</strong>, nhà nghiên cứu Delphine Nelis và cộng sự đã thiết kế một thí nghiệm về khả năng tăng trí thông minh cảm xúc. Hai nhóm đã được thử nghiệm EQ ở lúc bắt đầu và cuối thí nghiệm. Nhóm điều trị đã nhận được một khóa đào tạo EQ ngắn gọn (bốn buổi huấn luyện nhóm trong hai giờ rưỡi), trong khi nhóm kiểm soát không được đào tạo. Vào cuối thí nghiệm, nhóm điều trị cho thấy mức độ tăng chỉ số EQ đáng kể trong khi nhóm kiểm soát không có thay đổi gì mấy.
            </li>
          </ul>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed text-justify">
            Ba nghiên cứu này đã trả lời một số câu hỏi lớn và mở ra cơ hội cho nhiều nghiên cứu sáng tạo và quan trọng được thực hiện kể từ đó. Kết quả cho chúng ta thấy rằng trí tuệ cảm xúc thực sự là một yếu tố quan trọng trong mức độ thành công, các mối quan hệ, chất lượng sức khỏe tinh thần của mỗi người và hơn hết là việc chúng ta có thể thực sự cải thiện trí thông minh cảm xúc.
          </p>
        </div>

        {/* How to Improve Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Những cách để cải thiện trí tuệ cảm xúc</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Không giống như IQ, mọi người thực sự có thể cải thiện trí tuệ cảm xúc của họ. Trí thông minh cảm xúc có thể rèn luyện được, ngay cả ở người lớn. Cơ sở này dựa trên một nhánh khoa học mới được gọi là tính khả biến thần kinh (Neuroplasticity).
          </p>
          <p className="text-gray-700 text-lg mb-3 leading-relaxed text-justify font-semibold">
            Trí tuệ cảm xúc có thể được rèn luyện qua các cách sau:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Rèn luyện sự tập trung để tâm trí được ổn định và sáng suốt</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Thiền chánh niệm (Mindfulness meditation)</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Phát huy các kĩ năng lắng nghe người khác</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Duy trì năng lượng và thái độ sống tích cực</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Rèn luyện khả năng tự nhận thức</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Rèn luyện khả năng tiếp nhận những lời phê bình một cách có chọn lọc</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Phát huy kĩ năng lãnh đạo</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Kiểm soát những cảm xúc tiêu cực</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Bổ sung và cải thiện vốn từ vựng trong giao tiếp</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span>Rèn luyện kĩ năng đặt bản thân mình vào vị trí của người khác đối với các tình huống trong giao tiếp</span>
            </li>
          </ul>
        </div>

        {/* 15 Signs Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">15 DẤU HIỆU CỦA NGƯỜI CÓ EQ CAO</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Bạn nghiền ngẫm về những cảm xúc</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Trí tuệ cảm xúc bắt đầu với những gì được gọi là nhận thức về bản thân và xã hội, khả năng nhận ra cảm xúc (và tác động của chúng) ở cả bản thân và người khác. Nhận thức đó bắt đầu bằng sự phản ánh, bạn đặt những câu hỏi như: Điểm mạnh về mặt cảm xúc của tôi là gì? Điểm yếu của tôi là gì?
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Bạn biết khi nào thì nên tạm dừng</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Việc tạm dừng đơn giản như dành một chút thời gian để dừng lại và suy nghĩ trước khi bạn nói hoặc hành động. Điều này có thể giúp bạn tránh khỏi những khoảnh khắc lúng túng hoặc đưa ra quyết định quá nhanh.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Bạn nỗ lực để kiểm soát suy nghĩ của mình</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Bạn không kiểm soát được cảm xúc mà bạn trải nghiệm trong một thời điểm nhất định. Nhưng bạn có thể kiểm soát phản ứng của mình trước những cảm xúc đó - bằng cách tập trung vào suy nghĩ của bạn.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Bạn hưởng lợi từ những lời chỉ trích</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Không ai thích những phản hồi tiêu cực, nhưng bạn biết rằng những lời chỉ trích là một cơ hội để học hỏi, ngay cả khi nó không được truyền đạt theo cách tốt nhất.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Bạn thể hiện tính xác thực</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Tính xác thực không có nghĩa là chia sẻ mọi thứ về bản thân bạn với mọi người và mọi lúc. Thay vì nói những gì bạn nghĩ, đó là những thứ mà bạn nói tuân theo các giá trị và nguyên tắc của bản thân hơn hết thảy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Bạn thể hiện sự đồng cảm đối với người khác</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Khả năng thể hiện sự đồng cảm bao gồm hiểu được suy nghĩ và cảm xúc của người khác giúp bạn kết nối với người khác dễ dàng hơn. Thay vì phán xét hoặc có những định kiến đối với người khác, bạn cố gắng đặt mình vào vị trí của họ.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Bạn khen ngợi người khác</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Mọi người đều khao khát sự công nhận và đánh giá cao. Khi bạn khen ngợi người khác, bạn thỏa mãn sự khao khát đó của họ và xây dựng một hệ thống niềm tin.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Bạn đưa ra những lời nhận xét hữu ích</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Những phản hồi tiêu cực phần nào làm tổn thương đến cảm nhận của người khác. Nếu bạn nhận ra được điều này và điều chỉnh những lời chỉ trích trở thành những phản hồi mang tính xây dựng, người tiếp nhận thông tin sẽ cảm thấy hữu ích thay vì bị tổn thương.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">9. Bạn nói lời xin lỗi</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Cần có sức mạnh và sự can đảm để có thể nói rằng bạn xin lỗi. Điều này càng chứng tỏ được sự khiêm tốn - một phẩm chất sẽ tự nhiên thu hút người khác đến với bạn.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">10. Bạn tha thứ và quên đi</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Sự oán hận cũng giống như con dao hai lưỡi. Trong khi những người gây ra tổn thương cho bạn tiếp tục với cuộc sống của họ như thường lệ, bạn không bao giờ cho mình cơ hội để chữa lành.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">11. Bạn giữ đúng cam kết</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Mọi người thường phá vỡ một thỏa thuận hoặc cam kết khi họ cảm thấy không đáng. Nhưng khi bạn tạo thói quen giữ lời, trong cả những điều lớn và nhỏ, bạn sẽ tạo dựng một hình ảnh bản thân mang giá trị to lớn về tính xác thực và độ tin cậy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">12. Bạn giúp đỡ người khác</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Một trong những cách tốt nhất để tác động tích cực đến cảm xúc của người khác là giúp đỡ họ. Những hành động như sẵn sàng hoãn lịch trình của bạn để lắng nghe, giúp đỡ và sát cánh bên họ sẽ tạo dựng niềm tin và truyền cảm hứng.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">13. Bạn bảo vệ bản thân khỏi sự phá hoại cảm xúc</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Bạn nhận ra rằng trí tuệ cảm xúc cũng có một mặt tối - chẳng hạn như khi các cá nhân cố gắng điều khiển cảm xúc của người khác để thỏa mãn nhu cầu cá nhân của họ. Và đó là lý do tại sao bạn tiếp tục mài giũa trí tuệ cảm xúc của chính mình.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">14. Bạn biết rõ điểm mạnh và điểm yếu của mình</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Minh chứng rõ nhất của việc tự nhận thức là thành thật với chính mình - biết rõ bản thân bạn xuất sắc và còn cần phải cố gắng ở đâu.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">15. Bạn luôn tự động viên mình</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Bạn luôn tham vọng và chăm chỉ như một con ong, ngay cả khi bạn không nhận được những lời tán thưởng. Nếu bạn là người luôn tự khởi động bản thân và có thể tập trung sự chú ý và năng lượng của mình vào việc theo đuổi mục tiêu của mình, đây cũng là dấu hiệu chứng tỏ bạn sở hữu chỉ số EQ cao.
              </p>
            </div>
          </div>
        </div>

        {/* Why EQ Important Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TẠI SAO TRÍ TUỆ CẢM XÚC EQ LẠI QUAN TRỌNG?</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Người thông minh nhất chưa hẳn sẽ là người thành công hoặc thỏa mãn nhất trong cuộc sống. Có những người tuy có học vấn cao nhưng không có kĩ năng xã hội và từ đó dẫn đến việc khó đạt được thành tựu trong công việc hoặc các mối quan hệ cá nhân. Tự bản thân chỉ số thông minh IQ của bạn không thể giúp bạn đi đến đỉnh cao của cuộc sống.
          </p>
          <p className="text-gray-700 text-lg mb-3 leading-relaxed text-justify font-semibold">
            Trí tuệ cảm xúc ảnh hưởng đến:
          </p>
          <ul className="space-y-3">
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Hiệu suất của bạn ở trường học hoặc nơi làm việc:</strong> Trí tuệ cảm xúc cao có thể giúp bạn điều hướng sự phức tạp xã hội ở nơi làm việc, dẫn dắt, thúc đẩy người khác và trở nên xuất sắc trong sự nghiệp của bạn.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Sức khỏe thể chất của bạn:</strong> Việc bạn không quản lý được cảm xúc của mình có thể dẫn đến các vấn đề sức khỏe nghiêm trọng. Sự căng thẳng không được kiểm soát làm tăng huyết áp, ức chế hệ thống miễn dịch, tăng nguy cơ đau tim và đột quỵ.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Sức khỏe tinh thần của bạn:</strong> Những cảm xúc và căng thẳng không được kiểm soát cũng có thể ảnh hưởng đến sức khỏe tinh thần của bạn, khiến bạn dễ bị lo lắng và trầm cảm.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Các mối quan hệ của bạn:</strong> Bằng cách thấu hiểu cảm xúc của bạn và học cách kiểm soát chúng, bạn có thể bày tỏ tốt hơn cảm giác của bạn và thấu hiểu cảm giác của người khác.
            </li>
            <li className="text-gray-700 text-lg leading-relaxed text-justify">
              <strong>Trí thông minh xã hội của bạn:</strong> Sự hòa hợp với cảm xúc của bạn phục vụ cho mục đích xã hội, kết nối bạn với những người khác và thế giới xung quanh bạn.
            </li>
          </ul>
        </div>

        {/* Image 1 */}
        <div className="mb-8">
          <img 
            src="/src/image/hinh2cuatranghieubietchung.png" 
            alt="Trí tuệ cảm xúc" 
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Emotion Control Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">KIỂM SOÁT CẢM XÚC</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Kỹ năng kiểm soát cảm xúc là gì?</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Kỹ năng kiểm soát cảm xúc là một trong năm cấp bậc giáo dục trí tuệ cảm xúc. Đây là cách con người nhận ra cảm xúc của mình và hiểu được ảnh hưởng của cảm xúc đó với bản thân và người khác. Đồng thời, bản thân có kỹ năng tự điều chỉnh và thể hiện cảm xúc theo cách phù hợp nhất.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Vì sao học sinh cần có kỹ năng kiểm soát cảm xúc?</h3>
          <p className="text-gray-700 text-lg mb-3 leading-relaxed text-justify">
            Kiểm soát cảm xúc không phải "đè nén" hay "giả vờ không cảm thấy gì". Đó là khả năng hiểu - điều chỉnh - thể hiện cảm xúc phù hợp.
          </p>
          <p className="text-gray-700 text-lg mb-3 leading-relaxed text-justify">
            Đối với học sinh THPT, kỹ năng này đặc biệt quan trọng bởi những lý do sau:
          </p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800">1. Giúp học tập hiệu quả hơn</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Khi cảm xúc ổn định, não bộ tập trung tốt hơn. Ngược lại, lo lắng, tức giận hoặc buồn bã kéo dài khiến bạn khó ghi nhớ, mất động lực, dễ sao nhãng.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">2. Giảm hành vi bộc phát</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Khi cảm xúc quá mạnh, bạn dễ nói ra lời tổn thương, hành động vội vàng, tranh cãi không cần thiết. Kiểm soát cảm xúc giúp bạn phản ứng bình tĩnh và chính xác hơn.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">3. Cải thiện các mối quan hệ</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Biết quản lý cảm xúc giúp bạn dễ chia sẻ hơn, lắng nghe tốt hơn, tránh hiểu lầm, giải quyết mâu thuẫn văn minh.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">4. Giảm stress, lo âu và áp lực học đường</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Nhận diện sớm cảm xúc giúp bạn chọn cách xử lý phù hợp: hít thở, viết nhật ký cảm xúc, tìm người chia sẻ. Từ đó giảm nguy cơ stress kéo dài.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">5. Xây dựng sự tự tin và sức bền tâm lý</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Khi kiểm soát tốt cảm xúc, bạn làm chủ bản thân, không bị cảm xúc dẫn dắt, biết mình cần gì và muốn gì. Đây là nền tảng quan trọng cho tuổi 15–18 – giai đoạn hình thành tính cách, bản lĩnh.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">6. Chuẩn bị cho tương lai</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Người kiểm soát cảm xúc tốt thường giao tiếp hiệu quả, chịu áp lực tốt, dễ thích nghi, có tinh thần tích cực. Từ đó giúp bản thân nâng cấp kỹ năng và hoàn thiện trí tuệ cảm xúc.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Quy trình thực hiện kỹ năng kiểm soát cảm xúc</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800">Hiểu biết về cảm xúc - "Hiểu chính mình"</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Nhận diện cảm xúc bản thân chính là quá trình chủ động tìm hiểu chính mình. Những người biết chắc về cảm giác của mình sẽ có thể sống tốt hơn, cảm nhận chân thực và đúng đắn hơn về các quyết định trong cuộc sống.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Làm chủ cảm xúc</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Đây là năng lực làm cho những tình cảm của mình thích nghi với hoàn cảnh phụ thuộc vào ý thức về bản thân. Trong thực tế, chế ngự những cảm xúc tiêu cực chính là chìa khóa đem lại hạnh phúc và sự cân bằng.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Chuyển hóa cảm xúc</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Đây là năng lực hướng dẫn các cảm xúc tập trung chú ý, tự kiềm chế và tự thúc đẩy ở con người.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Nhận biết các cảm xúc của người khác</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Sự đồng cảm là yếu tố căn bản để thiết lập mối quan hệ tích cực của cá nhân với cá nhân khác và với cộng đồng.
              </p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="mb-8">
          <img 
            src="/src/image/BaiHocVeKyNangKiemSoatCamXuc.png" 
            alt="Kỹ năng kiểm soát cảm xúc" 
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Methods Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">HỌC SINH THPT VỚI KỸ NĂNG KIỂM SOÁT CẢM XÚC</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Tổng hợp 5 phương pháp để phát triển kỹ năng kiểm soát cảm xúc ở học sinh:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">1. Tách cảm xúc ra khỏi hành động</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Có thể khó kiểm soát cảm xúc. Cảm xúc là những tín hiệu cho thấy một người làm điều gì đó hoặc hành động theo một cách nhất định nào đó. Tách cảm xúc ra khỏi hành động là điều cần ghi nhớ trong kỹ năng kiểm soát cảm xúc. Không làm bất cứ điều gì khi cảm thấy xúc động mạnh là một điều đúng đắn.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">2. Giữ bình tĩnh</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Công việc có thể rất căng thẳng vào một số thời điểm. Áp lực sẽ giúp con người làm việc tốt hơn, đáp ứng thời hạn, và đối phó với những tình huống khó khăn có thể dẫn đến tình trạng quá tải. Chìa khóa để kiểm soát cảm xúc là giữ bình tĩnh.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">3. Tránh bốc đồng</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Cảm xúc mạnh có thể khiến cho việc suy nghĩ trở nên khó khăn. Mọi người có thể nói và làm những điều mà sau này họ sẽ cảm thấy rất hối hận. Trước khi phản ứng, mọi người nên dừng lại và suy nghĩ về cách xử lý tình huống.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">4. Viết ra cảm xúc</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Một cách lành mạnh để đối phó với cảm xúc là đưa chúng vào việc viết. Viết ra suy nghĩ và cảm xúc là một cách tốt để đối phó với căng thẳng. Hành động viết những suy nghĩ thực sự có thể giúp các em xử lý các tình huống.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">5. Giữ tinh thần lạc quan</h4>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Mọi người cảm thấy rất nhiều cảm xúc khác nhau ở nơi học tập, làm việc. Tức giận, thất vọng, căng thẳng, lo lắng và căng thẳng chỉ là một vài cảm xúc mà mọi người cảm thấy trong học tập và công việc. Giữ tinh thần lạc quan là chìa khóa để bảo vệ bản thân khỏi các cảm xúc tiêu cực này.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">KẾT LUẬN</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Kỹ năng kiểm soát cảm xúc là nền tảng quan trọng giúp học sinh phát triển toàn diện cả về trí tuệ, nhân cách và các mối quan hệ xã hội. Khi làm chủ cảm xúc, các em không chỉ tự bảo vệ bản thân khỏi những quyết định sai lầm mà còn biết cách xử lý xung đột, vượt qua thử thách và xây dựng tinh thần tích cực. Đây không chỉ là chìa khóa giúp các em học tập hiệu quả hơn mà còn tạo tiền đề cho một cuộc sống hạnh phúc, lành mạnh. Việc giáo dục và rèn luyện kỹ năng kiểm soát cảm xúc cần được thực hiện một cách liên tục và đồng hành cùng sự yêu thương, hướng dẫn từ gia đình và nhà trường.
          </p>
        </div>
      </div>
    </div>
  );
}
