/*
Class Error Manual :
- JavScript sudah memiliki standard class error
- tapi lebih baiknya kita bisa membedakan jenis error nya agar tidak disamaratakan
- Caranya cukup membuat class turunan dari class error
- Dan beri message agar bisa dikirimkan ke parameter di constructor class error
*/

class ValidationError extends Error{
    //block class error
    constructor(message, field){
        super(message);
        this.xfield = field;
    }
}

class Math {
    static sum(...numbers){
        if (numbers.length ===0) {
            throw new ValidationError("Total parameter harus > 0","numbers");
        }
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total
    }
}

try{
    console.info(Math.sum());
    console.info("Jaka")
}catch(error){
    if (error instanceof ValidationError){
        //jika error nya dari ValidationError
        console.error(`Terjadi error pada field ${error.xfield}, dengan error: ${error.message}`);
    }else {
        console.error(`Terjadi error: ${error.message}`)
    }
    
}finally{
    console.info(`Program selesai`)
}

