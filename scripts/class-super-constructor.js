/*
Super Constructor pada Class :
- Sama seperti Constructor inheritance yang melakukan eksekusi constructor lain dengan tujuan 
  agar property di constructor lainnya bisa ditambahkan ke instance object ini
- Jika menggunakan class maka menggunakan kata kunci super,
  dan menjadi wajib untuk memanggil parent constructor
  di child class saat membuat contructor,walaupun di parent tidak ada constructor
*/
class Member {
    constructor(firstName){
        this.fName = firstName;
    }
    sayHi(name) {
        console.info(`Hi ${name}, i'm ${this.fName} as a new member`);
    }
}

class goldMember extends Member{
    constructor(firtName, lastName){
        super(firtName);
        this.lname = lastName
    }
    sayHello(name){
        console.info(`Halo ${name}, i'm ${this.fName} ${this.lname} as a gold member`)
    }
}

const x = new Member("Spiderman");
x.sayHi("Hulk");

const y = new goldMember("Black","Widow");
y.sayHello("Hulk")


console.info(x);
console.info(y);