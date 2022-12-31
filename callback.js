const demon = [{
    name : "Deep",
    profession : "SDE"
},
{ 
    name : "Ketan",
    profession : "SDE"
}]

const getData = () => {
    setTimeout(() => {
        demon.forEach((dataName , index) => {
              console.log(dataName.name)
        })
    }, 1000);
}

const createData = (callback) => {                   /* addition of callback  */
    setTimeout(() => {
        callback()    //calling at the end   */ it will go downwards /*
        demon.push({name : "jatin", profession : "SDE"}) 
        //callback()
    }, 2000);
}

createData(getData)

/*
 * By using promise
   
 */
// const createData = new Promise ((resolve , reject) => {
//       let error = true;
//       if(!error){
//         resolve();
//       }
//       else{
//         reject("Error up!")
//       }
// })

// createData.then(getData).catch((e) => {console.log(e)})


