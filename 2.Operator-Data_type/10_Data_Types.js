/*
Kiểu dữ liệu trong javascript
1. Kiểu dữ liệu nguyên thủy - Primitive Data Type
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
2. Kiểu dữ liệu phức tạp - Complex Data Type
    - Function
    - Object
*/

// Kiểu dữ liệu nguyên thủy là kiểu dữ liệu mà giá trị của nó tạo ra sẽ được lưu vào vùng nhớ và sẽ không thể thay đổi giá trị này.
var a = 1; // Tạo ra 1 vùng nhớ ở trong ram để lưu trữ giá trị của a là 1. Giá trị này sẽ không thể thay đổi.
a = 2; // Khi gán giá trị a = 2 (cập nhật lại giá trị cho biến a) thì một vùng nhớ khác sẽ được sử dụng để lưu trữ giá trị của biến a là 2.

// Number type
var b = 2;
console.log(typeof b); // kết quả là number

// String type
var myString = 'Phu Trong';
console.log(typeof myString); // kết quả là string

// Boolean type
var isSuccess = true;
console.log(typeof isSuccess); // kết quả là boolean

// Undefined type
var age;
console.log(typeof age); // kết quả là undefined

// null type
var isNull = null; // nothing
console.log(typeof isNull); // kết quả là object

// symbol type
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique
console.log(id === id2); // kết quả là false
console.log(typeof id); // kết quả là symbol

// Function type
var myFunction = function() {
    alert('Hi, Xin chao cac ban');
};
myFunction();
console.log(typeof myFunction); // kết quả là function

// Object type
var myObject = {
    name: 'Phu Trong',
    age: 20,
    address: 'Ha Noi',
    myFunction: function() {

    }
};
console.log(myObject);
console.log(typeof myObject); // Kết quả là object

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(myArray);
console.log(typeof myArray); // Kết quả là object