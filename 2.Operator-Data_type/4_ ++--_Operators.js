/*
Toán tử ++ --
Prefix & Postfix
*/
var a = 6;
a++; // Prefix
console.log(a);

var b = 10;
++b; // Postfix
console.log(b);

// khi toán tử ++ hoặc -- đứng ở trước biến hoặc toán hạng thì biến và toán hạng sẽ thực hiện phép tính trước khi trả về giá trị của chúng.
// khi toán tử ++ hoặc -- đứng ở sau biến hoặc toán hạng thì biến và toán hạng sẽ trả về giá trị trước rồi mới tính toán.
// nói chung: đứng trước thì sẽ tính trước, đứng sau thì sẽ tính sau.
// Ví dụ:
var number = 5;
console.log(number++); // Đây là trường hợp toán tử ++ đứng sau biến, vì vậy biến number sẽ trả về giá trị hiện tại là 5 của nó trước rồi mới + 1
console.log(++number); // Đây là trường hợp toán tử ++ đứng trước biến, vì vậy biến number sẽ + 1 trước rồi mới trả về giá trị là 6