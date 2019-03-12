//Prototype Property
var f = function() {
    console.log('check my prototype');
}
f.prototype //{} Prototype is empty by default

function User(options) {
    this.name = options.name || '';
    this.age = options.age;
    this.height = options.height;
    this.weight = options.weight;
    this.sayHi = function() {
      console.log('Hi');
    }
}
User.prototype

//Prototype Attribute
var userObj = new User({
    name: 'John Doe',
    age: 25,
    height: 170,
    weight: 70
});
userObj.prototype
Object.getPrototypeOf(userObj)

//Both expressions below are true
User.prototype === Object.getPrototypeOf(userObj);
User.prototype.isPrototypeOf(userObj);