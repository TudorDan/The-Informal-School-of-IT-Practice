function Person(age) {
    this.age = age;
    this.getInfo = function() {
        return 'I am ' + this.age + ' years old';
    }
}

function Employee(age, salary) {
    this.age = age;
    this.salary = salary;
    this.getInfo = function() {
        return 'I am ' + this.age + ' years old ' + 'and earn ' + this.salary + ' dollars.'; 
    }
}

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;

//The argument 'obj' can be of any kind. getInfo() will execute depending on obj
function showInfo(obj) {
    console.log(obj.getInfo());
}

var person = new Person(18);
var employee = new Employee(43, 50000);

showInfo(person);
showInfo(employee);