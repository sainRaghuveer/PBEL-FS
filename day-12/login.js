const registerButton = document.getElementById("register");

registerButton.addEventListener("click", ()=>{
    window.location.href="index.html"
});


let form = document.getElementById("form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let email= document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj = {
        email, password
    }

    let arr = JSON.parse(localStorage.getItem("userData"))|| [];

    for(let i=0; i<arr.length; i++){
        if(arr[i].email == obj.email && arr[i].password == obj.password){
            window.location.href = "admin.html";
            return alert("Welcome to admin page")
        }
    }

    alert("You are not authorized person or your credentials are incorrect")

})