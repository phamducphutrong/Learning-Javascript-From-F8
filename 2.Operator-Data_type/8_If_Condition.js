// If-else
// Biểu thức điều kiện trong () sẽ luôn chuyển thành kiểu dữ liệu boolean (true hoặc false).
/*
Trong javascript sẽ có 6 giá trị mà khi chuyển sang kiểu dữ liệu boolean sẽ mang giá trị là false
1. 0
2. false
3. '' hoặc ""
4. undefied
5. NaN (Not a number)
6. null
ngoài 6 giá trị ở trên thì tất cả các giá trị khác khi chuyển sang kiểu dữ liệu boolean sẽ mang giá trị là true.
*/

if (true) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

var isSuccess = 1 > 2;

if (isSuccess) {
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

var fullName = 'Phu Trong'

if (fullName) { // Điều kiện đúng
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}