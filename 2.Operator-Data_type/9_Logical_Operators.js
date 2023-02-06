/*
Toán tử logic
1. && - And
2. || - Or
3. !  - Not
*/

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > 0) { // Yêu cầu tất cả các điều kiện phải đúng
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

if (a > 0 || b < 0 || c < 0) { // Chỉ cần 1 điều kiện đúng
    console.log('Dieu kien dung');
} else {
    console.log('Dieu kien sai');
}

if (!(a > 0)) { // ! dùng để phủ định một điều kiện
    console.log('Dieu kien dung');
}