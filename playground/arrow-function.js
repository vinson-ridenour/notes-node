var square = (x) => x * x; // or var square = x => x * x; --dont need parentheses if only 1 argument
console.log(square(9));

var user = {
    name: 'Vinse',
    sayHi: () => {
        console.log(arguments); // we get global arguments variable from this, no bueno
        console.log(`Hi. I'm ${this.name}`); // arrow functions do not bind a 'this' keyword -- this will return "Hi. I'm undefined."
    },
    sayHiAlt () {
        console.log(arguments); // arguments object is always specific in a regular function
        console.log(`Hi. I'm ${this.name}`); // use this syntax when defining object literals
    }
};

user.sayHi();
user.sayHiAlt();
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);

// TL;DR if you need the 'this' keyword or arguments object, don't use arrow functions, use regular functions