// For/of loop
//vòng lặp for/of với mảng
var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for (var value of languages) { // vòng for/of sẽ truy cập trực tiếp vào giá trị của các phần tử trong mảng thay vì index
    console.log(value);
}




// vòng lặp for/of với chuỗi
var myString = 'Javascript';

for (var value of myString) {
    console.log(value);
}




// vòng lặp for/of với object
var myObject = {
    name: 'Phú Trọng',
    age: 20
}

for (var value of Object.keys(myObject)) { // cú pháp Object.keys(myObject) sẽ trả về một mảng chứa các phần tử là key của object và được lưu dưới dạng chuỗi
    console.log(value); // hiển thị ra các gía trị của key trong object
    console.log(myObject[value]) // hiển thị ra giá trị của các value trong object
}

for (var value of Object.values(myObject)) { // cú pháp Object.values(myObject) sẽ trả về một mảng chứ các phần tử là value của object và được lưu dưới dạng chuỗi
    console.log(value); // hiển thị ra giá trị của các value trong object
}

