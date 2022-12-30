/*
 * var has a function scope not a block scope
 */ 

/*
 * using var as a block scope 
 */
var i;
let sum = 0;
for(i = 0 ; i <=2 ; i++){
    var j = 2;
    sum+=i;
}

console.log(j)

/*
 * using var as a function scope
 */
function Car (){
    var k = 2;
    console.log("Hey")
}
Car()
console.log(k)

/*
 * for let and const they both have the block scope and function scope
*/

function Hello () {
    const m = 0;
    console.log("Hello")
}
Hello();
console.log(m)

/*
 * for block scope 
 */
var n;
let sum1 = 0;
for(n = 0 ; n<2 ; n++){
    let h = 2;
    sum1+=n;
}
console.log(sum1);
