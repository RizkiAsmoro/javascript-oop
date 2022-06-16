/*
Super Constructor pada Class :
- Sama seperti Constructor inheritance yang melakukan eksekusi constructor lain dengan tujuan 
  agar property di constructor lainnya bisa ditambahkan ke instance object ini
- Jika menggunakan class maka menggunakan kata kunci super,
  dan menjadi wajib untuk memanggil parent constructor
  di child class saat membuat contructor,walaupun di parent tidak ada constructor
*/
class Member {
    //constructor dalam Member
    constructor(firstName){
        this.fName = firstName;
    }
    sayHi(name) {
        console.info(`Hi ${name}, i'm ${this.fName} as a new member`);
    }
}

class goldMember extends Member{//extends : class goldMember jadi class turunan Member
    //constructor dalam goldMember sebagai turunan class Member
    constructor(firtName, lastName){
        super(firtName);//super : wajib memanggil class parent nya (Member), firstName adalah parameternya
        this.lname = lastName//parent class sudah ada firstName jadi properti yang ada di parent tidak perlu dideklarasikan
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

/* NOTE :
Jika child class ingin menggunakan constructor maka wajib memanggi supper constructor yang ada di parent class,
walaupun pada parent class tidak ada constructor.
*/