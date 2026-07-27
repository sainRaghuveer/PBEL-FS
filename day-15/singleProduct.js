const singleProductData = JSON.parse(localStorage.getItem("singleProduct"));

function appendData(singleProductData){
    let leftChild = document.getElementById("leftChild");
    let rightChild = document.getElementById("rightChild");

    let img = document.createElement("img");
    img.src=singleProductData.image;
    img.style.height="300px";
    img.style.width="300px";

    let id = document.createElement("p");
    id.innerText=singleProductData.id;


    leftChild.append(img, id);

    let cat = document.createElement("h3");
    cat.innerText=singleProductData.category;

    let price = document.createElement("p");
    price.innerText=`Price: ${singleProductData.price}`;

    let title = document.createElement("p");
    title.innerText=singleProductData.title;

    let ratingDiv = document.createElement("div");
    // ratingDiv.style.border="1px solid yellowgreen";
    ratingDiv.style.display="flex";
    ratingDiv.style.justifyContent="space-around"
    let count = document.createElement("p");
    count.innerText=`Rating Count: ${singleProductData.rating.count}`;
    let rate = document.createElement("p");
    rate.innerText=`Rate: ${singleProductData.rating.rate}`;

    ratingDiv.append(count, rate);

    let desc = document.createElement("p");
    desc.innerText=singleProductData.description;

    rightChild.append(cat, price, title, ratingDiv, desc);

}

appendData(singleProductData);