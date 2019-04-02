/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit-anything left of the dot
* 2. Explicit-call, apply, bind methods
* 3. new-creating new object 
* 4. Window-if this isn't pointing to anything it would be the entire window
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
  console.log(this);
  return name;
}
console.log(sayName("Kyle"));

// code example for Window Binding

// Principle 2
const obj1 = {
  name: "Kyle",
  age: 23,
  interests: function(){
    return `My name is ${this.name} and I am ${this.age} years old attending Lambda School`
  }
}
console.log(obj1.interests())

// code example for Implicit Binding

// Principle 3
function Skills(javascript, html, css){
  this.javascript = 'Javascript',
  this.html = 'HTML',
  this.css = 'CSS',
  this.combine = function(){
    return `My skills are ${this.javascript}, ${this.html}, ${this.css}`
  }
}

const javascript = new Skills()
console.log(javascript.combine())
// code example for New Binding

// Principle 4

// code example for Explicit Binding