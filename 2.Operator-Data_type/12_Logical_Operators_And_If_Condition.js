// Hiểu hơn về câu lệnh điều kiện và toán tử logic
var a = 1;
var b = 2;

var result = a < b;
console.log('result: ', result);

if (a < b) {
    console.log('A < B');
} else {
    console.log('A >= B')
}

/*
Khi sử dụng câu lệnh điều kiện với toán tử logic (&& || !) sẽ có sự khác nhau khi sử dụng với toán tử so sánh (> < >= <= == !=)
nhớ lại trong javascript sẽ có 6 giá trị mà khi chuyển sang kiểu dữ liệu boolean sẽ mang giá trị là false
1. 0
2. false
3. '' hoặc ""
4. undefied
5. NaN (Not a number)
6. null
*/
var result_1 = 'A' && 'B' && 'C';
console.log(result_1); // Kết quả là C vì khi kiểm tra vế đầu tiên là 'A', vì 'A' không nằm trong 6 giá trị trên nên nó sẽ trả về true, do đó javascript sẽ xét sang về tiếp theo là 'B', 'B' cũng không năm trong 6 giá trị trên nên nó sẽ chuyển sang 'C', 'C' không năm trong 6 giá trị trên NHƯNG nó là vế cuối cùng nên mặc dù không trả về false nhưng kết quả của biến result vẫn sẽ là 'C'

var result_2 = 'A' && 0 && 'B';
console.log(result_2); // Kết quả là 0 vì khi kiểm tra vế đầu tiên là 'A', 'A' không nằm trong 6 giá trị trên nên nó sẽ chuyển sang vế tiếp theo, vế tiếp theo là 0 mà 0 lại thuộc 6 giá trị trên nên giá trị của biến result_2 sẽ là 0. Kiểm tra kết thúc.

var result_3 = 'A' || 'B' || 'C';
console.log(result_3); // Kết quả là A, vì khi kiểm tra chỉ cần giá trị của 1 vế không thuộc 6 giá trị bên trên thì kiểm tra dừng lại và giá trị của vế đó sẽ được gán cho biến result_3.

var result_4 = '' || 'B' || 'C';
console.log(result_4); // Kết quả là B, vì khi kiểm tra vê thứ nhất '' thuộc 6 giá trị trên nên kiểm tra sang vế tiếp theo là 'B', 'B' không thuộc 6 giá trị trên nên kiểm tra kết thúc, 'B' sẽ được gán cho biến result_4.