{



///--------------> instanceof guard

class Animal{
    name:string;
    species:string;

    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }
    makeSound(){
        console.log('hello i make sound')
    }
}


class Dog extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log('hey this is dog  and make bark')
    }
}
class Cat extends Animal{
    constructor(name:string,species:string){
        super(name,species)
    }
    makeMeaw(){
        console.log('hey this is cat and make meaw')
    }
}

const getAnimal=(animal:Animal)=>{
    // animal. //----here we have not get any dog or cat function that we declare 

    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if(animal instanceof Cat){
        animal.makeMeaw()
    }
    else{
        animal.makeSound()
    }
}
const dog=new Dog('this is dog','dog')
const cat=new Cat('this is cat','cat')


getAnimal(dog) /// we get that 'hey this is dog  and make bark'
getAnimal(cat) ///we get that 'hey this is cat and make meaw'


const isDog=(animal:Animal):animal is Dog=>{
    return animal instanceof Dog
}

const isCat=(animal:Animal):animal is Cat =>{
    return animal instanceof Cat
}
const getAnimalAsSmartWay=(animal:Animal)=>{
    // animal. //----here we have not get any dog or cat function that we declare 

    if(isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else{
        animal.makeSound()
    }
}






    //
}