/*
Constructor Inheritance
- Dalam constructor kita bisa memanggil constructor lain 
  , jadi kita bisa mewarisi semua property yang dibuat di constructor lain tsb
- caranya : NamaCosntructor.call(this,parameter) 
*/

function Member(firstName){
    this.fName = firstName;
    this.sayHello = function (name){
        console.info(`Hello ${name}, my Name is ${this.fName}`);
    }
}

function GoldMember(firstName, lastName){
    this.lName = lastName;
    Member.call(this,firstName)
}
const rizki = new GoldMember("Rizki", "Asmoro");
console.info(rizki);

