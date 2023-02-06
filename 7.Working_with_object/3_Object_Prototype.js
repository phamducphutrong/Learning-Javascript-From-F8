// Object prototype - Basic
// 1. Object prototype là gì? Dùng để thêm thuộc tính hoặc phương thức vào hàm khởi tạo từ bên ngoài.
// 2. Sử dụng khi nào?
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8'; // Thêm thuộc tính className vào hàm khởi tạo User từ bên ngoài
User.prototype.getClassName = function() { // Thêm phương thức getClassName vào hàm khởi tạo từ bên ngoài
    return this.className;
}

var user = new User('Trọng', 'Phạm', 'Avatar');
var user2 = new User('Tùng', 'Nguyễn', 'Avatar');

console.log(user.className);
console.log(user2.getClassName());