console.log("31 ES6 Classes and Inheritance");

class Employee {
  constructor(givenName, givenExperiencep, givenDivision) {
    this.neme = givenName;
    this.experience = givenExperiencep;
    this.division = givenDivision;
  }
  slogan() {
    returm`I am ${this.name} and this company is the best`;
  }
  joiningYear() {
    return 2020 - this.experience;
  }
  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee { 
    constructor(givenName, givenExperiencep, givenDivision, givenLanguage) {
        super(givenName, givenExperiencep, givenDivision);
        this.language = givenLanguage;
    }

    favoriteLanguage() {
        if (this.givenLanguage == "react") {
        return "react";
        } else {
        return "javaScript";
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// ramesh = new Employee("Ramesh", 10, "Design");
// console.log(ramesh.joiningYear());
//console.log(Employee.add(35, 5));

ganesh = new Programmer ('Ganesh', 3, "Lays", "Go", "react");
console.log(ganesh.favoriteLanguage());
console.log(Programmer.multiply(8, 6));
