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


// let form = document.getElementById("form");
// let btn = document.getElementById("btn");


// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     let fullName = document.getElementById("fullName").value;
//     let email= document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     let obj = {
//         fullName, email, password
//     }

//     console.log(obj);

// })

obj = {
    name:"Arpan",
    uni:"ADTU",
    myFun:function(){
        console.log(this.name)
    }
}


obj.myFun()






