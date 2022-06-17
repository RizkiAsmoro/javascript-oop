/*
Getter dan Setter pada Class :
- Class mendukung pembuatan getter dan setter
- Mirip seperti method, getter dan setter berada di prototype bukan di instance object
*/

class Employee{
    constructor(name, division ){
        this.eName = name;
        this.eDivision = division; 
    }
    get description(){
        return `${this.eName} ${this.eDivision}`
    }
    set description(value){
        const result = value.split(" ");
        this.eName = result[0];
        this.eDivision = result[1];
    }
}
const x = new Employee("Rizki", "Technology");
console.info(x);
console.info(x.description);

x.description = "Alkhaleena Technology"
console.info(x);