/*
Constructor Function
- Sebelum EcmaScript versi 6 pada saat pembuatan class menggunakan function
- Untuk membuat class di JavaScript yang lama kita membutuhkan function 
  dan function tsb dinamakan Cunstructor Function

*/
{
  //class
function Student(){ //best practice dalam membuat construction function mengunakan uppercase pada huruf pertama

}
//membuat object harus menggunakan kata kunci new
const rizki = new Student();
const asmoro = new Student();
}

/* untuk menambahkan property di dalam semua object yang dibuat dari Constructor Function
bisa menggunakan kata kunci 'this' lalu diikuti dengan nama property nya
*/
function Person(){
    this.firstName= "";
    this.lastName = "";
    this.sayHello = function(name){
      console.info(`Hello ${name} my Name is ${this.firstName}`);//method dalam constructor function
    }
}
const rizki = new Person();
rizki.firstName = "RIZKI";
rizki.lastName = "ASMORO";
rizki.sayHello("Jaka");

const alkha = new Person();
alkha.firstName = "ALKHALEENA";
alkha.lastName = "MAEZURRA";
alkha.sayHello("Jaka");

console.log(rizki);
console.log(alkha);

/*
Parameter di Constructor Function
Jadi ketika membuat object maka datanya bisa dikirim langsung lewat parameter
*/

function Cars(brand, type){
  this.brandName = brand;
  this.typeName = type;
  this.launching = function(release){
    console.info(`Hello ${release}, let me introduce New ${this.typeName} from ${this.brandName}`);
  }
}

const toyota = new Cars("Toyota", "Alphard");
toyota.launching("Customers")

const hyundai = new Cars("Hyundai", "Creeta");
hyundai.launching("Customers");

// console.log(toyota);
// console.info(hyundai);

