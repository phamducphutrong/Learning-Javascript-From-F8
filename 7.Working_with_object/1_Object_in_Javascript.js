var myHeight = 'height'; // tạo ra một biến tên là myHeight để lưu giá trị của key

var myInfo = { //tạo 1 đối tượng
    'full-name': 'Phú Trọng',
    age: 20,
    address: 'Hà Nội',
    school: 'GreenWich University',
    [myHeight]: 173.4, // tạo cặp key-value với key là giá trị của biến myHeight được khai báo ở trên
    getName: function() { // tạo cặp key-value với value là một phương thức
        return this["full-name"] //từ khóa this đại diện cho tên của object
    }
}

myInfo.email = 'phamducphutrong@gmail.com' // thêm 1 key và value nữa vào trong object
myInfo['fpt-email'] = 'trongpdpgch200017@fpt.edu.vn' // thêm 1 key và value nữa vào trong object với key chứa kí tự đặc biệt

delete myInfo.school // xóa 1 cặp key-value trong object

console.log(myInfo)
console.log(myInfo.age) // lấy giá trị của một key
console.log(myInfo["full-name"]) // lấy giá trị của một key với key chứa kí tự đặc biệt
console.log(myInfo.getName()) // thực hiện phương thức getName() trong object
console.log(myInfo.grade) // lấy giá trị của một key không tồn tại sẽ cho ra kết quả là undefined

// Function == phương thức (getName là một phương thức)
// Others == thuộc tính (age, address, 'full-name' là các thuộc tính)