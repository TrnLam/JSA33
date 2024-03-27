// let a = document.getElementById("text")
// a.innerText = "Hello world"
// a.id = "abc"
// a.style.color = "green"
// console.log(a.innerText);




// let list_line1 = document.getElementsByClassName("line1")

// for (let i = 0; i < list_line1.length; i++) {
//     console.log(list_line1[i].innerText)
// }


// document.title = "web"
// let divElement = document.createElement("div")
// divElement.innerText = "a"
// divElement.className = "line1"
// divElement.style.lineHeight = "100px"
// divElement.style.textAlign = "center"
// divElement.style.height = "100px"
// divElement.style.width = "100px"
// divElement.style.display = "inlineBlock"
// divElement.style.backgroundColor = "red"
// divElement.style.borderRadius = "50%"
// document.body.appendChild(divElement)



// let divElement2 = document.createElement("div")
// divElement2.innerText = "a"
// divElement2.className = "line1"
// divElement2.style.lineHeight="100px"
// divElement2.style.textAlign="center"
// divElement2.style.height="100px"
// divElement2.style.width="100px"
// divElement2.style.display ="inlineBlock"
// divElement2.style.backgroundColor = "red"
// document.body.appendChild(divElement2)



let ul_element = document.getElementsByClassName("line1")
let c = document.createElement("li")
c.innerText = "Hello World"
ul_element[0].appendChild(c)


function print() {
    document.title = "web"
    let divElement = document.createElement("div")
    divElement.innerText = "a"
    divElement.className = "line1"
    divElement.style.lineHeight = "100px"
    divElement.style.textAlign = "center"
    divElement.style.height = "100px"
    divElement.style.width = "100px"
    divElement.style.display = "inlineBlock"
    divElement.style.backgroundColor = "red"
    divElement.style.borderRadius = "50%"
    document.body.appendChild(divElement)
}



function print2(){
    let k=document.getElementById("text")
    if (k.style.backgroundColor != "pink"){
        k.style.backgroundColor = "pink"
    }
    else if (k.style.backgroundColor != "blue"){
        k.style.backgroundColor = "blue"
    }
    
    
}










