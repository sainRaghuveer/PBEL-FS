// let obj = {
//     name: "Suraj",
//     uni: "ADTU",
//     course: "Btech",
//     year: 3,
//     isAlumni: false,
//     sub: ["FS", "AI", "DL", "ML"],
//     hobbies: {
//         games: ["Cricket", "Football"],
//         listening: "Starboy",
//         test:{
//             test1:{
//                 test2:{
//                     test3:{
//                         test4:{
//                             test5:{
//                                 abc:"RS"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     67:"test"
// }

// let firstValue = obj["name"]

// console.log(firstValue);

// obj["course"] = "MCA";

// console.log(obj);

// let deletedKetValue = delete obj["uni"]

// console.log(deletedKetValue)

// console.log(obj.hobbies);

// obj["isMarried"]=false;


// console.log(obj.hobbies.test.test1.test2.test3.test4.test5["100"]);

// // obj["isMarried"]=true;

// // console.log(obj)



// // // loops:- for loop, while loop, for of loop, for in loop.

// // let num = 10;

// // for(let i = 0; i<num; i=i+1){
// //     console.log(i)
// // }


// // let std = ["Nishita", "Rezwan", "Rabi", "Aryan", "Mriganka", "Supriya", "Mahavir", "Nantelo","Bhaskar"]


// // for(let i = 0; i<std.length; i++){
// //     for(let j=0; j<std[i].length; j++){
// //         console.log(std[i][j])
// //     }
// // }


// let alph = "abcdefghijklmnopqrstuvwxyz";

// for (let i=0; i<alph.length; i++){
//     if(i%2==0){
//         console.log("This Alphabet", alph[i], "on even index" );
//         if(i==10){
//             console.log("This alphabet is not special", alph[i])
//         }
//     }else{
//         console.log("This Alphabet", alph[i], "on odd index" );
//         if(i==17){
//             console.log("This alphabet is not special", alph[i])
//         }
//     }
// }


// You have to take one input as number, if that n umber is multiple of 3 then print "Humpty", if the number is multiple of 5 the  print "dumpty", if number is multiple of both 3 and 5 then print "Humpty Dumpty"

// You have one string which is str = "We are in full stack batch", in this string you need to get all vowels and make one word out of it. then print it.

// output = eaeiuaa

//and operator &&, or operator ||

// let str = "We arE in full stack batch"

// let out = "";

// for(let i=0; i<str.length; i++){
//     if(str[i]=="a" || str[i]=="e" || str[i]=="i"|| str[i]=="o" || str[i]=="u"){
//         out+=str[i];
//         // out = out+str[i]
//     }
// }

// console.log(out)



// let firstStudent = std[0];

// for(let i=0; i<firstStudent.length; i++){
//     console.log(firstStudent[i])
// }


// let num = 1;

// while(num<10){
//     console.log("while loop is running");

//     num++;
// }


//for of loop is specially for arrays only


// let arr = [1,2,3,4,5,6,7,8,9];

// for(let num of arr){
//     console.log(num)
// }

// let arr1 = ["Bikash", "Satyam", "Dhiman", "Satya", "Dikshyan"];


// for (let names of arr1){
//     if(names == "Satyam"){
//         console.log("He is from ADTU")
//     }else{
//         console.log("He is from Amity")
//     }
// }


//for in loop, this loop is specially used in objects


// let obj = {
//     name: "Suraj",
//     uni: "ADTU",
//     course: "Btech",
//     year: 3,
//     isAlumni: false,
//     sub: ["FS", "AI", "DL", "ML"],
//     hobbies: {
//         games: ["Cricket", "Football"],
//         listening: "Starboy",
//     },
//     67:"test"
// }

// //Find which subject has maximum marks along with subject name

// let obj1 = {
//     maths:56,
//     english:89,
//     science:67,
//     punjabi:88
// }

// let max = 0
// let sub = ""

// for (let i in obj1){
//     if(obj1[i]>max){
//         max = obj1[i];
//         sub = i
//     }
// }

// console.log(sub, max)


//functions



// function myFunction(a, b, c) {   //parameters
//     let out = a + b + c;

//     console.log(out)
// }

//ES6:- Ecma script 6, commonJS

// let, const, arrow function

// const arrowFun = (a, b, c) => {
//     let out = a + b + c;

//     console.log(out)
// }

// arrowFun(89, 89, 89)

// arrowFun(10, 20, 30)   //invoking the function
// arrowFun(10, 60, 40)

// arrowFun(178, 567, 4563)

// arrowFun(78654, 87634, 976345) //arguments


// console.log(batch)

// var batch = "FS";


// let out = myFun(23, 45, 56);

// console.log(out)


// function myFun(){

//     let sum = 100

//     console.log(sum)

// }

// myFun()

// console.log(sum)


// console.log(name)

// var name = "Praljyoti"


// block scop, global scop

// console.log(myName)             //myName = undefined

// let myName = "Rabi"             //myName="Assam"

// myName = "Assam"

// console.log(myName)

//IIFE

// (()=>{
//     console.log("IIFE")
// })()


//JS property Hoisting, all traditional functions, var
//Execution context

//Higher order function


//forEach, map, filter, reduce

//They all will have arrays as input

// let arr = [1,2,3,4,5,6,7,8,9]


//forEach

// arr.forEach((e, i)=>{
//     console.log(e*4)
// })


// //map

// let mapOut = arr.map((e, i)=>{
//     return e*2
// })

// console.log(mapOut)

//filter

// let filterOut = arr.filter((e, i)=>{
//     return e%2!==0
// })

// console.log(filterOut)




// console.log(reduceOut)


// let arr1 = [2,4,6,8,10,3,5,7,9]


// let out = arr.map((el, i)=>{
//     return el*3
// }).filter((el, i)=>{
//     return el%5==0
// }).forEach((el, i)=>{
//     console.log(el*200)
// })

// console.log(out)


// let arr = [1,2,3,4,5]

// let out = arr.reduce((acc, el)=>{
//     return acc+el
// })

// console.log(out)


//You will be having one object of products with product name and product price, you need to find out final price of each product after certain discount.

let products = {
    laptop:45000,
    iphone:67000,
    mobileCover:1200,
    tablet:58999
}

// discount is 15% on each product
//Find out final price of each products after discount in certain relevant data structure