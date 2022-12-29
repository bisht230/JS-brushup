// const demons = (num) => {
//    console.log(num)
//    let d = 10;
//    let c = 10

//    return function (b) {            // using anonymous function //
//      console.log(num + b + c + d)
//    }
// }
//  let fin = demons(5);
//  console.log(fin(10))

//a functional scope 

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

//a global scope 

//var makes a global variable
// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);


// function makeFunc() {
//   const name = 'Mozilla';
//   return function displayName() {
//     console.log(name);
//   }
// }

// const myFunc = makeFunc();     //displayname function is referenced with myFunc
// myFunc()

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
 // add5 and add10 both are the closure : As they are using the same function with different lexical enviroment
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);    // closure1
const size14 = makeSizer(14);    // closure2
const size16 = makeSizer(16);    // closure3



