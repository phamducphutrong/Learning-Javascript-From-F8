// Return trong hàm
var isConfirm = confirm('Message');
console.log(isConfirm); // trả về true nếu ấn OK và false nếu ấn cancel

function cong(a, b) {
    return a + b; // đoạn code ở bên dưới dòng return sẽ không được hoạt động và function sẽ kết thúc tại đây.
    console.log('123')
}

function toStringExample(a, b) {
    return a.toString() + b.toString(); // Kết quả là 28 (nối chuỗi)
}

var result = cong(2, 8);
var result_1 = toStringExample(2, 8);
console.log(result);
console.log(result_1);


// Nếu một hàm mà không trả về gì cả hoặc cố tình trả về undefined thì mặc định sẽ trả về là undefined khi được gọi lại.
function undefinedExample() {

}

undefinedExample(); // Kết quả là undefined