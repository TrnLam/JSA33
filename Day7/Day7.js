let list_product = [
    { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
    { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
    { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
    { name: "Vase", price: 16, availability: true, id: "4", category: "bag" },
    { name: "Flower", price: 26, availability: true, id: "5", category: "bag" },
    { name: "Bedsheet", price: 49, availability: true, id: "6", category: "shirt", },
    { name: "Mat", price: 69, availability: false, id: "7", category: "shirt" },
    { name: "Teapot", price: 13, availability: true, id: "8", category: "bag" },
    { name: "Large Bookshelf", price: 88, availability: true, id: "9", category: "shirt", },
    { name: "Small Bookshelf", price: 75, availability: true, id: "10" },
    { name: "Wardrobe", price: 82, availability: false, id: "11", category: "shirt" },
    { name: "Carpet", price: 45, availability: false, id: "12", category: "bag" },
];


function createListProduct(product) {
    let list = document.getElementsByTagName("ul")
    let e = " "
    if (product.availability == true) {
        e = "còn hàng"
    } else {
        e = "hết hàng"
    }
    let h = document.createElement("li")
    h.innerHTML =
        `
    ID: <b class="productID">${product.id}</b><br />
    Tên sản phẩm:
    <b class="productName">${product.name}</b> <br />
    Giá sản phẩm:
    <b class="productPrice">${product.price}</b><b>.000 VND <br /></b> Trạng thái:
    <b class="productStatus">${e}</b>
    <br>
    Category: <b>${product.category}</b>`
    list[0].appendChild(h)

}


for (let i = 0; i < list_product.length; i++) {
    createListProduct(list_product[i])
}



let type = document.querySelector(".type")
let button = document.querySelector(".button")

button.addEventListener("click", function () {

    for (let a = 1; a <= list_product.length; a++) {
        if (type.value == a) {
            var take_li = document.querySelector(`li:nth-child(${a})`)
            take_li.style.backgroundColor = "red"
        }
        else {
            var take_li = document.querySelector(`li:nth-child(${a})`)
            take_li.style.backgroundColor = "white"
        }
    }
})

// let type1 = document.querySelector(".type1")
// let button1 = document.querySelector(".button1")
// let position = type1.value
// let selectedCategory = document.querySelector(".type1").value;

// button1.addEventListener("click", function () {

//     list_product.forEach((product, index) => {
//         let li = document.getElementsByTagName("li")[index];
//         if (product.category === selectedCategory) {
//             li.style.backgroundColor = "red";
//         } else {
//             li.style.backgroundColor = "white";
//         }
//     });
// })

for (let i = 1; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        if (i == 1) {
            for (let z = 0; z < list_product.length; z++) {
                if (list_product[z].category == "shirt") {
                    createListProduct(list_product[z])
                }
            }
        }

        else if (i == 2) {
            for (let z = 0; z < list_product.length; z++) {
                if (list_product[z].category == "shoes") {
                    createListProduct(list_product[z])
                }
            }
        }

        else if (i == 3){
            for (let z=0;z<list_product.length;z++){
                if(list_product[z].category == "bag"){
                    createListProduct(list_product[z]) 
                }
            }
        }

    })
}













