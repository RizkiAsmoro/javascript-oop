
class Student {//membuat class

}
const jaka = new Student(); //membuat object jaka
console.info(jaka);


/*
Constructor di class
- Constructor digunakan jika ingin menambahkan parameter pada class
*/
 class Person {
    constructor(object){
        console.info(`Hallo object ${object} ini Constructor di class Person`)
    }
 }
 const x = new Person("X"); // object Y
 console.info(x);

 const y = new Person("Y"); //object Y
 console.info(y);


// Menambah Property pada Class
class Employee {
    constructor(name){
        this.nama = name //menambah property nama
    }
}
const budi = new Employee("Budi");
console.info(budi);
console.info(budi.nama)
