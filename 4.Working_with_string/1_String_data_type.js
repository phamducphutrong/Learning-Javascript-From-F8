/*
Chuỗi trong javascript
1. Tạo chuỗi
    - Các cách tạo chuỗi?
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số trường hợp sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Template string ES6
*/

var fullName = 'Phu Trong' // Cách tạo chuỗi 1 - cách này nên được sử dụng
var fullName_2 = new String('Phu Trong'); // Cách tạo chuỗi 2 - typeof là object => không nên sử dụng cách này

var fullName_3 = 'Phu Trong la \'Sieu Nhan\'';
console.log(fullName_3); // Kết quả in ra: Phu Trong la 'Sieu Nhan'

var fullName_4 = 'Đây là dấu backslash \\';
console.log(fullName_3); // Kết quả in ra: Đây là dấu backslash \

console.log(fullName.length); // Lấy độ dài của chuỗi.

var firstName = 'Phu';
var lastName = 'Dang';

console.log('Toi la: ', firstName + ' ' + lastName); // Đây là cách sử dụng để in mà không có template string
console.log(`Toi la: ${firstName} ${lastName}`); // Đây là template string