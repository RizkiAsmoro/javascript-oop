/*
Method in Class :
- Saat menambahkan method pada class maka direkomendasikan di dalam prototype-nya bukan pada instance object-nya
*/

class Student {
    constructor(name){
        this.nama = name;
        //jika menambahkan method seperti dibawah ini maka method-nya akan menempel pada instance object-nya bukan pada prototype-nya
        //dan hal tsb tidak direkomendasikan
        /*this.sayHi = function(name){
            console.info(`Hi ${name}, my name is ${this.nama}`);
        }*/ 
    }
    //menambahkan method pada prototype-nya dan ini yang direkomendasikan
    sayHi(name){
        console.info(`Hi Mr ${name}, my name is ${this.nama}`);
  }
}
const s1 = new Student("Jaka");
console.info(s1);
s1.sayHi("James")

const s2 = new Student("Jaka");
console.info(s2);
s2.sayHi("Bean")
