var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'Reactjs',
        coin: 500
    }
];

// hàm reduce sẽ trả về 1 giá trị duy nhất, hàm này có 2 đối số truyền vào:
// tham số thứ nhất của hàm reduce là hàm callback (trong hàm này sẽ có 4 tham số trong đó 2 tham số đầu là bắt buộc còn 2 tham số sau là tùy chọn).
// tham số accumulator sẽ là bộ lưu trữ giá trị, trong lần lặp đầu tiên, tham số này sẽ nhận giá trị từ initial value, bắt đầu từ vòng lặp thứ hai, tham số này sẽ được cập nhật là kết quả trả về của vòng lặp trước đó.
// tham số currentValue là phần tử hiện tại mà vòng lặp đang lặp qua.
// tham số thứ hai của hàm reduce là giá trị khởi tạo (initial value).
var totalCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0);
// trong bài toán trên tính tổng số coin của các khóa học, tham số thứ hai của hàm reduce sẽ là 0 (giá trị khởi tạo). Vì vậy trong lần lặp đầu tiên thì tham số accumulator sẽ nhận giá trị là 0.
// sau đó accumulator sẽ được cộng dồn với currentValue.coin (currentValue chính là phần tử mà vòng lặp đang lặp qua)

console.log(totalCoin);