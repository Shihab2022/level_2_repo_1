{
    ////'///'

//--------> OOP - class

class Person {
    name :string;
   age:number;
   address:string
   
   
    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }
    getSlip(numOfHours:number){
        console.log(`${this.name} will sleep for ${numOfHours}`)
    }
}


class Student extends Person{
    constructor (name:string,age:number,address:string){
        super(name,age,address)
    }
}

const student1=new Student('mr. x',20,'uganda')

/// ---same way we make a teacher data as well 

class Teacher extends Person{
    designation:string

    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation=designation
    }

    takeClass(numOfClass:number){
        console.log(`${this.name} will take ${numOfClass}`)
    }
}

const teacher=new Teacher('Mr. Y',40,'uganda','professor')







    ////
}