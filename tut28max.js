// extends with constructor super(); keyword

class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

//class
class Person extends AgedPerson {
  name = "max";
  constructor() {
    super();
    this.age = 30;
  }
  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  }
}

//constructor function
// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function(){
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
//     );
//   };
// };

// Person.prototype = {
//   printAge(){
//     console.log(this.age);
//   }
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);

// const person = new Person();
// person.greet();

const course = {
  title: "sdsadsadsa sds dd",
  rating: 5,
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
