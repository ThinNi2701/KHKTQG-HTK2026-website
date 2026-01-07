export default function FamilyConflictPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mt-8 mb-8 content-padding">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">HỌC SINH CẦN LÀM GÌ KHI MÂU THUẪN VỚI GIA ĐÌNH?</h2>
      </div>

      <div className="mx-auto py-12 content-padding">
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Mâu thuẫn giữa cha mẹ và con cái là hiện tượng phổ biến trong nhiều gia đình Việt Nam. Những xung đột này không chỉ xuất phát từ sự khác biệt về thế hệ, mà còn do nhiều yếu tố như giá trị sống, quan điểm cá nhân và môi trường xã hội. Hiểu rõ mâu thuẫn là gì và nguyên nhân gây nên những mâu thuẫn sẽ là chìa khóa giúp xây dựng mối quan hệ gia đình hòa thuận, hạnh phúc bền vững.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. MÂU THUẪN LÀ GÌ?</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Mâu thuẫn là sự xung đột, đối lập về quan điểm, suy nghĩ hoặc giá trị giữa các cá nhân hoặc nhóm. Mâu thuẫn có thể xuất hiện ở mọi khía cạnh của cuộc sống, từ công việc, tình yêu đến gia đình. Trong gia đình, mâu thuẫn thường xảy ra khi các thành viên không hiểu hoặc không chấp nhận cách suy nghĩ của nhau, dẫn đến tranh cãi, bất đồng. Với sự khác biệt trong quan điểm và kinh nghiệm sống, mâu thuẫn giữa cha mẹ và con cái trở thành một trong những nguyên nhân phổ biến gây xung đột gia đình.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Mâu thuẫn trong gia đình có thể đến từ nhiều nguyên nhân khác nhau, bao gồm sự khác biệt về giá trị, văn hóa và lối sống giữa các thế hệ. Khi không giải quyết được, những mâu thuẫn này có thể dẫn đến sự căng thẳng trong mối quan hệ, làm mất kết nối giữa cha mẹ và con cái.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. NGUYÊN NHÂN KHIẾN CHA MẸ VÀ CON CÁI MÂU THUẪN</h2>
          
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Việc những mâu thuẫn giữa cha mẹ và con cái phát sinh có thể đến từ nhiều lý do. Chính vì vậy, việc nhận diện được nguyên nhân kịp thời sẽ giúp cha mẹ kết nối với con cái dễ dàng, sâu sắc hơn.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Sự khác biệt thế hệ và quan niệm sống</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Một trong những nguyên nhân chính của mâu thuẫn gia đình là sự khác biệt thế hệ. Cha mẹ và con cái thường có lối sống và quan điểm khác nhau do ảnh hưởng của thời đại. Cha mẹ thường trưởng thành trong môi trường truyền thống, với các giá trị văn hóa và xã hội khắt khe hơn. Họ có xu hướng coi trọng tính kỷ luật, sự chăm chỉ và tuân thủ quy tắc.
          </p>
          
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image1.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Ngược lại, thế hệ trẻ ngày nay lớn lên trong môi trường mở, có nhiều cơ hội tiếp xúc với công nghệ, kiến thức và lối sống đa dạng. Các giá trị như tự do cá nhân, sáng tạo và tìm kiếm hạnh phúc cá nhân được họ coi trọng hơn. Điều này dẫn đến việc con cái muốn tự do và tự quyết định về bản thân, trong khi cha mẹ lại lo lắng, cảm thấy con cái không tuân thủ hoặc tôn trọng giá trị của gia đình. Những mâu thuẫn này có thể leo thang nếu cả hai bên không tìm cách hiểu và chấp nhận sự khác biệt của nhau.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Áp đặt kỳ vọng và áp lực từ phía cha mẹ</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Cha mẹ thường có kỳ vọng rất lớn đối với con cái, mong muốn con đạt được thành công trong học tập, sự nghiệp, hoặc có một cuộc sống an lành, hạnh phúc. Tuy nhiên, những kỳ vọng này đôi khi trở thành áp lực nặng nề với con cái, đặc biệt khi chúng cảm thấy không thể hoặc không muốn đáp ứng những mong đợi của cha mẹ.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image2.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Việc cha mẹ áp đặt kỳ vọng có thể khiến con cảm thấy bị gò bó, mất tự do và không được chấp nhận. Sự áp đặt này không chỉ gây ra mâu thuẫn mà còn có thể làm tổn thương lòng tự trọng và tự tin của con cái, dẫn đến khoảng cách ngày càng lớn trong mối quan hệ gia đình.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Một ví dụ điển hình là khi cha mẹ muốn con theo đuổi một ngành nghề mà họ cho là "an toàn" hoặc "ổn định", trong khi con cái lại có đam mê và năng lực trong một lĩnh vực khác. Thay vì lắng nghe và ủng hộ, cha mẹ lại cố gắng thuyết phục hoặc thậm chí ép buộc, gây ra những xung đột và bất mãn kéo dài.
          </p>


          <h3 className="text-xl font-semibold text-gray-800 mb-3">Thiếu giao tiếp và hiểu biết lẫn nhau</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Giao tiếp là chìa khóa để duy trì mối quan hệ lành mạnh trong bất kỳ gia đình nào. Tuy nhiên, việc thiếu giao tiếp hoặc không hiểu nhau là một trong những nguyên nhân phổ biến nhất dẫn đến mâu thuẫn giữa cha mẹ và con cái. Thay vì lắng nghe và thấu hiểu con cái, nhiều gia đình rơi vào tình trạng "mỗi người một ý" hoặc "cha mẹ nói, con cái không nghe".
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Khi không có sự giao tiếp cởi mở, các thành viên trong gia đình dễ dàng hiểu sai ý nhau, dẫn đến sự phán xét, chỉ trích hoặc buộc tội. Con cái có thể cảm thấy cha mẹ không hiểu và không quan tâm đến suy nghĩ của mình, trong khi cha mẹ lại nghĩ rằng con cái "chống đối" hoặc "không tôn trọng" họ. Tình trạng này không chỉ làm tăng xung đột mà còn tạo ra khoảng cách giữa cha mẹ và con cái.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image3.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Cha mẹ thường lo lắng về con cái và muốn bảo vệ chúng, nhưng đôi khi sự lo lắng này lại chuyển thành hành động kiểm soát quá mức, như can thiệp vào đời sống cá nhân của con cái, kiểm soát các mối quan hệ bạn bè, việc chọn ngành học hoặc công việc.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Sự kiểm soát quá mức khiến con cái và cha mẹ mất kết nối</h3>
          
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Đối với con cái, đặc biệt là ở độ tuổi vị thành niên hoặc khi bước vào giai đoạn trưởng thành, chúng cần có không gian riêng để phát triển bản thân và trải nghiệm cuộc sống. Việc cha mẹ kiểm soát quá mức có thể làm giảm cảm giác tự do và quyền tự quyết của con cái, dẫn đến sự nổi loạn hoặc bất đồng. Sự kiểm soát và thiếu tự do cá nhân không chỉ làm tổn thương tình cảm mà còn có thể ảnh hưởng xấu đến sức khỏe tinh thần của con cái. Khi bị kiểm soát chặt chẽ, họ có thể cảm thấy mình không được tin tưởng hoặc coi trọng, từ đó gây ra những cảm xúc tiêu cực và mâu thuẫn kéo dài.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image4.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Cha mẹ so sánh con với người khác</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Sự so sánh là một yếu tố phổ biến trong mâu thuẫn giữa cha mẹ và con cái. Cha mẹ thường có xu hướng so sánh con cái mình với những người khác, có thể là bạn bè hoặc những người thân trong gia đình, với mong muốn con sẽ "học hỏi" và phấn đấu để đạt được thành công như người khác.
          </p>
          <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image5.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Tuy nhiên, việc bị so sánh thường xuyên có thể gây áp lực và tổn thương tâm lý của con. Họ có thể cảm thấy mình không đủ tốt, không được cha mẹ công nhận hoặc đánh giá cao. Từ đó, họ dễ bị ảnh hưởng tiêu cực về mặt tự tin và cảm thấy bất mãn với cha mẹ. Mâu thuẫn này có thể dẫn đến sự xa cách và thiếu gắn kết trong mối quan hệ gia đình.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Mâu thuẫn trong mối quan hệ giữa cha mẹ và con cái là điều khó tránh khỏi trong cuộc sống hiện đại, khi mỗi thế hệ có quan điểm và cách tiếp cận cuộc sống khác nhau. Tuy nhiên, việc nhận diện và hiểu rõ những nguyên nhân gây ra xung đột sẽ giúp gia đình có cái nhìn sâu sắc hơn và tìm cách giải quyết mâu thuẫn một cách hiệu quả.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. HỌC SINH CẦN LÀM GÌ KHI MÂU THUẪN CHA MẸ</h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
            Khi mâu thuẫn với cha mẹ, học sinh cần giữ bình tĩnh, lắng nghe để thấu hiểu quan điểm của họ, sau đó trò chuyện thẳng thắn, tôn trọng và tìm giải pháp chung. Điều quan trọng là thể hiện sự biết ơn, tránh đổ lỗi và có trách nhiệm với lựa chọn của bản thân.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Giữ bình tĩnh và quản lý cảm xúc</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Học cách im lặng:</strong> Khi căng thẳng, hãy lùi lại một bước để giữ bình tĩnh thay vì tranh cãi gay gắt.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Kiểm soát cơn nóng giận:</strong> Không để cảm xúc chi phối dẫn đến những lời nói hoặc hành động thiếu suy nghĩ.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2. Lắng nghe và thấu hiểu</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Lắng nghe quan điểm của cha mẹ:</strong> Hãy tập trung lắng nghe lý do, quan điểm và những lo lắng của cha mẹ trước khi phản bác.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Đặt mình vào vị trí của họ:</strong> Cố gắng nhìn nhận vấn đề từ góc độ của cha mẹ để hiểu rõ hơn nguồn gốc của sự bất đồng.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Thể hiện sự biết ơn:</strong> Dù không đồng ý, hãy bày tỏ lòng cảm ơn vì sự quan tâm, lo lắng của cha mẹ.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3. Trao đổi và tìm giải pháp</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Trò chuyện thẳng thắn:</strong> Chọn thời điểm thích hợp để nói chuyện một cách bình tĩnh, rõ ràng và lịch sự.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Tìm mục tiêu chung:</strong> Cùng nhau tìm ra những mục tiêu chung để hướng tới, ví dụ như hạnh phúc và sự phát triển của gia đình.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Đề xuất giải pháp:</strong> Thay vì chỉ đổ lỗi, hãy cùng nhau đưa ra những giải pháp có thể dung hòa được ý kiến của cả hai bên.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4. Rèn luyện bản lĩnh cá nhân</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Không lệ thuộc hoàn toàn:</strong> Xem lời khuyên của cha mẹ như một nguồn tham khảo quan trọng, nhưng vẫn giữ khả năng tự suy nghĩ và quyết định.</span>
            </li>
            <li className="flex items-start text-gray-700 text-lg text-justify">
              <span className="mr-3">•</span>
              <span><strong>Chịu trách nhiệm:</strong> Học cách chịu trách nhiệm cho những lựa chọn của mình, đó là một biểu hiện của sự trưởng thành.</span>
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Mỗi thành viên trong gia đình đều có vai trò và trách nhiệm riêng để xây dựng mối quan hệ tốt đẹp. Cha mẹ cần mở lòng, lắng nghe và chấp nhận sự khác biệt của con cái, trong khi con cái cũng cần hiểu và tôn trọng những giá trị của cha mẹ. Giao tiếp cởi mở và sự thấu hiểu lẫn nhau là chìa khóa để giảm bớt mâu thuẫn và tạo dựng mối quan hệ gia đình bền vững.
          </p>
        </div>

        <div className="mb-6 flex justify-center px-8">
            <img 
              src="/src/image/MauThuanGiaDinh/image6.png" 
              alt="Mâu thuẫn gia đình" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
      </div>
    </div>
  );
}
