/*
- Prototype selalu memiliki parent, artinya dia adalah turunan, turunan tertingginya adalah object prototype
*/

function Employee(name) {
  this.eName = name;
}
function Manager(name) {
  this.mName = name;
}

//Manager.prototype = Employee.prototype; //pewarisan yang salah
Manager.prototype = Object.create(Employee.prototype); //pewarisan yang benar

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, this is ${this.mName} your new Manager`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, this is ${this.eName} your new Employee`);
};

const employee = new Employee("Jaka");
employee.sayHello("Agus");

const manager = new Manager("Gugun");
manager.sayHello("Agus");

console.info(employee);
console.info(manager);
