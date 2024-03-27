let a = document.getElementsByClassName("border")
a[0].style.border="0.3px solid rgb(183, 234, 254)"
a[0].style.height="96vh"
a[0].style.margin="15px"
a[0].style.borderRadius="0.5%"
a[0].style.backgroundColor="rgb(183, 234, 254)"



let k = document.getElementsByClassName("img")
k[0].style.objectFit="fill"
k[0].style.width="830px"
k[0].style.height="550px"
k[0].style.margin="60px"
k[0].style.marginTop="70px"
k[0].style.marginLeft="70px"



let h = document.getElementsByClassName("container")
h[0].style.display="flex"
h[0].style.margin="5px"
h[0].style.fontSize="120%"

let d = document.getElementsByClassName("text")
d[0].style.marginLeft="50px"
d[0].style.marginTop="200px"
d[0].style.lineHeight="1.3"


let b = document.getElementsByClassName("up")
b[0].style.fontWeight="bold"
b[0].style.fontSize="200%"

let c=document.getElementsByClassName("li")
c[0].style.margin="20px"
c[0].style.fontSize="90%"
c[0].style.lineHeight="1.7"

let e = document.getElementsByClassName("button")
e[0].style.display="flex"
e[0].style.justifyContent="space-evenly"
e[0].style.marginTop="30px"


let button = document.getElementsByTagName("button")
button[0].addEventListener("click",function(){
    let k=document.createElement("div")
    k.innerText="hello"
    alert(k.innerText)
})
button[0].style.padding="10px"
button[0].style.backgroundColor="blue"
button[0].style.color="white"
button[0].style.width="150px"

button[1].addEventListener("click",function(){
    let k=document.createElement("div")
    k.innerText="hello"
    alert(k.innerText)
})

button[1].style.padding="10px"
button[1].style.borderBlockColor="blue"
button[1].style.backgroundColor="rgb(183, 234, 254)"
button[1].style.color="blue"
button[1].style.width="150px"

