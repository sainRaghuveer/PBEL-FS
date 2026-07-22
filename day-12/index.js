// const para = document.getElementById("para");

// para.innerText="I am paragraph text from JS file";
// para.style.border="1px solid red"
// para.style.backgroundColor="teal"
// para.style.color="white"

// const btnDiv = document.getElementById("btn");
// const btn = document.createElement("button");
// btn.innerText="Click Me..!!";
// btn.style.padding="10px";
// btn.style.border="none";
// btn.style.backgroundColor="yellowgreen";
// btn.style.color="white";
// btn.style.borderRadius="5px"
// btnDiv.append(btn)



// btn.addEventListener("click",()=>{
//     console.log("clicked inside eventListener")
// })



let form = document.getElementById("form");
let btn = document.getElementById("btn");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj = {
        fullName, email, password
    }

    let arr = JSON.parse(localStorage.getItem("userData"))|| [];

    for(let i=0; i<arr.length; i++){
        if(arr[i].email == obj.email){
            return alert("Duplicate email found")
        }
    }

    arr.push(obj)

    localStorage.setItem("userData",JSON.stringify(arr));


     let dataFromLocalStorage=JSON.parse(localStorage.getItem("userData"));
    console.log(dataFromLocalStorage)
})

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", ()=>{
    window.location.href="login.html"
})
   




