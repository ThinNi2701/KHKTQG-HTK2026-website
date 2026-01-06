// Dữ liệu 40 câu hỏi trắc nghiệm
const questions = [
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình",
      "Ngôn ngữ đánh dấu",
      "Hệ điều hành",
      "Cơ sở dữ liệu"
    ],
    correct: 1
  },
  {
    question: "CSS dùng để làm gì?",
    options: [
      "Xử lý logic",
      "Trang trí giao diện",
      "Quản lý database",
      "Chạy server"
    ],
    correct: 1
  },
  {
    question: "JavaScript là ngôn ngữ gì?",
    options: [
      "Ngôn ngữ đánh dấu",
      "Ngôn ngữ lập trình",
      "Hệ điều hành",
      "Trình biên dịch"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để tạo đường link trong HTML?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correct: 1
  },
  {
    question: "Thuộc tính nào dùng để thay đổi màu chữ trong CSS?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correct: 2
  },
  {
    question: "Cú pháp nào đúng để khai báo biến trong JavaScript?",
    options: [
      "variable x = 5;",
      "var x = 5;",
      "v x = 5;",
      "dim x = 5;"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để chèn hình ảnh trong HTML?",
    options: [
      "<image>",
      "<picture>",
      "<img>",
      "<photo>"
    ],
    correct: 2
  },
  {
    question: "Thuộc tính nào dùng để căn giữa text trong CSS?",
    options: [
      "align: center;",
      "text-align: center;",
      "center-text: true;",
      "text-center: yes;"
    ],
    correct: 1
  },
  {
    question: "Hàm nào hiển thị thông báo trong JavaScript?",
    options: [
      "msg()",
      "alert()",
      "prompt()",
      "display()"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để tạo danh sách không có thứ tự?",
    options: [
      "<ol>",
      "<ul>",
      "<list>",
      "<dl>"
    ],
    correct: 1
  },
  {
    question: "Box model trong CSS gồm những phần nào?",
    options: [
      "Margin, Border, Padding, Content",
      "Header, Body, Footer",
      "Top, Right, Bottom, Left",
      "Width, Height, Color"
    ],
    correct: 0
  },
  {
    question: "Cách nào để comment trong HTML?",
    options: [
      "// comment",
      "/* comment */",
      "<!-- comment -->",
      "# comment"
    ],
    correct: 2
  },
  {
    question: "Thuộc tính nào dùng để thay đổi kích thước font?",
    options: [
      "text-size",
      "font-size",
      "text-style",
      "font-weight"
    ],
    correct: 1
  },
  {
    question: "Phương thức nào dùng để lấy element theo ID?",
    options: [
      "getElement(id)",
      "getElementById(id)",
      "getID(element)",
      "findElement(id)"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để tạo bảng trong HTML?",
    options: [
      "<table>",
      "<tab>",
      "<grid>",
      "<board>"
    ],
    correct: 0
  },
  {
    question: "Thuộc tính nào dùng để ẩn element trong CSS?",
    options: [
      "visibility: none;",
      "display: none;",
      "hidden: true;",
      "show: false;"
    ],
    correct: 1
  },
  {
    question: "Kiểu dữ liệu nào KHÔNG có trong JavaScript?",
    options: [
      "String",
      "Boolean",
      "Float",
      "Number"
    ],
    correct: 2
  },
  {
    question: "Thẻ nào dùng để tạo form nhập liệu?",
    options: [
      "<input>",
      "<form>",
      "<field>",
      "<data>"
    ],
    correct: 1
  },
  {
    question: "Thuộc tính nào dùng để thêm khoảng cách bên trong element?",
    options: [
      "margin",
      "padding",
      "spacing",
      "gap"
    ],
    correct: 1
  },
  {
    question: "Vòng lặp nào KHÔNG có trong JavaScript?",
    options: [
      "for",
      "while",
      "foreach",
      "repeat"
    ],
    correct: 3
  },
  {
    question: "Thẻ nào dùng để định nghĩa tiêu đề lớn nhất?",
    options: [
      "<h6>",
      "<h1>",
      "<header>",
      "<title>"
    ],
    correct: 1
  },
  {
    question: "Thuộc tính nào dùng để thay đổi màu nền?",
    options: [
      "color",
      "bg-color",
      "background-color",
      "background"
    ],
    correct: 2
  },
  {
    question: "Toán tử nào dùng để so sánh giá trị và kiểu dữ liệu?",
    options: [
      "==",
      "===",
      "=",
      "!="
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để tạo button trong HTML?",
    options: [
      "<btn>",
      "<button>",
      "<input type='button'>",
      "Cả B và C"
    ],
    correct: 3
  },
  {
    question: "Đơn vị nào KHÔNG phải của CSS?",
    options: [
      "px",
      "em",
      "pt",
      "kb"
    ],
    correct: 3
  },
  {
    question: "Cách nào để tạo mảng trong JavaScript?",
    options: [
      "var arr = []",
      "var arr = ()",
      "var arr = {}",
      "var arr = <>"
    ],
    correct: 0
  },
  {
    question: "Thẻ nào dùng để nhóm các element inline?",
    options: [
      "<div>",
      "<span>",
      "<group>",
      "<section>"
    ],
    correct: 1
  },
  {
    question: "Thuộc tính nào dùng để làm chữ in đậm?",
    options: [
      "font-weight: bold;",
      "text-style: bold;",
      "font-bold: true;",
      "text-weight: heavy;"
    ],
    correct: 0
  },
  {
    question: "Phương thức nào dùng để thêm element vào cuối mảng?",
    options: [
      "add()",
      "append()",
      "push()",
      "insert()"
    ],
    correct: 2
  },
  {
    question: "Thẻ nào dùng để tạo dropdown list?",
    options: [
      "<list>",
      "<select>",
      "<dropdown>",
      "<options>"
    ],
    correct: 1
  },
  {
    question: "Position nào làm element cố định khi scroll?",
    options: [
      "static",
      "relative",
      "absolute",
      "fixed"
    ],
    correct: 3
  },
  {
    question: "Cách nào để viết hàm trong JavaScript?",
    options: [
      "function myFunc()",
      "def myFunc()",
      "func myFunc()",
      "create myFunc()"
    ],
    correct: 0
  },
  {
    question: "Thẻ nào dùng để tạo textarea?",
    options: [
      "<input type='text'>",
      "<textarea>",
      "<text>",
      "<area>"
    ],
    correct: 1
  },
  {
    question: "Thuộc tính nào dùng để thay đổi độ trong suốt?",
    options: [
      "visibility",
      "transparency",
      "opacity",
      "alpha"
    ],
    correct: 2
  },
  {
    question: "Event nào xảy ra khi click vào element?",
    options: [
      "onmouseclick",
      "onclick",
      "onpress",
      "ontouch"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để nhúng video?",
    options: [
      "<video>",
      "<media>",
      "<movie>",
      "<clip>"
    ],
    correct: 0
  },
  {
    question: "Flexbox dùng để làm gì?",
    options: [
      "Tạo animation",
      "Căn chỉnh layout",
      "Thay đổi màu sắc",
      "Thêm hiệu ứng"
    ],
    correct: 1
  },
  {
    question: "Phương thức nào chuyển string thành số?",
    options: [
      "toNumber()",
      "parseInt()",
      "convertNumber()",
      "stringToInt()"
    ],
    correct: 1
  },
  {
    question: "Thẻ nào dùng để tạo checkbox?",
    options: [
      "<input type='check'>",
      "<checkbox>",
      "<input type='checkbox'>",
      "<check>"
    ],
    correct: 2
  },
  {
    question: "Thuộc tính nào dùng để làm tròn góc border?",
    options: [
      "corner-radius",
      "border-radius",
      "round-corner",
      "edge-radius"
    ],
    correct: 1
  }
];

// Hàm bắt đầu làm bài
function startQuiz() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <p><strong>Câu ${index + 1}:</strong> ${q.question}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label>
      `).join("")}
    `;

    quizForm.appendChild(div);
  });

  // Scroll to top
  window.scrollTo(0, 0);
}

// Hàm nộp bài và tính điểm
function submitQuiz() {
  let score = 0;
  let answered = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      answered++;
      if (parseInt(selected.value) === q.correct) {
        score++;
      }
    }
  });

  // Kiểm tra xem đã trả lời hết chưa
  if (answered < questions.length) {
    const unanswered = questions.length - answered;
    if (!confirm(`Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài?`)) {
      return;
    }
  }

  // Hiển thị kết quả
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").innerText =
    `Bạn trả lời đúng ${score} / ${questions.length} câu (${Math.round(score/questions.length*100)}%)`;

  let evaluation = "";
  if (score >= 36) evaluation = "🌟 Xuất sắc! Bạn nắm vững kiến thức!";
  else if (score >= 30) evaluation = "✅ Tốt! Bạn đã làm rất tốt!";
  else if (score >= 20) evaluation = "⚠️ Trung bình. Cần ôn tập thêm!";
  else evaluation = "❌ Cần cải thiện. Hãy học lại nhé!";

  document.getElementById("evaluation").innerText = evaluation;

  // Scroll to top
  window.scrollTo(0, 0);
}
