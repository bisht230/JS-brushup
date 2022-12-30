/*
 * Destructuring is method where we just extract the required information from the previously given information 
 */
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    const remainder = a % b; 
    return [
        add, 
        subtract, 
        multiply, 
        divide,
        remainder
    ];
  }
  
  const [add, subtract, multiply, divide , remainder]= calculate(8,4);
  console.log(add , subtract , multiply , divide , remainder)

 /*
  *  Example 2  
  */

 
 const vehicles = ["Baleno" , "Eicher" , "XUV700"];
 const [car , truck , ] = vehicles;

 console.log(car , truck)