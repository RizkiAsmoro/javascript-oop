/*
Constructor Function
- Sebelum EcmaScript versi 6 pada saat pembuatan class menggunakan function
- Untuk membuat class di JavaScript yang lama kita membutuhkan function 
  dan function tsb dinamakan Cunstructor Function

*/
{
function Person(){ //best practice dalam membuat function mengunakan uppercase pada huruf pertama

}
//membuat object harus menggunakan kata kunci new
const rizki = new Person();
const asmoro = new Person();
}

/* untuk menambahkan property di dalam semua object yang dibuat dari Constructor Function
bisa menggunakan kata kunci 'this' lalu diikuti dengan nama property nya
*/
function Person(){
    this.firstName="";
    this.lastName="";
}
const rizki = new Person();
rizki.firstName = "RIZKI";
rizki.lastName = "ASMORO";

const alkha = new Person();
alkha.firstName = "ALKHALEENA";
alkha.lastName = "MAEZURRA";

console.log(rizki);
console.log(alkha);