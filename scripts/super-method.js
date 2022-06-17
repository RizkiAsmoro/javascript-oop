/*
Super Method :
- Kata kunci super dapat dipakai juga untuk mengakses method parennya dan constructor parent nya
- caranya ketik super titik nama function-nya
- super sebenarnya adalah reference ke parent prototype-nya, mirip seperti __proto__
*/

class highSchool{
    Teacher(){
        console.info(`This is method teacher highSchool`)
    }
}

class middleSchool extends highSchool{
    Student(){
        super.Teacher(); //memanngil super method Teacher
        console.info(`This is method Student middleSchool`)
    }
}

const mSchool = new middleSchool();
mSchool.Student();