// Đối tượng Date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1; //phương thức getMonth() trả về giá trị từ 0-11 nên sẽ phải cộng thêm 1 để tính tháng từ 1-12
var day = date.getDate()

console.log(typeof date) // kiểu object
console.log(date)
console.log(`${day}/${month}/${year}`)

var date1 = Date();
console.log(typeof date1) // kiểu string
console.log(date1)