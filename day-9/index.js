let obj = {
    name: "Suraj",
    uni: "ADTU",
    course: "Btech",
    year: 3,
    isAlumni: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobbies: {
        games: ["Cricket", "Football"],
        listening: "Starboy",
        test:{
            test1:{
                test2:{
                    test3:{
                        test4:{
                            test5:{
                                abc:"RS"
                            }
                        }
                    }
                }
            }
        }
    },
    67:"test"
}

let firstValue = obj["name"]

console.log(firstValue);

obj["course"] = "MCA";

console.log(obj);

let deletedKetValue = delete obj["uni"]

console.log(deletedKetValue)

console.log(obj.hobbies);

obj["isMarried"]=false;


console.log(obj.hobbies.test.test1.test2.test3.test4.test5["100"]);

// obj["isMarried"]=true;

// console.log(obj)



// // loops:- for loop, while loop, for of loop, for in loop.

// let num = 10;

// for(let i = 0; i<num; i=i+1){
//     console.log(i)
// }


// let std = ["Nishita", "Rezwan", "Rabi", "Aryan", "Mriganka", "Supriya", "Mahavir", "Nantelo","Bhaskar"]


// for(let i = 0; i<std.length; i++){
//     for(let j=0; j<std[i].length; j++){
//         console.log(std[i][j])
//     }
// }


let alph = "abcdefghijklmnopqrstuvwxyz";

for (let i=0; i<alph.length; i++){
    if(i%2==0){
        console.log("This Alphabet", alph[i], "on even index" );
        if(i==10){
            console.log("This alphabet is not special", alph[i])
        }
    }else{
        console.log("This Alphabet", alph[i], "on odd index" );
        if(i==17){
            console.log("This alphabet is not special", alph[i])
        }
    }
}



// let firstStudent = std[0];

// for(let i=0; i<firstStudent.length; i++){
//     console.log(firstStudent[i])
// }