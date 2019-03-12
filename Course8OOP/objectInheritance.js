//Shape's prototype is Object
function Shape(name) {
    this.name = name;
}
Shape.prototype.name = 'unnamed shape';
Shape.prototype.displayName = function() {
    console.log(this.name);
}
var s = new Shape('unnamed shape');
s.displayName();

function Rectangle(name, color) {
    this.name = name;
    this.color = color;
}
//Let Rectangle inherit Shape
Rectangle.prototype = new Shape();
Rectangle.prototype.constructor = Rectangle;
var r = new Rectangle('red rectangle', 'red');
r.displayName(); //inherited from Shape prototype


//just testing MDN JavaScript Objects Basics
var person = {
    name : {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
};
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;
//constructor function
function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
}
//Defining a constructor function which inherits all the members from Person()
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}