//arrow function 
//ternary operators
//objects 
//map and filters
//promise
//async await (same as the concept of promise but for this we require a function)


//arrow function

const demonstration = (name) => {
    console.log(name)
}
demonstration("Deep")

//normal function 
// function demonstration(name) {
//   console.log(name)
// }
// demonstration("Deep")

//ternary operators

// const name = "Deep";
// const flag = true;

// console.log(flag ? name : 'Ketan')

//objects

// const person = {
//     name : 'Deep',
//     age : 20,
//     isMarried : false
// }

// const {name , age , isMarried} = person
// console.log(name)
// console.log(age)

//role of spread operator

// const person2 = {...person , name : 'Deepansh' }
// const {name , age , isMarried} = person2;
// console.log(name)

//maps and filters 

// const arr = ["ketan" , "deep" , "jatin"];
// arr.map((name) => {
//     console.log(name)
// })

// arr.filter((name) => {
//    if(name!=="deep"){
//     console.log(name)
//    }
//    })

//promise

// const event = new Promise((resolve,reject) => {
//       let name = 'Dep';
//       if(name === "Deep"){
//         resolve(name);
//       }
//       else{
//         reject("Error Up!!")
//       }
// })

// event.then((name) => {
//      console.log(name)
// }).catch((e) => {
//     console.log(e)
// }).finally(() => {
//     console.log("Promise runnning")
//  })

// const axios = require("axios");

// const data = axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

//By using async and await 

// const fetchData = async () => {
//     try {
//        const data = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.jsn");
//        console.log(data) 
//     }
//     catch(err){
//        console.log(err)
//     }
// }

// fetchData()

//By using promise 

// data.then((res) => {
//      console.log(res);
// }).catch((e) => {
//    console.log("Error up !!")
// })
