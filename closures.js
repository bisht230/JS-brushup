const demons = (num) => {
   console.log(num)
   let d = 10;
   let c = 9

   return function (b) {            // using anonymous function //
     console.log(num + b + c + d)
   }
}

let final = demons(2)
console.log(final(5))

