// Các phần tử trong mang được bắt đầu từ số 0
// Thêm các phần tử mới vào mảng dùng push()
// Lấy các giá trị trong mảng từ a -> b thì dùng:
//     - slice(a,b):tạo ra 1 mảng mới dựa trên mảng cũ
//     - mảng mới có giá trị là các giá trị từ a->b của mảng cũ
// Cách lấy tổng số các phần tử ở trong mảng:  tên mảng.length()

//for(sự khởi tạo, điều kiện, sự biến đổi)
//for: thực hiện một đoạn code nào đó nhiều lần
// for có 3 đầu vào

// let number=[1002,8,12,55,99,0,3,5,102,111,100]
// let newArray = []
// let a=0


// for(let i = 0;i < number.length; i++){
//     for(let j=i+1;j< number.length;j++){
//         if (number[i]>number[j]){
//             a=number[i]
//             number[i]=number[j]
//             number[j]=a
//         }

//     }
//     if(number[i]%2==0){
//         newArray.push(number[i])
//     }
// }

// console.log(number);
// console.log(newArray)

// Đối tượng trong JS
// - thuộc tính: mô tả những đặc trưng của đối tượng



// let list_student = [
//     {
//         name: "Nguyễn Văn A",
//         age: 30,
//         favor: ["Ăn", "Ngủ", "Học Bài"],
//     },
//     {
//         name: "Le Quang T",
//         age: 20,
//         favor: ["Bay Lắc", "Ngủ"],
//     },
//     {
//         name: "Đặng Thị B",
//         age: 33,
//         favor: ["Dạy học", "Đi chơi", "Golf", "Swimming"],
//     },
    
// ];

// for (let i = 0; i < list_student.length; i++) {
//     for (let j = i + 1; j < list_student.length; j++) {
//         if (list_student[i].age > list_student[j].age) {
//             let s = list_student[i]
//             list_student[i]=list_student[j]
//             list_student[j]=s
//         }

//     }
//     console.log(list_student.name);
// }



let k = prompt("Nhập chữ:");

if (isNaN(k)) {
    let abc = true;
    for (let i = 0; i < (k.length / 2); i++) {
        if (k[i] !== k[k.length - 1 - i]) {
            abc = false;
            break;
        }
    }

    if (abc) {
        console.log("Chữ đối xứng");
    } else {
        console.log("Chữ không đối xứng");
    }
} else {
    console.log("Nhập lại chữ");
}

























