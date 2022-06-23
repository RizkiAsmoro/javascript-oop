/*
Static Method :
- Sama seperti static field, method static menjadi milik class nya bukan prototype-nya
- cara aksesnya sama seperti class static field
*/

class Math {
    static sum (...numbers){
        let total = 0;
        for (const x of numbers){
            total +=x;
        }
        return total;
    }
}
const result = Math.sum(1,2,3,4,5);
console.info(result);