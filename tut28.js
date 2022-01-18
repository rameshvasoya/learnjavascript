console.log("28 Object Prototype In javascript");

let obj = {
  name: "Ramesh",
  channel: "Code with ramesh",
  address: "Mars",
};
//console.log(obj);

function obj(givenName) {
  this.name = givenName;
}

obj.prototype.getName = function (){
  return this.name;
};

let obj2 = new obj("Suresh");
console.log(obj2);
