const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const arr = {...myVehicle , ...updateMyVehicle}
  console.log(arr)


  /*
   * In terms of array combination 
   */
  
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
     
    const newArr = [...arr1 , ...arr2]
    console.log(newArr)
    

    /*
     * In terms of objects 
     */
     
     const myDetails = {
        name : "Deepanshu",
        age : 20,
        isMarried : false
     }

     const schoolDetails = {
        name : "TPS",
        address : "Keshav Puram"
     }

     const final = {...myDetails , ...schoolDetails};
     console.log(final)
     