//in nội dung ra console thì dùng lệnh console.log("nội dung muốn in ra")
console.log("Trần Lâm")
console.log(10)

// 1. Kiểu dữ liệu trong javasript
// Sring: chứa nhiều kí tự khác nhau và phải đẻ trong "" hoặc ''

console.log("none")

// Number: chỉ dùng để chưa số có thể là số thập phân

console.log(10)
console.log(9.5)
console.log("10/3")

// Boolean: chỉ chưa giá trị true hoặc false

console.log(true)
console.log(false)

// 2. Khai báo biến: (let và const và var)
// Cách đặt tên biến: Viết ở dạng camel case (Viết hoa chữ cái đầu của từ thứ 2 trở đi)
// Dùng để viết các từ trong tên biến

// let

  let myName = "Đinh Trần Lâm"
  let my_age_is = 16
  console.log(myName)
  console.log(my_age_is)

  let sentence = myName + " đang là " + my_age_is + " tuổi "
  console.log(sentence)   
  let newSentence = `${myName} đang là ${my_age_is} tuổi`
  console.log(newSentence)

// const

  const mySchool = "THPT Kim Liên"
  console.log(mySchool)

  let sentence1 = myName + " đang học tại " + mySchool
  console.log(sentence1)

// 3. Toán tử trong JS: (+, -, *, /, %, **)

let a = 7
let b = 5
let c = 8
let d = (a + b + c)/2
let e = Math.sqrt(d*(d-a)*(d-b)*(d-c))

console.log(`Ba cạnh ${a}, ${b}, ${c} tạo thành tam giác có diện tích là là: ${e}`)

let dai = 10
let ngan = 20
let cao = 30
let S = ((dai+ngan)*cao)/2

console.log("diệt tích hình thang là: " + S)

let pi = 3.14
let R = 10
let s = pi*R*R

console.log("diện tích hình tròn là: " + s)

// 4. Hàm prompt và hàm alert
// let input = prompt(" Hãy nhập gì đó đi")
// console.log(input)

// let value = "10"
// let t = 10
// value = value + 10
// console.log(value)

// Tạo 2 hàm prompt để 2 số + lại với nhau

let num1 = Number(prompt("nhập a:"))
let num2 = Number(prompt("nhập b:"))
let ans = alert(num1+num2)






