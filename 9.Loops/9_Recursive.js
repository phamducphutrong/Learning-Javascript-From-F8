//------------------------------- Giải bài toán xóa các phần tử trùng lặp mà không sử dụng vòng lặp-------------------------------------------------
var array = ['a', 'b', 'c', 'a', 'b', 'c']; // cho 1 mảng với các phần tử trùng lặp
console.log([...(new Set(array))]); // tạo một đối tượng Set với từ khóa new và constructor tên là Set sau đó truyền mảng 'array' vào làm đối số. 
// Đặc tính của Set đó là các giá trị được truyền vào luôn luôn phải là duy nhất (unique)
// dòng số 4, ba dấu chấm dùng để trải các giá trị nhận được ra và đưa vào 1 mảng. ES6 hỗ trợ ba dấu chấm.
//--------------------------------------------------------------------------------------------------------------------------------------------------

//---- ĐỊNH NGHĨA VỀ ĐỆ QUY VÀ CÁC BƯỚC LÀM ----
// Đệ quy là một hàm gọi lại chính nó.
// 1. Xác định điểm dừng
// 2. Xử lý logic để tạo ra điểm dừng
//----------------------------------------------

//-----------bài toán làm hàm đếm ngược bằng đệ quy------------
function countDown(number) { // 
    if (number > 0) {
        return countDown(number - 1);
    }
    return number;
}
countDown(3);
//-------------------------------------------------------------



//-----------bài toán in ra các phần tử của mảng bằng đệ quy-----------
function loop(start, end, callback) { // hàm được truyền dưới dạng 1 tham số được gọi là callback
    if (start < end) {
        callback(start);
        loop(start + 1, end, callback);
    }
}

var array = ['Javascript', 'PHP', 'Java'];

loop(0, array.length, function(index) {
    console.log(array[index]);
});
//---------------------------------------------------------------------



//---------- Tính giai thừa của một số bằng đệ quy -------
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}
console.log(giaiThua(3));
//--------------------------------------------------------