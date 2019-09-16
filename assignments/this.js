/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global binding of the this keyword. If there is no object for the this keyword to point to, it will keep going out layers
      to find one, until it eventually reaches the window object of the browser.
* 2. The implicit binding of the this keyword. Whenever you use dot notation to access an objects key value pairs the this kewyord
      refers to the object to the left side of the dot
* 3. The new binding of the this keyword. Whenever a constructor function is made the this keyword refers to the object that will be
      created by the constructor.
* 4. The explicit binding of the this keyword. Whenever a call or apply method is used the this keyword can be custom bound to whatever
      you specify.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const object = {
    key: 'value',
    method: function() {
        console.log(`The value of this objects key is: ${this.key}!`);
    }
}

object.method();

// Principle 3

// code example for New Binding
function ObjectConstructor() {
    this.name = 'Johnson';
    this.talk = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
}

const objectInstance = new ObjectConstructor();

objectInstance.talk();

// Principle 4

// code example for Explicit Binding
const myNewObject = {
    name: 'Freddy',
    age: 50,
    sex: 'M'
};

objectInstance.talk.call(myNewObject);