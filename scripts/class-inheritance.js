/*
Class Inheritance :
- Sebuah class bisa melakukan pewarisan dari class lain dengan kata kunci extends
- Class Inheritance sama seperti prototype inheritance yang hanya bisa memiliki satu parent class
*/

class Member {
    sayHi(name){
        console.info(`Hi ${name}, My name is ${this.name} as a new member`);
    }
}

class goldMember extends Member { //kata kunci extends sebagai pewarisan
    sayHello(name){
        console.info(`Hello ${name}, My name is ${this.name} as a gold member`);
    }
}
const m1 = new Member();
m1.name = "Jaka";
m1.sayHi("Budi")


const m2 = new goldMember();
m2.name = "James";
m2.sayHello("Budi");//memanggil object sayHello di dalam class goldMember
m1.sayHi("Agus")//memanggil object sayHi yang diwarisi dari class Member

console.info(m1);
console.info(m2); 