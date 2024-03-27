// Các kiểu so sánh giá trị ở trong JS
// %%: và      ||: khác        ===,!==:so sánh kiểu dữ liệu        

// let a = "20"
// let b = 20
// let c = 8
// let check = a == b && c < b && a != c;

// console.log(check)

// if: nếu      else if: nếu(thực hiện khi if ở trên sai)      else:nếu không 

// let ans = Number(prompt("nhập a:"))

// if (isNaN(num1 == false) || isNaN(num2 == false)) {
//     if (ans <= 10 && ans > 9) {
//         console.log(alert("Điểm số là A+"))
//     } else if (ans <= 9 && ans > 8) {
//         console.log(alert("Điểm số là A"))
//     } else if (ans <= 8 && ans > 7) {
//         console.log(alert("Điểm số là B+"))
//     } else if (ans <= 7 && ans > 6) {
//         console.log(alert("Điểm số là B"))
//     } else if (ans <= 6 && ans > 5) {
//         console.log(alert("Điểm số là C+"))
//     } else if (ans <= 5 && ans > 4) {
//         console.log(alert("Điểm số là C"))
//     } else if (ans < 4 && ans >= 0) {
//         console.log(alert("Đúp"))

//     } else {
//         console.log(alert("lỗi phép tính"))
//     }
// }



// let k = (prompt("nhập phép tính:"))
// let num1 = Number(prompt("nhập số thứ 1:"))
// let num2 = Number(prompt("nhập số thứ 2:"))



// if (isNaN(num1 == false) || isNaN(num2 == false)) {
//     if (k == "+") {
//         console.log(alert(num1 + num2))
//     }
//     else if (k == "-") {
//         console.log(alert(num1 - num2))
//     }
//     else if (k == "/" && num2 != 0) {
//         console.log(alert(num1 / num2))
//     }
//     else if (k == "*") {
//         console.log(alert(num1 * num2))
//     }
//     else if (k == "**") {
//         console.log(alert(num1 ** num2))
//     }
//     else if (k == "%") {
//         console.log(alert(num1 % num2))
//     }

//     else {
//         console.log(alert("lỗi phép tính"))
//     }
// }

// else {
//     console.log(alert("lỗi phép tính"))
// }




// Kiến thức về function:
// Lý thuyết: dùng để thực thi 1 đoạn code nào đó
// Vận hành: gọi tên function thì function mới chạy

//                  Kiểu 1: void
// let a = 20;

// function newValue() {
//   a = 30;

//   function abc() {
//     console.log("ABC");
//   }
//   abc();
// }

// newValue();
// console.log(a);
//                  Kiểu 2: Function có tham số
// let a = 20;
// function newValue(x) {
//   a = x;
// }
// newValue("Nguyễn Danh Phương");
// console.log(a);
// f(x) = f(1) => x = 1

//                  Kiểu 3: Function có return: giá trị return = giá tri khi gọi tên function
// function calculate(a, b) {
//   return a + b;
// }
// let result = calculate(10, 20);
// result = calculate(100, 50);
// console.log(result);
// calculate(10, 20);

// function plus(a, b) {
//   return a + b;
// }








