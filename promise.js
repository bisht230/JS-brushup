//promise

const event = new Promise((resolve,reject) => {
      let name = 'Deep';
      if(name === "Deep"){
        resolve(name);
      }
      else{
        reject("Error up !")
      }
})


event.then((name) => {
     console.log(name)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Promise runnning")
 })

const axios = require("axios");

const data = axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

// By using promise 

// data.then((res) => {
//      console.log(res);
// }).catch((e) => {
//    console.log("Error up !!")
// })


//For reducing the use of promise we should use async and await as a best alternative
