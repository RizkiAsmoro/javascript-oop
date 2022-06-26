/*
Throw Error :
- dokumentasinya ada di : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
- melakukan trigger sebuah error dalam program, jadi otomatis program akan berhenti
  dan kita dapat melihat detail error nya di console aplikasi browser
*/


class Math {
    static sum (...numbers){
        if (numbers.length === 0){
            throw new Error("Total parameter harus > 0")
        }

        let total = 0;
        for (const x of numbers){
            total +=x;
        }
        return total;
    }
}
console.info(Math.sum())//saat program akses baris ini maka akan ke throw error dan program berhenti
console.info("Rizki")


const result = Math.sum(1,2,3,4,5);
console.info(result);


