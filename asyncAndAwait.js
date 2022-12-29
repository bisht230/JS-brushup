//By using async and await 
const axios = require("axios")
const fetchData = async () => {
    try {
       const data = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
       console.log(data) 
    }
    catch(err){
       console.log(err)
    }
}

fetchData()

