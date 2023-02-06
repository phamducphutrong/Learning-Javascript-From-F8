/*
Các loại function
1. Declaration function
2. Expression function
3. Arrow function (học trong khóa nâng cao)
*/

function showMessage() { // Đây là 1 Declaration function
    console.log('Declaration function');
}

// Đối với Expression function thì có thể đặt tên hoặc không đặt tên, mục đích đặt tên cho Expression function đó là giúp người đọc dễ hiểu mục đích của function đó là gì

var showMessage_2 = function() { // Đây là 1 Expression function
    console.log('Expression function');
}

setTimeout(function autoLogin() {}, 1000); // Đây cũng 1 là Expression function đồng thời cũng có thể hiểu là 1 callback function khi nó là hàm được truyền trong 1 hàm khác

var myObject = {
    myFunction: function() {} // Đây cũng 1 là Expression function
}

// Sự khác biệt khi sử dụng Declaration function và Expression function:
showMessage();
showMessage_2();
// trong javascript có 1 khái niệm là hosting: cụ thể đối với Declaration function thì chúng ta có thể gọi function này trước khi định nghĩa ra nó còn Expression function thì không thể, chúng ta bắt buộc phải định nghĩa function trước sau đó mới có thể gọi function này được.
// Nói chung, Declaration function có thể gọi trước lúc định nghĩa còn Expression function thì phải gọi sau khi đã định nghĩa (code gọi phải ở dưới code định nghĩa).