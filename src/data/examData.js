// Mock data for the ExamUI application

export const userProfile = {
  name: 'Học sinh',
  avatar: null,
};

export const examSets = [
  {
    id: 'dgnl-6',
    title: 'ĐỀ KHẢO SÁT ĐGNL 6 MINH HỌA MỚI NHẤT',
    image: '/exam-thumbnail.jpg',
    progress: 100,
    lastAccessTime: '15:14, 23/02/2026',
    exams: [
      {
        id: 'ky-nang-ngon-ngu',
        title: 'KỸ NĂNG NGÔN NGỮ',
        completed: true,
        completedAt: '09:52, 22/02/2026',
        duration: 60, // minutes
        attempts: 'Nhiều lần',
        description: 'Đề thi này chưa có mô tả',
        sections: [
          {
            id: 'tieng-viet',
            title: 'Ngôn ngữ Tiếng Việt',
            questions: [
              {
                id: 1,
                content: 'Có bao nhiêu động từ trong câu:\nĐôi bàn tay ấy dù là ôm con, dù là nâng niu con nhưng không bao giờ bao che cho những lỗi lầm của con.',
                options: [
                  { key: 'A', value: '2 động từ' },
                  { key: 'B', value: '5 động từ' },
                  { key: 'C', value: '3 động từ' },
                  { key: 'D', value: '4 động từ' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 2,
                content: 'Các từ "tháng mười", "sân", "cây trứng cá" trong câu: Đổ gần cuối tháng mười, lúa về sẵn, ba mạ ngồi quây lừa giữa trưa, bóng hai cây trứng cá đã bị tỉa thưa cảnh không đủ suốc ngăn bớt cái nóng bừng bừng, mồ hôi chảy dài, bê bết tóc. (Nguyễn Ngọc Tư – Sân nhà) thuộc từ loại nào?',
                options: [
                  { key: 'A', value: 'Động từ' },
                  { key: 'B', value: 'Tính từ' },
                  { key: 'C', value: 'Danh từ' },
                  { key: 'D', value: 'Kết từ' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 3,
                content: 'Từ "lá" trong câu nào sau đây được dùng theo nghĩa gốc?',
                options: [
                  { key: 'A', value: 'Mùa thu, cây cối thay lá vàng.' },
                  { key: 'B', value: 'Lá phổi của anh ấy bị tổn thương.' },
                  { key: 'C', value: 'Lá cờ tung bay trong gió.' },
                  { key: 'D', value: 'Lá đơn đã được gửi đi.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 4,
                content: 'Câu nào sau đây là câu ghép?',
                options: [
                  { key: 'A', value: 'Trời mưa to, đường ngập nước.' },
                  { key: 'B', value: 'Cô ấy rất xinh đẹp và thông minh.' },
                  { key: 'C', value: 'Học sinh chăm chỉ làm bài tập.' },
                  { key: 'D', value: 'Mẹ tôi nấu cơm rất ngon.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 5,
                content: 'Biện pháp tu từ nào được sử dụng trong câu: "Mặt trời xuống biển như hòn lửa"?',
                options: [
                  { key: 'A', value: 'Nhân hóa' },
                  { key: 'B', value: 'So sánh' },
                  { key: 'C', value: 'Ẩn dụ' },
                  { key: 'D', value: 'Hoán dụ' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 6,
                content: 'Từ nào sau đây là từ láy?',
                options: [
                  { key: 'A', value: 'Xinh xắn' },
                  { key: 'B', value: 'Học hành' },
                  { key: 'C', value: 'Xe cộ' },
                  { key: 'D', value: 'Nhà cửa' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 7,
                content: 'Chủ ngữ trong câu "Dưới bóng tre xanh, đã từ lâu đời, người dân cày Việt Nam dựng nhà, dựng cửa, vỡ ruộng, khai hoang" là gì?',
                options: [
                  { key: 'A', value: 'Dưới bóng tre xanh' },
                  { key: 'B', value: 'Người dân cày Việt Nam' },
                  { key: 'C', value: 'Đã từ lâu đời' },
                  { key: 'D', value: 'Dựng nhà, dựng cửa' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 8,
                content: 'Thành ngữ nào sau đây có nghĩa là "rất nhanh"?',
                options: [
                  { key: 'A', value: 'Nhanh như cắt' },
                  { key: 'B', value: 'Chậm như rùa' },
                  { key: 'C', value: 'Nước đổ lá khoai' },
                  { key: 'D', value: 'Ăn quả nhớ kẻ trồng cây' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 9,
                content: 'Từ "xuân" trong câu "Ngày xuân con én đưa thoi" thuộc từ loại nào?',
                options: [
                  { key: 'A', value: 'Động từ' },
                  { key: 'B', value: 'Tính từ' },
                  { key: 'C', value: 'Danh từ' },
                  { key: 'D', value: 'Phó từ' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 10,
                content: 'Câu nào sau đây sử dụng phép nhân hóa?',
                options: [
                  { key: 'A', value: 'Ông mặt trời tỏa nắng ấm áp.' },
                  { key: 'B', value: 'Mặt trời chiếu sáng rực rỡ.' },
                  { key: 'C', value: 'Nắng vàng rực rỡ trên đồng.' },
                  { key: 'D', value: 'Trời hôm nay thật đẹp.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 11,
                content: 'Từ "đầu" trong câu nào sau đây được dùng theo nghĩa chuyển?',
                options: [
                  { key: 'A', value: 'Đầu cầu có một quán nước.' },
                  { key: 'B', value: 'Em bé có cái đầu tròn.' },
                  { key: 'C', value: 'Anh ấy bị đau đầu.' },
                  { key: 'D', value: 'Cô ấy gật đầu đồng ý.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 12,
                content: 'Nghĩa của thành ngữ "Mắt nhắm mắt mở" là gì?',
                options: [
                  { key: 'A', value: 'Trạng thái nửa tỉnh nửa mê, chưa tỉnh ngủ hẳn.' },
                  { key: 'B', value: 'Nhìn không rõ ràng.' },
                  { key: 'C', value: 'Giả vờ không nhìn thấy.' },
                  { key: 'D', value: 'Bị đau mắt.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 13,
                content: 'Câu "Sóng đã cài then, đêm sập cửa" sử dụng biện pháp tu từ gì?',
                options: [
                  { key: 'A', value: 'So sánh' },
                  { key: 'B', value: 'Ẩn dụ' },
                  { key: 'C', value: 'Nhân hóa' },
                  { key: 'D', value: 'Hoán dụ' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 14,
                content: 'Từ "tay" trong "tay nghề cao" thuộc nghĩa nào?',
                options: [
                  { key: 'A', value: 'Nghĩa gốc' },
                  { key: 'B', value: 'Nghĩa chuyển (ẩn dụ)' },
                  { key: 'C', value: 'Nghĩa chuyển (hoán dụ)' },
                  { key: 'D', value: 'Nghĩa đen' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 15,
                content: 'Dòng nào sau đây chỉ gồm các từ ghép đẳng lập?',
                options: [
                  { key: 'A', value: 'Quần áo, giày dép, sách vở' },
                  { key: 'B', value: 'Xe đạp, tàu hỏa, máy bay' },
                  { key: 'C', value: 'Hoa hồng, cá vàng, bút chì' },
                  { key: 'D', value: 'Nhà cửa, xe máy, bàn ghế' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 16,
                content: 'Trong câu "Lòng ta vui như hội", phó từ là từ nào?',
                options: [
                  { key: 'A', value: 'Lòng' },
                  { key: 'B', value: 'Ta' },
                  { key: 'C', value: 'Vui' },
                  { key: 'D', value: 'Như' },
                ],
                correctAnswer: 'D',
              },
              {
                id: 17,
                content: 'Câu nào sau đây là câu cầu khiến?',
                options: [
                  { key: 'A', value: 'Hãy giữ gìn sức khỏe nhé!' },
                  { key: 'B', value: 'Trời ơi, đẹp quá!' },
                  { key: 'C', value: 'Bạn đi đâu đấy?' },
                  { key: 'D', value: 'Hôm nay trời đẹp lắm.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 18,
                content: 'Từ "mắt" trong "mắt na" và "mắt người" có quan hệ gì?',
                options: [
                  { key: 'A', value: 'Đồng âm' },
                  { key: 'B', value: 'Đồng nghĩa' },
                  { key: 'C', value: 'Nhiều nghĩa' },
                  { key: 'D', value: 'Trái nghĩa' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 19,
                content: 'Trạng ngữ trong câu "Sáng nay, em đi học rất sớm" là gì?',
                options: [
                  { key: 'A', value: 'Em' },
                  { key: 'B', value: 'Sáng nay' },
                  { key: 'C', value: 'Đi học' },
                  { key: 'D', value: 'Rất sớm' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 20,
                content: 'Từ láy "long lanh" thuộc loại từ láy nào?',
                options: [
                  { key: 'A', value: 'Láy toàn bộ' },
                  { key: 'B', value: 'Láy bộ phận (vần)' },
                  { key: 'C', value: 'Láy bộ phận (âm đầu)' },
                  { key: 'D', value: 'Láy bộ phận (thanh)' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 21,
                content: 'Câu "Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín" sử dụng phép tu từ nào?',
                options: [
                  { key: 'A', value: 'Nhân hóa và điệp ngữ' },
                  { key: 'B', value: 'So sánh và ẩn dụ' },
                  { key: 'C', value: 'Hoán dụ và liệt kê' },
                  { key: 'D', value: 'Nói quá và nói giảm' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 22,
                content: 'Từ "chạy" trong "đồng hồ chạy" được dùng theo nghĩa nào?',
                options: [
                  { key: 'A', value: 'Nghĩa gốc' },
                  { key: 'B', value: 'Nghĩa chuyển' },
                  { key: 'C', value: 'Nghĩa đen' },
                  { key: 'D', value: 'Nghĩa tường minh' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 23,
                content: 'Câu ghép nào sau đây có quan hệ nguyên nhân - kết quả?',
                options: [
                  { key: 'A', value: 'Vì trời mưa nên đường trơn.' },
                  { key: 'B', value: 'Tuy nghèo nhưng anh ấy rất hào phóng.' },
                  { key: 'C', value: 'Nếu chăm học thì sẽ đậu.' },
                  { key: 'D', value: 'Trời mưa và gió thổi mạnh.' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 24,
                content: 'Từ nào sau đây là từ Hán Việt?',
                options: [
                  { key: 'A', value: 'Sơn hà' },
                  { key: 'B', value: 'Núi sông' },
                  { key: 'C', value: 'Xinh đẹp' },
                  { key: 'D', value: 'Lung linh' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 25,
                content: 'Vị ngữ trong câu "Bầu trời sáng trong và gió nhẹ" là gì?',
                options: [
                  { key: 'A', value: 'Bầu trời' },
                  { key: 'B', value: 'Sáng trong' },
                  { key: 'C', value: 'Sáng trong và gió nhẹ' },
                  { key: 'D', value: 'Gió nhẹ' },
                ],
                correctAnswer: 'C',
              },
            ],
          },
          {
            id: 'tieng-anh',
            title: 'Ngôn ngữ Tiếng Anh',
            questions: [
              {
                id: 26,
                content: 'Choose the correct answer: She _____ to school every day.',
                options: [
                  { key: 'A', value: 'go' },
                  { key: 'B', value: 'goes' },
                  { key: 'C', value: 'going' },
                  { key: 'D', value: 'gone' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 27,
                content: 'The synonym of "happy" is:',
                options: [
                  { key: 'A', value: 'Sad' },
                  { key: 'B', value: 'Angry' },
                  { key: 'C', value: 'Joyful' },
                  { key: 'D', value: 'Tired' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 28,
                content: 'Choose the correct form: If I _____ rich, I would travel the world.',
                options: [
                  { key: 'A', value: 'am' },
                  { key: 'B', value: 'was' },
                  { key: 'C', value: 'were' },
                  { key: 'D', value: 'be' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 29,
                content: 'Which sentence is in the passive voice?',
                options: [
                  { key: 'A', value: 'The cat caught the mouse.' },
                  { key: 'B', value: 'The mouse was caught by the cat.' },
                  { key: 'C', value: 'The cat is catching the mouse.' },
                  { key: 'D', value: 'The cat will catch the mouse.' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 30,
                content: 'Choose the correct preposition: She is interested _____ music.',
                options: [
                  { key: 'A', value: 'on' },
                  { key: 'B', value: 'at' },
                  { key: 'C', value: 'in' },
                  { key: 'D', value: 'for' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 31,
                content: 'The antonym of "ancient" is:',
                options: [
                  { key: 'A', value: 'Old' },
                  { key: 'B', value: 'Modern' },
                  { key: 'C', value: 'Historical' },
                  { key: 'D', value: 'Traditional' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 32,
                content: 'Choose the correct tense: By next year, I _____ graduated.',
                options: [
                  { key: 'A', value: 'will' },
                  { key: 'B', value: 'will have' },
                  { key: 'C', value: 'have' },
                  { key: 'D', value: 'had' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 33,
                content: 'Which word is a noun?',
                options: [
                  { key: 'A', value: 'Beautiful' },
                  { key: 'B', value: 'Quickly' },
                  { key: 'C', value: 'Happiness' },
                  { key: 'D', value: 'Run' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 34,
                content: 'Choose the correct sentence:',
                options: [
                  { key: 'A', value: 'He don\'t like coffee.' },
                  { key: 'B', value: 'He doesn\'t likes coffee.' },
                  { key: 'C', value: 'He doesn\'t like coffee.' },
                  { key: 'D', value: 'He not like coffee.' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 35,
                content: 'The phrase "break down" means:',
                options: [
                  { key: 'A', value: 'To repair' },
                  { key: 'B', value: 'To stop functioning' },
                  { key: 'C', value: 'To speed up' },
                  { key: 'D', value: 'To build up' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 36,
                content: 'Choose the correct relative pronoun: The man _____ lives next door is a doctor.',
                options: [
                  { key: 'A', value: 'which' },
                  { key: 'B', value: 'whom' },
                  { key: 'C', value: 'who' },
                  { key: 'D', value: 'whose' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 37,
                content: 'Which sentence uses the present perfect correctly?',
                options: [
                  { key: 'A', value: 'I have went to Paris.' },
                  { key: 'B', value: 'I have been to Paris.' },
                  { key: 'C', value: 'I have go to Paris.' },
                  { key: 'D', value: 'I have going to Paris.' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 38,
                content: 'The word "quickly" is a/an:',
                options: [
                  { key: 'A', value: 'Noun' },
                  { key: 'B', value: 'Adjective' },
                  { key: 'C', value: 'Adverb' },
                  { key: 'D', value: 'Verb' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 39,
                content: 'Choose the correct answer: Neither the teacher nor the students _____ absent.',
                options: [
                  { key: 'A', value: 'is' },
                  { key: 'B', value: 'are' },
                  { key: 'C', value: 'was' },
                  { key: 'D', value: 'am' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 40,
                content: 'The idiom "once in a blue moon" means:',
                options: [
                  { key: 'A', value: 'Very often' },
                  { key: 'B', value: 'Never' },
                  { key: 'C', value: 'Very rarely' },
                  { key: 'D', value: 'Every night' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 41,
                content: 'Choose the correct comparative form: This book is _____ than that one.',
                options: [
                  { key: 'A', value: 'more interesting' },
                  { key: 'B', value: 'interestinger' },
                  { key: 'C', value: 'most interesting' },
                  { key: 'D', value: 'more interestinger' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 42,
                content: 'Which is the correct conditional type 2?',
                options: [
                  { key: 'A', value: 'If it rains, I will stay home.' },
                  { key: 'B', value: 'If it rained, I would stay home.' },
                  { key: 'C', value: 'If it had rained, I would have stayed home.' },
                  { key: 'D', value: 'If it rains, I stay home.' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 43,
                content: 'Choose the correct article: _____ sun rises in the east.',
                options: [
                  { key: 'A', value: 'A' },
                  { key: 'B', value: 'An' },
                  { key: 'C', value: 'The' },
                  { key: 'D', value: 'No article' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 44,
                content: 'The plural form of "child" is:',
                options: [
                  { key: 'A', value: 'Childs' },
                  { key: 'B', value: 'Children' },
                  { key: 'C', value: 'Childes' },
                  { key: 'D', value: 'Childrens' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 45,
                content: 'Choose the correct form: I look forward to _____ you.',
                options: [
                  { key: 'A', value: 'see' },
                  { key: 'B', value: 'seeing' },
                  { key: 'C', value: 'seen' },
                  { key: 'D', value: 'saw' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 46,
                content: 'Which sentence has the correct word order?',
                options: [
                  { key: 'A', value: 'Always she is late.' },
                  { key: 'B', value: 'She always is late.' },
                  { key: 'C', value: 'She is always late.' },
                  { key: 'D', value: 'She is late always.' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 47,
                content: 'The past participle of "write" is:',
                options: [
                  { key: 'A', value: 'Wrote' },
                  { key: 'B', value: 'Writed' },
                  { key: 'C', value: 'Written' },
                  { key: 'D', value: 'Writing' },
                ],
                correctAnswer: 'C',
              },
              {
                id: 48,
                content: 'Choose the correct tag question: She is a student, _____?',
                options: [
                  { key: 'A', value: 'is she' },
                  { key: 'B', value: 'isn\'t she' },
                  { key: 'C', value: 'does she' },
                  { key: 'D', value: 'doesn\'t she' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 49,
                content: 'The word "beautiful" is a/an:',
                options: [
                  { key: 'A', value: 'Noun' },
                  { key: 'B', value: 'Adjective' },
                  { key: 'C', value: 'Adverb' },
                  { key: 'D', value: 'Verb' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 50,
                content: 'Choose the correct sentence:',
                options: [
                  { key: 'A', value: 'I have been living here since 5 years.' },
                  { key: 'B', value: 'I have been living here for 5 years.' },
                  { key: 'C', value: 'I am living here since 5 years.' },
                  { key: 'D', value: 'I live here since 5 years.' },
                ],
                correctAnswer: 'B',
              },
            ],
          },
        ],
      },
      {
        id: 'ky-nang-tu-duy',
        title: 'KỸ NĂNG TƯ DUY',
        completed: true,
        completedAt: '10:21, 22/02/2026',
        duration: 60,
        attempts: 'Nhiều lần',
        description: 'Đề thi đánh giá kỹ năng tư duy logic và phân tích',
        sections: [
          {
            id: 'tu-duy-logic',
            title: 'Tư duy Logic',
            questions: [
              {
                id: 1,
                content: 'Số tiếp theo trong dãy: 2, 6, 12, 20, 30, ... là:',
                options: [
                  { key: 'A', value: '40' },
                  { key: 'B', value: '42' },
                  { key: 'C', value: '36' },
                  { key: 'D', value: '44' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 2,
                content: 'Nếu tất cả hoa hồng đều đỏ, và bông hoa này là hoa hồng, thì:',
                options: [
                  { key: 'A', value: 'Bông hoa này có thể không đỏ' },
                  { key: 'B', value: 'Bông hoa này chắc chắn đỏ' },
                  { key: 'C', value: 'Bông hoa này là hoa cúc' },
                  { key: 'D', value: 'Không kết luận được' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 3,
                content: 'Cho dãy: A, C, F, J, O, ... Chữ cái tiếp theo là:',
                options: [
                  { key: 'A', value: 'T' },
                  { key: 'B', value: 'U' },
                  { key: 'C', value: 'S' },
                  { key: 'D', value: 'V' },
                ],
                correctAnswer: 'B',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'toan-ltv-2013-2014',
    title: 'ĐỀ THI TOÁN LƯƠNG THẾ VINH NĂM HỌC 2013-2014',
    image: '/exam-thumbnail.jpg',
    progress: 0,
    lastAccessTime: '15:56, 23/02/2026',
    exams: [
      {
        id: 'toan-2013-2014',
        title: 'KỸ NĂNG TƯ DUY',
        completed: false,
        completedAt: null,
        duration: 60,
        attempts: 'Nhiều lần',
        description: 'Đề thi Toán chính thức vào lớp 6 Trường THCS & THPT Lương Thế Vinh năm học 2013-2014. Gồm 20 câu trắc nghiệm.',
        sections: [
          {
            id: 'toan-hoc',
            title: 'Toán học',
            questions: [
              {
                id: 1,
                content: 'Cho tam giác ABC, gọi M là trung điểm AB, N là trung điểm AC. Nếu diện tích tứ giác MNCB bằng 31,5 cm² thì diện tích tam giác ABC bằng bao nhiêu?',
                options: [
                  { key: 'A', value: '42 cm²' },
                  { key: 'B', value: '63 cm²' },
                  { key: 'C', value: '36 cm²' },
                  { key: 'D', value: '126 cm²' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 2,
                content: 'Một người nói: "Tôi sinh sau năm 1976, nhưng trước năm 1984. Cứ bốn năm tôi mới có một lần sinh nhật". Hỏi người đó sinh ngày nào, tháng nào, năm nào?',
                options: [
                  { key: 'A', value: 'Ngày 29 tháng 2 năm 1980' },
                  { key: 'B', value: 'Ngày 29 tháng 2 năm 1978' },
                  { key: 'C', value: 'Ngày 1 tháng 1 năm 1980' },
                  { key: 'D', value: 'Ngày 29 tháng 2 năm 1984' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 3,
                content: 'Một hình thang có diện tích 50 m², có đáy lớn bằng 13m và có chiều cao bằng 5m. Hãy tính độ dài đáy nhỏ.',
                options: [
                  { key: 'A', value: '5 m' },
                  { key: 'B', value: '7 m' },
                  { key: 'C', value: '8 m' },
                  { key: 'D', value: '6 m' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 4,
                content: 'Tìm ba số tự nhiên cách đều nhau biết tích của chúng là 935.',
                options: [
                  { key: 'A', value: '5, 11, 17' },
                  { key: 'B', value: '7, 11, 15' },
                  { key: 'C', value: '3, 11, 19' },
                  { key: 'D', value: '9, 11, 13' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 5,
                content: 'Cho ba khối đồng hình lập phương có cạnh lần lượt là 3m, 4m và 5m. Người ta đun chảy ba khối đồng đó để đúc thành một khối cũng hình lập phương. Tìm cạnh của khối đồng mới đúc.',
                options: [
                  { key: 'A', value: '5 m' },
                  { key: 'B', value: '6 m' },
                  { key: 'C', value: '7 m' },
                  { key: 'D', value: '8 m' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 6,
                content: 'Hai số a và 5a có trung bình cộng bằng 33. Số a bằng bao nhiêu?',
                options: [
                  { key: 'A', value: '9' },
                  { key: 'B', value: '8' },
                  { key: 'C', value: '13' },
                  { key: 'D', value: '15' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 7,
                content: 'Tìm ba số lẻ liên tiếp có tổng bằng 1113.',
                options: [
                  { key: 'A', value: '367, 369, 371' },
                  { key: 'B', value: '369, 371, 373' },
                  { key: 'C', value: '371, 373, 375' },
                  { key: 'D', value: '373, 375, 377' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 8,
                content: 'Một chiếc đồng hồ treo tường có kim phút dài 12 cm. Hỏi trong thời gian 15 phút đầu mũi kim đó đi được một quãng đường dài bao nhiêu?',
                options: [
                  { key: 'A', value: '6π cm (≈ 18,85 cm)' },
                  { key: 'B', value: '12π cm (≈ 37,7 cm)' },
                  { key: 'C', value: '24π cm (≈ 75,4 cm)' },
                  { key: 'D', value: '3π cm (≈ 9,42 cm)' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 9,
                content: 'Một bể đựng nước là một hình hộp chữ nhật có chiều dài 2,5m, chiều rộng 1,5m và chiều cao 2m. Một chiếc vòi chảy vào bể cứ 1 giờ chảy được 900 lít. Hỏi cần bao nhiêu thời gian để vòi nước chảy đầy bể?',
                options: [
                  { key: 'A', value: '8 giờ' },
                  { key: 'B', value: '8 giờ 20 phút' },
                  { key: 'C', value: '9 giờ' },
                  { key: 'D', value: '7 giờ 30 phút' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 10,
                content: 'Tính số A biết A = 1 + 1/4 + 3 × 1,25 − 3 : 1,25 + 2 × 1,2.',
                options: [
                  { key: 'A', value: '4' },
                  { key: 'B', value: '5' },
                  { key: 'C', value: '6' },
                  { key: 'D', value: '4,5' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 11,
                content: 'Tìm số A có hai chữ số, biết rằng A chia hết cho 9 và A + 1 chia hết cho 11.',
                options: [
                  { key: 'A', value: '45' },
                  { key: 'B', value: '54' },
                  { key: 'C', value: '36' },
                  { key: 'D', value: '72' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 12,
                content: 'Bốn hình vuông được xếp thành hình chữ T như hình vẽ. Mỗi hình vuông có cạnh 2cm. Tính diện tích tam giác ABC.',
                image: '/q12-grid.svg',
                options: [
                  { key: 'A', value: '6 cm²' },
                  { key: 'B', value: '8 cm²' },
                  { key: 'C', value: '10 cm²' },
                  { key: 'D', value: '12 cm²' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 13,
                content: 'Một phân số có mẫu số lớn hơn tử số 1 đơn vị. Khi cộng phân số đó với 1 ta được phân số mới có tử số lớn hơn mẫu số 1 đơn vị. Tìm phân số ban đầu.',
                options: [
                  { key: 'A', value: '1/2' },
                  { key: 'B', value: '2/3' },
                  { key: 'C', value: '3/4' },
                  { key: 'D', value: '4/5' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 14,
                content: 'Gọi A là diện tích hình tròn có bán kính 10m, B là diện tích hình chữ nhật có chiều dài bằng 20m và chiều rộng bằng 15,65m. Hãy so sánh A và B.',
                options: [
                  { key: 'A', value: 'A > B' },
                  { key: 'B', value: 'A = B' },
                  { key: 'C', value: 'A < B' },
                  { key: 'D', value: 'Không so sánh được' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 15,
                content: 'Mỗi ô vuông đều có một con số, biết rằng tổng các con số ở bốn ô liên tiếp đều bằng nhau. Tìm con số ở ô có dấu "?"',
                image: '/q15-grid.svg',
                options: [
                  { key: 'A', value: '3' },
                  { key: 'B', value: '7' },
                  { key: 'C', value: '5' },
                  { key: 'D', value: '15' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 16,
                content: 'Trong một lớp học, số học sinh nam bằng 3/4 số học sinh nữ và ít hơn số học sinh nữ 4 em. Tìm số học sinh của lớp đó.',
                options: [
                  { key: 'A', value: '24' },
                  { key: 'B', value: '28' },
                  { key: 'C', value: '32' },
                  { key: 'D', value: '36' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 17,
                content: 'Rút gọn phân số 1111/98879.',
                options: [
                  { key: 'A', value: '1/89' },
                  { key: 'B', value: '1/79' },
                  { key: 'C', value: '11/899' },
                  { key: 'D', value: '1/99' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 18,
                content: 'Trên hình vẽ ta có đường tròn tâm O, bán kính 10cm, tứ giác OABC là hình vuông với A và C nằm trên đường tròn. Tìm phần diện tích của hình vuông nằm ngoài đường tròn.',
                image: '/q18-circle.svg',
                options: [
                  { key: 'A', value: '100 − 25π cm² (≈ 21,46 cm²)' },
                  { key: 'B', value: '100 − 50π cm²' },
                  { key: 'C', value: '200 − 25π cm²' },
                  { key: 'D', value: '50 − 25π cm²' },
                ],
                correctAnswer: 'A',
              },
              {
                id: 19,
                content: 'Một hình chữ nhật có diện tích 60 m². Nếu tăng chiều dài của nó thêm 1m, còn chiều rộng để nguyên thì diện tích tăng thêm 5 m². Tính chu vi hình chữ nhật đó.',
                options: [
                  { key: 'A', value: '30 m' },
                  { key: 'B', value: '34 m' },
                  { key: 'C', value: '38 m' },
                  { key: 'D', value: '32 m' },
                ],
                correctAnswer: 'B',
              },
              {
                id: 20,
                content: 'Tính A = 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(99×100).',
                options: [
                  { key: 'A', value: '99/100' },
                  { key: 'B', value: '1/100' },
                  { key: 'C', value: '49/50' },
                  { key: 'D', value: '1/2' },
                ],
                correctAnswer: 'A',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getTotalQuestions = (exam) => {
  return exam.sections.reduce((total, section) => total + section.questions.length, 0);
};

export const getExamSet = (id) => {
  return examSets.find((set) => set.id === id);
};

export const getExam = (setId, examId) => {
  const set = getExamSet(setId);
  if (!set) return null;
  return set.exams.find((exam) => exam.id === examId);
};
