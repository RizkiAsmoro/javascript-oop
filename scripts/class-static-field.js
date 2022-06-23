/*
Static Class Field :
- Jika ditambahkan static maka field tersebut sudah tidak lagi milik instance object
  melainkan milik class itu sendiri
- Biasanya digunakan jika ingin membuat utility field atau function
- Static field biasanya diartikan sifatnya global yang bisa diakses dimanapun
*/

class Student {
    static name = "Rizki W Asmoro"
    static id  = 111222333
    static address = "Jakarta"
}

//tidak bisa diakses seperti dibawah ini jika menggunakan static field
//const x = new Student();
//console.info(x);

//cara akses-nya seperti variable global
console.info(Student.name);
console.info(Student.id);
console.info(Student.address);