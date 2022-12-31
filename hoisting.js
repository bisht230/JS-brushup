/*
 * a variable can be used before it has been declared
 */

/*
 * short example
 */

x = 5; // Assign the value for x
y = 6; // Assign the value for x
console.log(x + y);
var x; // Declaring it    javascript hoist this at the top
var y; // Declaring it    javascript hoist this at the top

// JavaScript only hoists declarations at the top , not initializations

var m = 5;
var n = 10;
console.log(m + n);

// This is because only the declaration (var a), not the initialization (=15) is hoisted to the top.
var z = 10;
var a;
console.log(z + a);
a = 15;

/*
 ? To avoid bugs, always declare all variables at the beginning of every scope.
 */

/*
 ? Since this is how JavaScript interprets the code, it is always a good rule 
  
  */
