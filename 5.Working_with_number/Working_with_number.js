/*
Kiểu số (Number) trong javascript
1. Tạo giá trị number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type
2. Làm việc với number
    - To string
    - To fixed
*/

var age = 20; // Nên dùng cách này
var PI = 3.14; // Nên dùng cách này
var otherNumber = new Number(9); // Tạo ra 1 đối tượng, không nên dùng cách này để tạo số

console.log(typeof age) // Kết quả: number
console.log(typeof PI) // Kết quả: number
console.log(typeof otherNumber) // Kết quả: object

var result = 20 / 'ABCD';
console.log(result) // Kết quả: NaN
console.log(typeof result) // Kết quả: number => NaN là một đại diện cho một số không phải là số mặc dù typeof của NaN vẫn là number
console.log(isNaN(result)) // Kết quả: true, isNaN là 1 hàm để kiểm trả xem 1 só có phải là NaN hay không, nếu có trả về true nếu không thì false

console.log(age.toString()) // ép kiểu số về kiểu chuỗi
console.log(typeof age.toString()) // kết quả: string (kiểm tra kiểu dữ liệu của age sau khi toString)

console.log(PI.toFixed()) // làm tròn số và chuyển về dạng string (Nếu không truyền tham số thì mặc định của nó là 0). Nếu giá trị thập phân mà nhở hơn 5 thì sẽ làm tròn xuống còn lớn hơn 5 thì làm tròn lên.
console.log(typeof PI.toFixed()) // kết quả: string (kiểm tra kiểu dữ liệu của PI sau khi toFixed)
console.log(PI.toFixed(1)) // kết quả: 3.1 (đối số '1' thể hiện số lượng chữ số thập phân sẽ giữ lại)