/*
Class : Field Public
- Ditempatkan diluar constructor, selevel dengan penempatan method
- Bisa diakses dari luar class
- Cara membuatnya adalah dengan langsung buat nama field-nya dengan value-nya yang selevel sama method
- Jika tidak memasukan field maka nilainya undefined
*/

class Customer {
    cName;
    cAddress;
    balance = 0;

    constructor(Name, Address){
        this.cName = Name;
        this.cAddress = Address;
    }

    sayHi(){ //method

    }
}
const x = new Customer("Rizki", "Jakarta");
console.info(x);


