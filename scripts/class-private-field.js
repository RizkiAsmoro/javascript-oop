/*
Class : Private Field :
- Secara default saat menambahkan field maka field tsb bisa diakses dimanapun/public
- Jika ingin private / hanya bisa diakes di dalam class tsb saja maka kata kuncinya adalah # sebelum nama fiel-nya
- Update EcmaScript dapat diakses di : https://github.com/tc39/proposal-private-methods
*/

class Counter {
    #counter = 0;

    increment(){
        this.#counter++;
    }
    decrement(){
        this.#counter--;
    }
    get(){
        return this.#counter;
    }
}

const xcounter = new Counter();

//naikan nilai 3 kali
xcounter.increment();
xcounter.increment();
xcounter.increment();

console.info(xcounter.get())//nilai yang muncul 3 
console.info(xcounter);//di dalam ada nilai dari #counter yaitu 3
    