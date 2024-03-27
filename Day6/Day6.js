// function printon() {
//     var k = document.body
//     k.style.backgroundColor = "black"
// }

// function printoff() {
//     var n = document.body
//     n.style.backgroundColor = "white"
// }


// addEventlistener()
// - Đầu vào thứ nhất: là kiểu sự kiện muốn gán cho nút
// - Đầu vào thứ hai : là để thực thi chức năng khi tác động vào thẻ như
// let buttonOn = document.getElementById("buttonOn")
// let buttonOff = document.getElementById("buttonOff")

// Gán sự kiện

let button = document.getElementsByTagName("button")
let inputText = document.querySelector(".inputText")
button[2].addEventListener("click",function(){
    let k=document.getElementsByClassName("hello_text")
    k[0].innerText=inputText.value
})