// includes method dùng để kiểm tra xem sự tồn tại của một chuỗi nằm trong một chuỗi khác hoặc một phần tử nằm trong một mảng

// phương thức includes là 1 phương thức có sẵn trong đối tượng String và Array.
console.log(String.prototype.includes);
console.log(Array.prototype.includes); 

var title = 'responsive web design';
console.log(title.includes('responsive')); // kết quả: true
console.log(title.includes('responsive', 1)) // kết quả: false, phương thức includes cho phép tham số thứ 2 sẽ là vị trí bắt đầu kiểm tra

var courses = ['javascript', 'PHP', 'Ruby'];
console.log(courses.includes('Ruby')); // kết quả: true
console.log(courses.includes('javascript', 1)); // kết quả: false, phương thức includes cho phép tham số thứ 2 sẽ là vị trí bắt đầu kiểm tra