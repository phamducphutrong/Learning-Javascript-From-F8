// Toán tử so sánh - P2
// === -> so sánh sự giống nhau tuyệt đối cả về giá trị và kiểu dữ liệu
// !== -> so sánh sự khác nhau tuyệt đối cả về giá trị và kiểu dữ liệu

var a = 1;
var b = '1';
console.log(a == b) // kết quả là true (kết quả này sai vì a là number còn b là string)
console.log(a === b) // kết quả là false (kết quả này đúng vì a là number còn b là string)