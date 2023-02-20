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

function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index
    }
};

var newCourses = courses.map(courseHandler);
console.log(newCourses);

// hàm map về bản chất giống như 1 vòng lặp và nó sẽ lặp qua tất cả các phần tử nằm trong mảng, mỗi lần lặp qua 1 phần tử sẽ call (gọi) lại hàm được định nghĩa bên trong map và trả về 1 cái gì đó.