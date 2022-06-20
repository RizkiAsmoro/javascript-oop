/*
Private Method:
- Caranya sama seperti private field dengan menambahkan # di awal method
- Update EcmaScript dapat diakses di : https://github.com/tc39/proposal-private-methods
*/

class say {
    weSay(name){
        if(name){
            this.#sayWelcome(name);
        }else{
            this.#sayGoodBy();
        }
    }

    #sayGoodBy(){
        console.info(`Good Bye`);
    }

    #sayWelcome(name){
        console.info(`Welcome ${name}`);
    }
}

const x =  new say();
x.weSay("Jaka");
//x.#sayGoodby();//jika paksa akses private method dari luar seperti ini maka akan error