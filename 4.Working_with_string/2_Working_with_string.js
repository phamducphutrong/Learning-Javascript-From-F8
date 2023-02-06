// Làm việc với chuỗi
var myString = 'Pham Duc Phu Trong, Pham Duc Phu Trong';

// 1. Length
console.log(myString.length);

// 2. Find index

console.log(myString.indexOf('Duc')); // Kết quả: 4 (Lưu ý, indexOf chỉ trả về index của ký tự đầu tiên trong chuỗi có giá trị trùng với đối số truyền vào sau đó dừng lại, nếu có nhiều ký tự giống với đối số truyền vào thì nó vẫn sẽ trả về vị trí của kí tự đầu tiên nó tìm thấy)
console.log(myString.indexOf('Duc', 2)); // Kết quả: 4 (Lưu ý, indexOf cũng có thể nhận tham số thứ hai, tham số này thể hiện cho vị trí bắt đầu tìm kiếm hay còn gọi là start)
console.log(myString.lastIndexOf('n')); // Kết quả: 37 (Lưu ý, lastIndexOf sẽ trả về vị trí của ký tự cuối cùng trong chuỗi có cùng giá trị với đối số truyền vào, nếu không có thì sẽ trả về -1)
console.log(myString.indexOf('ABC')); // Kết quả: -1 (Lưu ý, indexOf sẽ trả về -1 nếu như không có ký tự nào trong chuỗi trùng với đối số truyền vào).
console.log(myString.search('Duc')) // Kết quả: 4 (Lưu ý, search tương tự như indexOf nhưng sẽ chỉ có 1 tham số và tham số này hỗ trợ biểu thức chính quy)

// 3. Cut string
console.log(myString.slice(0, 4)) // Kết quả: Pham
console.log(myString.slice(0)) // Cắt toàn bộ chuỗi
console.log(myString.slice(4)) // Bỏ qua 4 ký tự đầu và cắt toàn bộ ký tự từ index 4
console.log(myString.slice(0, -1)) // Cắt từ đầu đến length - 1 (hỗ trợ negative index)

// 4. Replace
console.log(myString.replace('Pham', 'Le')) // Kết quả: Le Duc Phu Trong, Pham Duc Phu Trong (Chú ý, hàm replace khi truyền đối số thứ nhất là 1 string bình thường thì sẽ chỉ có thể thay thế được thành chuỗi trong tham số thứ 2 duy nhất 1 lần đầu tiên khi tìm thấy)
console.log(myString.replace(/Pham/g, 'Le')) // Kết quả: Le Duc Phu Trong, Le Duc Phu Trong (Chú ý, khi dùng biểu thức chính quy thì có thể thay đổi tất các các chuỗi có giá trị giống đối số thứ nhất thành giá trị của đối số thứ hai chứ không phải thay thế duy nhất 1 lần đầu tiên khi tìm thấy)

// 5. Convert to uppercase
console.log(myString.toUpperCase());

// 6. Convert to lowercase
console.log(myString.toLocaleLowerCase());

// 7. Trim
var myString2 = '     Xin chao     ';
console.log(myString2.trim().length); // hàm trim giúp loại bỏ khoảng trắng ở 2 đầu của chuỗi

// 8. Split
var languages = ['Javascript', 'PHP', 'Ruby'];
console.log(languages.split(', ')) // hàm split này sẽ cắt chuỗi hiện tại thành 1 array tùy theo điểm chung (giá trị của tham số truyền vào).
var language = 'Javascript';
console.log(language.split('')) // dòng này sẽ in ra một mảng mà mỗi phần tử sẽ là 1 ký tự của giá trị được lưu trữ trong biến language

// 9. Get a character by index
var myString3 = 'Phu Trong';
console.log(myString3.charAt(0)) // Kết quả: P
console.log(myString3.charAt(100)) // Kết quả không có gì nhưng kiểu dữ liệu khi typeof ra là string nhưng bị rỗng
console.log(myString3[0]) // Kết quả: P
console.log(myString3[100]) // Kết quả: undefined





