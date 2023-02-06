/*
Giới thiệu một số hàm built-in cơ bản
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
*/

alert('Đây là 1 ví dụ về hàm alert (built-in function)') // hàm alert hiển thị thông báo và nút ok

// console có rất nhiều hàm con được dùng để hiển thị và tương tác với giao diện bảng điều khiển console
console.log('Đây là 1 thông tin hiển thị ra màn hình console') // hiển thị thông tin ra màn hình console
var fullName = 'Phạm Đức Phú Trọng';
console.log(fullName) // hiển thị giá trị của fullName ra màn hình console
console.warn(fullName) // hiển thị giá trị của fullName ra màn hình console với giao diện màu vàng
console.error(fullName) // hiển thị giá trị của fullName ra màn hình console với giao diện màu đỏ

confirm('Xác nhận bạn đủ tuổi!') // hiển thị đoạn chữ trong ngoặc kèm theo 2 nút ok và cancel
prompt('Xác nhận bạn đủ tuổi!') // hiển thị đoạn chữ trong ngoặc kèm theo 2 nút ok và cancel và 1 input để nhập ký tự

setTimeout(function() { // setTimeout nhận 2 tham số, tham số đầu là 1 function và tham số sau là khoảng thời gian chờ để function được thực hiện, khoảng thời gian này được tính theo mili giây. setTimeout chỉ chạy 1 lần duy nhất
    alert('Thông báo này hiển thị sau 1s')
}, 1000)

setInterval(function() { // setInterval tương tự như setTimeout nhưng sau khoảng thời gian bằng tham số thứ 2 thì function ở tham số thứ nhất sẽ được chạy lại
    console.log('Thông báo này hiển thị sau 1s')
}, 1000)


