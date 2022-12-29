// const arr = ["Deep" , "Ketan" , "Jatin" , "Ram" , "Raju"];

// const demon = (n1 , n2 , n3 , ...rest) => {
//     console.log(rest)
//     console.log(n1 , n2 , n3)
// }
// demon(arr[0] , arr[1] ,arr[2] , arr[3] ,arr[4])

const student = {
  name: "Deep",
  age: 20,
  isMarried: false,
  isEducated : false
};

const { name, ...rest } = student;
console.log(name, rest);

//spread is used for changing in the objects where the structure or field of that object is almost similar and only few things will require to be changed
//rest is used for getting the extra stuffs in the form of array or object
