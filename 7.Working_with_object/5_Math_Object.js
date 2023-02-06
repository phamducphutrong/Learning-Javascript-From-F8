/*
Math object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

console.log(Math.PI) // số PI
console.log(Math.round(1.4)) // trả về số nguyên phụ thuộc vào giá trị của số thập phân
console.log(Math.abs(-4)) // trả về giá trị tuyệt đối
console.log(Math.ceil(1.3)) // làm tròn lên, trả về 1 số nguyên
console.log(Math.floor(1.9)) // làm tròn xuống, trả về 1 số nguyên
var random = Math.random() 
console.log(random) // trả về ngẫu nhiên 1 số thập phân nhỏ hơn 1
console.log(Math.floor(random * 10)) // trả về 1 số nguyên ngẫu nhiên từ 0 đến 9
console.log(Math.floor(random * 100)) // trả về 1 số nguyên ngẫu nhiên từ 0 đến 99

var lucky_number = Math.floor(random * 5) //trả về 1 số nguyên ngẫu nhiên từ 0 đến 4
var bonus = [ //tạo ra 1 mảng các phần tử các giá trị các giải thưởng
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]
console.log(bonus[lucky_number]) // quay số ngẫu nhiên để trao giải thưởng

var successRate =  Math.floor(random * 100) // trả về 1 số nguyên ngẫu nhiên từ 0 đến 99 để làm con số so sánh với tỷ lệ thành công cho việc cường hóa đồ trong game
if (successRate < 50) { // nếu con số ngẫu nhiên mà từ 1-5% thì cường hóa đồ thành công
    console.log('Đập đồ thành công');
} else {
    console.log('Đập đồ thất bại');
}

console.log(Math.max(-123, 123, 321, 4, 7, 45)) // trả về giá trị lớn nhất
console.log(Math.min(-123, 123, 321, 4, 7, 45)) // trả về giá trị nhỏ nhất