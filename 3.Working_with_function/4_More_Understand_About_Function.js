/*
Một số điều cần biết về function
1. Khi function đặt trùng tên?
2. khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
*/

function showMessage() {
    console.log('Message 1');
}

function showMessage() {
    console.log('Message 2');
}

showMessage(); // Kết quả in ra là Message 2. Từ đó suy ra nếu có nhiều function trùng tên thì function được định nghĩa sau cùng sẽ ghi đè các function được đinh nghĩa trước đó.

function showName() { // tạo biến ở trong hàm
    var fullName = 'Phu Trong'; // biến fullName chỉ có thể hoạt động bên trong hàm showName.
    console.log(fullName);
}

showName();

function showName2() { // hàm lồng hàm
    function showName3() {
        console.log('Phu Trong Ahihi'); 
    }
    showName3(); // Hàm showName3 chỉ có thể sử dụng trên trong hàm showName2 
}