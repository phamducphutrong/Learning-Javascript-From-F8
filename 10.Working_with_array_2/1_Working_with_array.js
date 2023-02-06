/*
Array methods
    forEach()
    every() kiểm tra tất cả các phần tử của 1 mảng phải thỏa mãn 1 điều kiện gì đó. => Giá trị trả về sẽ là kiểu boolean
    some() kiểm tra xem có 1 phần tử nào thỏa mãn điều kiện gì đó hay không. => Giá trị trả về sẽ là kiểu boolean (Ngược lại với every)
    find() tìm kiếm trong mảng xem có phần tử nào thỏa mãn 1 điều kiện gì đó => Giá trị trả về sẽ là chính phần tử tìm được, nếu không có thì sẽ trả về undefined
    filter() tìm kiếm trong mảng tất cả các phần tử thỏa mãn 1 điều kiện gì đó => Giá trị trả về sẽ là mảng chứa các phần tử tìm được, nếu không có thì trả về 1 mảng rỗng (Ngược lại với find)
    map()
    reduce()
*/

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

// forEach sẽ trả lại 2 giá trị, giá trị đầu tiên là từng phần tử của mảng (chính là course), giá trị thứ hai là index của mỗi phần tử (chính là index).
courses.forEach(function(course, index) { // tham số truyền vào là một hàm thì được gọi là callback
    console.log(index, course);
});

var isFree = courses.every(function(course, index) { // kiểm tra xem các khóa học trong mảng có phải là khóa học miễn phí hay không.
    console.log(index);
    return course.coin === 0;
});
console.log(isFree); // Kết quả: false

var isFree1 = courses.some(function(course, index) { // kiểm tra xem có bất kì 1 khóa học trong mảng có phải là khóa học miễn phí hay không.
    console.log(index);
    return course.coin === 0;
});
console.log(isFree1); // Kết quả: true

var course = courses.find(function(course, index) { // tìm kiếm xem có bất kì khóa học nào trong mảng có tên là Ruby hay không.
    return course.name === 'Ruby';
});
console.log(course); // hàm find sẽ return lại chính cái phần tử tìm được nếu có, còn nếu không có thì sẽ return undefined.

var listCourses = courses.filter(function(course, index) { // tìm kiếm tất cả các khóa học trong mảng có tên là Ruby
    return course.name === 'Ruby';
});
console.log(listCourses); // hàm filter sẽ trả về 1 array chứa tất cả các phần tử là các khóa học có tên là Ruby, nếu không có thì trả về 1 mảng rỗng