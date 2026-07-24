async function fetchData () {
    const res = await fetch("https://fakestoreapi.com/products");

    const response = await res.json();

    renderData(response)
}


async function renderData(data){
    const parentContainer = document.getElementById('productContainer');

    data.forEach((el, i)=>{
        const loader = document.getElementById("loader");
        loader.style.display="none"
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
        button.innerText="Buy Now";
        button.style.border="1px solid none";
        button.style.padding="5px";
        button.style.width="90%"
        button.style.backgroundColor="#0f62fe";
        button.style.color="white"

        cardDiv.append(cat, img, title, price, button);

        parentContainer.append(cardDiv)

    })
}

fetchData()