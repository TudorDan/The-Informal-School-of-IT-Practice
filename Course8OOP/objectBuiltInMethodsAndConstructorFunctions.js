const obj1 = {
    a: 'something',
    b: 42,
    c: false
};
console.log(Object.keys(obj1)); //['a', 'b', 'c']
console.log(Object.values(obj1)); //['something', 42, false]
console.log(Object.entries(obj1));//[ [ 'a', 'something' ], [ 'b', 42 ], [ 'c', false ] ]

//constructor function
function User(options) {
  this.name = options.name || '';
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.sayHi = function() {
    console.log('Hi');
  }
}

//add more class methods
User.prototype.sayHiTo = function(name) {
  console.log('Hi' + name);
}
User.prototype.calculateBMI = function() {
  //intentionally incorrect expression
  return this.height / this.weight;
}

//instantiating an object
var john = new User({
  name: 'John Doe',
  age: 25,
  height: 170,
  weight: 70
});
john.name //'John Doe'
john.calculateBMI() // 2.42

//instantiating an object
var mary = new User({
  name: 'Marry Anne',
  age: 35,
  height: 160,
  weight: 50
});
mary.name //'Marry Anne'
mary.calculateBMI() //3.2

//updating a method on all object instances
User.prototype.calculateBMI = function() {
  var heightInMeters = this.height / 100;
  return this.weight / (heightInMeters * heightInMeters);
}
john.calculateBMI() //24.22
mary.calculateBMI() //19.53