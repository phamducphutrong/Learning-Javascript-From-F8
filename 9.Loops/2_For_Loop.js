// For loop
var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
]

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

// lý do không truyền trực tiếp độ dài của mảng vào chỗ i < arrayLength là bởi vì mỗi lần chạy thì vòng lặp sẽ kiểm tra điều kiện 1 lần và nếu truyền myArray.length vào thì trình duyệt sẽ phải sử dụng 1 lần thuộc tính length của mảng myArray.
//Điều này sẽ ảnh hưởng đến hiệu suất làm việc. Còn nếu truy cập vào thuộc tính length của mảng myArray 1 lần và lưu giá trị đó vào biến arrayLength thì trong vòng lặp, ta truyền giá trị của biến arrayLength vào để kiểm tra điều kiện. Điều này giúp tối ưu hiệu năng.