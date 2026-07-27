const data = JSON.parse(localStorage.getItem("cart"))

async function renderData(data){
    const parentContainer = document.getElementById('productContainer');
    parentContainer.innerHTML=""

    data.forEach((el, i)=>{
        // const loader = document.getElementById("loader");
        // loader.style.display="none"
        const cardDiv = document.createElement("div");

        cardDiv.style.textAlign="center"
        cardDiv.style.boxShadow="#0f62fe 5px 5px, rgba(45, 25, 155, 0.3) 10px 10px, rgba(82, 56, 155, 0.2) 15px 15px, rgba(124, 112, 181, 0.1) 20px 20px, rgba(135, 129, 205, 0.05) 25px 25px"

        const cat = document.createElement("p");
        cat.innerText=el.category;

        const img = document.createElement("img");
        img.src=el.image;
        img.style.width="150px";
        img.style.height="150px"

        const title = document.createElement("p");
        title.innerText=el.title

        const price = document.createElement("p");
        price.innerText=el.price

        // const desc = document.createElement("p");
        // desc.innerText=el.description;

        const button = document.createElement("button");
        button.innerText="Remove Cart";
        button.style.border="1px solid none";
        button.style.padding="5px";
        button.style.width="90%"
        button.style.backgroundColor="#0f62fe";
        button.style.color="white"

        button.addEventListener("click", ()=>{
            removeCart(el, i)
        })       

        cardDiv.append(cat, img, title, price, button);

        parentContainer.append(cardDiv)

    })
}


function removeCart(el,i){
    console.log(el, i)
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    let newCart = cartData.splice(i, 1);
    // console.log(cartData)

    localStorage.setItem("cart", JSON.stringify(cartData));

    renderData(cartData)
}


renderData(data)