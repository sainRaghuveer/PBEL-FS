//Synchronous and asynchronous, single threaded language, single line execution at a time


//API call:> Async, setTimeout


// async function myFun (){
//     console.log("Async execution in async function")
// }

//Asynchronous behavior

// console.log("synchronous execution before setTimeout")

// setTimeout(()=>{
//     console.log("async task 1")
// }, 2000)

// setTimeout(()=>{
//     console.log("async task 2")
// }, 1000)

// setTimeout(()=>{
//     console.log("async task 3")
// }, 3000)

// setTimeout(()=>{
//     console.log("async task 4")
// }, 0)


// console.log("synchronous execution after setTimeout")

//Promise:-> Pending, fullfilled, Rejected


async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const response = await res.json();
    appendData(response)
}


function appendData(data){
    const parentDiv = document.getElementById("parent");

    data.forEach((el, i)=>{
        const childDiv = document.createElement("div");
        // childDiv.style.border="1px solid blue"
        // childDiv.style.width="25%";
        childDiv.style.textAlign="center"
        childDiv.style.boxShadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"

        const cat = document.createElement("p");
        cat.innerText=el.category;

        const img = document.createElement("img");
        img.src=el.image;
        img.style.width="200px";
        img.style.height="200px"

        const title = document.createElement("p");
        title.innerText=el.title

        const price = document.createElement("p");
        price.innerText=el.price

        const desc = document.createElement("p");
        desc.innerText=el.description;

        const button = document.createElement("button");
        button.innerText="Buy Now";
        button.style.border="1px solid none";
        button.style.padding="5px";
        button.style.width="90%"
        button.style.backgroundColor="yellowgreen";
        button.style.color="black"

        childDiv.append(cat, img, title, price, desc, button);

        parentDiv.append(childDiv)

    })
}

getData()


