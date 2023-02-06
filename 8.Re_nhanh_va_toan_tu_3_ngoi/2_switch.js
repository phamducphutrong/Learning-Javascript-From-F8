// câu lệnh rẽ nhánh - Switch

var date = 2;

switch (date) {
    case 2:
        console.log('Hôm nay là thứ hai');
        break;
    case 3:
        console.log('Hôm nay là thứ ba');
        break;
    case 4:
        console.log('Hôm nay là thứ tư');
        break;
    case 5:
        console.log('Hôm nay là thứ năm');
        break;
    case 6:
        console.log('Hôm nay là thứ sáu');
        break;
    case 7:
        console.log('Hôm nay là thứ bảy');
        break;
    case 8:
        console.log('Hôm nay là chủ nhật');
        break;
    default:
        console.log('Không biết');
}

// Từ khóa break được dùng để ngăn chặn việc thực hiện các case ở phía dưới. 
// Trong javascript, nếu không có từ khóa break thì các case phía dưới vẫn được chạy cho đến khi gặp case có từ khóa break thì mới dừng. Ví dụ ở bên dưới:
var month = 1;

switch (month) {
    case 1:
        console.log('Tháng một');
    case 2:
        console.log('Tháng hai');
    case 3:
        console.log('Tháng ba');
    case 4:
        console.log('Tháng tư');
        break;
    case 5:
        console.log('Tháng năm');
        break;
}

// khi nào sử dụng if-else và khi nào sử dụng switch case:
//  sử dụng switch case trong trường hợp chúng ta biết trước giá trị mà biến sẽ được gán và số lượng các case lớn
//  nếu như số lượng các case mà nhỏ hơn hoặc bằng 3 thì nên sử dụng if-else
//  sử dụng if-else trong trường hợp chúng ta so sánh lớn hơn, nhỏ hơn