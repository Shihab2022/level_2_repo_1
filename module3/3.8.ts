{
//////////////////////////////
//-------------------> polymorphism----->it gives different different output 
class Person{
    getSleep(){
        console.log('I am sleeping for 8 hours ')
    }
}
class Student extends Person{
    getSleep(){
        console.log('I am sleeping for 7 hours ')
    }
}
class Developer extends Person{
    getSleep(){
        console.log('I am sleeping for 7 hours ')
    }
}

const getSleepingHours=(param:Person)=>{
param.getSleep()
}
///----> //----> make instance
const person1=new Person()
const person2=new Student()
const person3=new Developer()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)



// ---------> another example here 

class Shape{
    getArea():number{
        return 0
    }
}











    //
}