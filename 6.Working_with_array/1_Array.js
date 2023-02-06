/*
Mảng trong Javascript - Array

1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

//Chỉ mục của các phần tử trong mảng được đánh tự động và bắt đầu từ 0, các phần tử trong mảng có thể là bất cứ kiểu dữ liệu gì.

var languages = [ // Cách này nên được sử dụng để tạo mảng
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function() {

    },
    {},
    123
]

var languages2 = new Array( // không sử dụng cách này để tạo mảng
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function() {

    },
    {},
    123
)

console.log(languages)
console.log(languages2)

console.log(typeof languages) // Kiểu dữ liệu của array sẽ là một object nếu như ta sử dụng typeof.
console.log(Array.isArray(languages)) // Đây là cách để kiểm tra xem bất kì một thứ gì truyền vào hàm isArray có phải là một mảng hay không. Nếu là array thì trả về true còn không thì trả về false.

console.log(languages.length) // truy xuất độ dài của mảng
console.log(languages[0]) // truy xuất phần tử đầu tiên của mảng