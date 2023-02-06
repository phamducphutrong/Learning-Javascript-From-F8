/*
Làm việc với Array

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]

console.log(languages.toString()) // toString dùng để chuyển kiểu dữ liệu là mảng sang kiểu chuỗi. Và sau khi chuyển thì các phần tử sẽ bị ngăn cách nhau bởi dấu phẩy.
console.log(languages.join('-')) // join dùng để ghép các phần tử của mảng lại với nhau và được ngăn cách nhau bởi giá trị năm bên trong cặp nháy đơn.
console.log(languages.pop()) // pop dùng để xóa phần tử ở cuối mảng và trả lại giá trị của phần tử đã xóa. Nếu trong trường hợp mảng không có phần tử nào để xóa thì giá trị trả về sẽ là undefined.
console.log(languages.push('Dart', 'Java')) // push dùng để thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng sau khi đã thêm.
console.log(languages.shift()) // shift dùng để xóa đi phần tử ở đầu mảng và trả về giá trị của phần tử bị xóa. Nếu trong trường hợp mảng không có phần tử nào để xóa thì giá trị trả về sẽ là undefined.
console.log(languages.unshift()) // unshift dùng để thêm một hoặc nhiều phần tử vào đầu mảng về trả về độ dài của mảng sau khi đã thêm mới.
languages.splice(1, 1, 'Dart') // splice dùng để thêm hoặc xóa một hoặc nhiều phần tử bắt đầu từ một chỉ mục bất kì trong mảng. Đối số đầu tiên truyền vào là chỉ mục của phần tử, đối số thứ hai truyền vào là số lượn phần tử sẽ bị xóa tính từ chỉ mục. Giá trị của tham số thứ ba trở đi khi truyền vào sẽ được thêm vào mảng bắt đầu từ vị trí index (đối số thứ nhất)

var languages2 = [
    'Dart',
    'Ruby'
]
console.log(languages.concat(languages2)) // concat dùng để nối hai mảng với nhau (không tạo ra mảng mới mà vẫn dùng mảng ban đầu). Các phần tử của mảng gọi đến hàm concat sẽ đứng trước, các phần tử của mảng thứ hai (đối số truyền vào trong hàm concat) sẽ đứng sau.
console.log(languages.slice(1, 2)) // slice dùng để copy một hoặc nhiều phần tử của một mảng ban đầu và tạo ra một mảng mới với các giá trị vừa cắt (copy). (Slice có tính chất exclusive tương tự như trong python) (Slice có thể copy toàn bộ phần tử từ giá trị cho trước đến hết bằng cách chỉ viết 1 đối số là start và không cần viết đối số thứ hai) (slice cũng hỗ trợ chỉ mục âm - negative index để truy xuất đến vị trí của các phần tử)
console.log(languages.slice(0)) // Nếu muốn copy toàn bộ mảng hiện tại thành một mảng mới thì có thể truyền 0 làm đối số
