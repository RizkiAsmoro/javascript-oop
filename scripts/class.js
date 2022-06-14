
class Student {//membuat class

}
const jaka = new Student(); //membuat object jaka
console.info(jaka);


/*
Constructor di class
- Constructor digunakan jika ingin menambahkan parameter pada class
*/
 class Person {
    constructor(name){
        console.info(`Hallo object ${name} ini Constructor di class Person`)
    }
 }
 const x = new Person("X"); // object x
 console.info(x);

 const y = new Person("Y");
 console.info(y);