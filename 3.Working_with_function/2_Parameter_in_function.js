/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - nhiều tham số
2. Truyền tham số?
    - 1 tham số
    - nhiều tham số
3. Arguments?
    - Đối tượng Arguments
    - Giới thiệu vòng for of
*/

function writeLog() {
    console.log('Day la 1 dong log');
}

writeLog();

function writeLogUsingParameter(message) { // message được gọi là tham số (parameter)
    console.log(message);
}

writeLogUsingParameter('Hi, Day la 1 dong log'); // 'Hi, Day la 1 dong log' được gọi là đối số (argument)

function writeLogUsingParameter(message, message_2) { // Hàm gồm nhiều tham số
    console.log(message);
    console.log(message_2);
}

writeLogUsingParameter('Log 1', 'Log 2');

function writeLogUsingParameter(message, message_2) { // Hàm gồm nhiều tham số
    console.log(message);
    console.log(message_2);
}

writeLogUsingParameter('Log 1'); // Trong trường hợp hàm có nhiều tham số mà khi gọi hàm chúng ta không truyền đủ đối số thì trong javascript sẽ không xảy ra lỗi mà những tham số sẽ có giá trị là undefined

function writeLog() {
    var myString = ''
    for (var parameter of arguments) { // Trong trường hợp người dùng muốn truyền n số lượng đối số, ta sẽ sử dụng đối tượng arguments để xử lý. Giá trị của nó sẽ là một mảng chưa tất cả các giá trị đối số truyền vào. Vì vậy ta không cân định nghĩa tham số khi sử dụng đối tượng arguments.
        myString += `${parameter} - `;
    }
    console.log(myString);
}

writeLog('Log 1', 'Log 2', 'Log 3');