// Object Constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Trọng', 'Phạm', 'Avatar');
var user = new User('Tùng', 'Nguyễn', 'Avatar');

author.title = 'Học js cơ bản';
user.comment = 'Hocj js nâng cao';

console.log(author.getName());
console.log(user.getName());