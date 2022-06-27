/*
Error Handling:
- Menggunakan kata kunci try dan catch jika ingin menangkap error tapi kode program masih bisa tetap berjalan
- Pada block try, jika mencoba mengakses kode program yang bisa menyebabkan error, 
  jika error maka maka block catch akan menangkap error nya
- Jika tidak terjadi error maka block catch tidak dieksekusi
Kata Kunci Finaly:
- di dalam blok program finaly kita tetap bisa melakukan eksekusi kode program setelah try catch selesai 
walaupun terjadi error ataupun tidak pada try catch 
*/


class Math {
    static sum (...numbers){
        //kondisi jika error
        if (numbers.length === 0){
            throw new Error("Total parameter harus > 0")//melempar error
        }

        let total = 0;
        for (const x of numbers){
            total +=x;
        }
        return total;
    }
}

try{
    console.info(Math.sum());//error sum-nya 0
    console.info("Rizki")//kode ini tidak dieksekusi karena masuk pada error
}catch(error){
    //menangkap error dan tampil pada console
    console.info(`Terjadi Error : ${error.message}`);
}finally{
    console.info(`Program selesai`)
}
//program tetap berjalan dan kode dibawah akan dieksekusi
console.info("Asmoro")