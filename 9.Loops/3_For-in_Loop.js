// For-in loop
var myInfo = {
    name: 'Phú Trọng',
    age: 20,
    address: 'Hà Nội'
}

for (var key in myInfo) { // biến key được khai báo ở vòng for tương đương với key ở trong object. Cụ thể key nó sẽ là name, age và address trong object myInfo
    console.log(key); // hiển thị giá trị của key
    console.log(myInfo[key]) // hiển thị giá trị của value thông qua key
}

var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for (var key in languages) { // đối với 1 mảng thì key chính là index của các phần tử trong mảng
    console.log(key) // hiển thị các index của các phần tử trong mảng
    console.log(languages[key]) // hiển thị giá trị của các phần tử trong mảng thông qua key (index)
}

var myString = 'Javascript';

for (var character in myString) {
    console.log(character) // hiển thị index của ký tự (character)
    console.log(myString[character]) // hiển thị ký tự trong chuỗi myString
}