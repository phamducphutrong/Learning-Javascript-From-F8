// toán tử 3 ngôi - ternary operator
var course = {
    name: 'Javascipt',
    coin: 250
}

if (course.coin > 0) { // Đây là cách làm thông thường
    console.log(`${course.coin} Coins`);
} else {
    console.log('Miễn phí');
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'; // Đây là cách làm áp dụng toán tử 3 ngôi. 
// Ngôi thứ nhất là điều kiện, đi kèm với dấu ?, ngôi thứ hai là khối code nếu điều kiện đúng, ngôi thứ ba là khối code nếu điều kiện sai.
// Giữa ngôi thứ hai và 3 được ngăn cách bởi dấu :

console.log(result)