/*
Operator Instanceof :
- Jika ingin mengecek sebuh object merupakan instance dari suatu class tertentu
  atau bukan maka menggunakan operator instanceof dan hasilnya adalah boolean (true atau false). 
- Tidak bisa menggunakan typeof jika menggunakan typeof maka hasilnya akan object  
*/

// Cek instance rizki dan asmoro ada pada class antara teacher dan student

{
    console.info(`-------------contoh 1-----------`)
    class Teacher{

    }
    class Student {
    
    }
    
    const rizki = new Teacher();//instance rizki
    const asmoro = new Student();//instance asmoro
    
    //tidak bisa mengggunakan typeof
    console.info(typeof rizki);// yang muncul adalah object
    console.info(typeof asmoro);// yang muncul adalah object
    
    // harusnya menggunakan instanceof
    console.info(rizki instanceof Teacher);//true
    console.info(rizki instanceof Student);//false
    console.info(asmoro instanceof Teacher);//false
    console.info(asmoro instanceof Student);//true

}

{   // Operator instanceof di class inheritance
    console.info(`-------------contoh 2-----------`)

    class Employee{

    }
    class Manager extends Employee {

    }

    const jaka = new Employee();
    const alex = new Manager();

    console.info(jaka instanceof Employee);//true
    console.info(jaka instanceof Manager);//false
    console.info(alex instanceof Employee);//true, karena alex ada di class manager, class manager adalah turunan dari class employee 
    console.info(alex instanceof Manager);//true

}