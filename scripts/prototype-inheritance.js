/*
Prototype Inherintance:
- Saat kita membuat object dari constructor function, object tersebut adalah instance
  ,Semua property (value / method) akan berada di dalam instance object-nya
- Saat kita membuat constructor function maka secara otomatis akan dibuatkan prototype-nya
- Saat membuat object instance maka secara otomatis object tsb adalah turunan dari constructor prototype-nya
- Untuk mengakses prototype dari sebuah instance yang sudah kita buat maka dapat menggunakan _proto_

*/

//Menambah Property ke Prototype
function Member(firstName, lastName){
    this.fName = firstName;
    this.lName = lastName;
    this.sayHi = function(name){
        console.info(`Hi ${name} my name is ${this.firstName}`);
    }
}

Member.prototype.sayHello = function(){//menambah property ke dalam prototype bukan ke instance object nya
    console.info("Hello");
}

Member.prototype.sayBye = function(){//menambah property ke dalam prototype bukan ke instance object nya
    console.info("Bye bye");
}

const rizki = new Member ("Rizki", "Asmoro");
const jaka = new Member ("Jaka", "Tingkir")

console.log(rizki);
console.log(jaka);

rizki.sayBye();//akses property 
jaka.sayHello();

/*
Akses property dari object instance:
Pertama akan cek apakah object tsb terdapat property atau tidak, jika tidak maka akan di cek ke prototype-nya
jika masih tidak ada maka akan dicek ke prototype diatasnya sampai berakhir di object prototype

*/