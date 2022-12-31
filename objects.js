/*
 * objects 
 */

const person = {
  name: "Deep",
  age: 20,
  isMarried: false,
};

/*
 * const {name , age , isMarried} = person
 * console.log(name)
 * console.log(age) 
 */

/*
 * role of spread operator 
 */

const person2 = { ...person, name: "Deepansh" };
const { name, age, isMarried } = person2;
console.log(name);
