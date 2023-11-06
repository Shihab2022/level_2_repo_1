{
    ////'///'

//--------> OOP - class

class Animal {
    name :string; ///----we can use public   name :string;
    species:string; ///----we can use public   species:string;
    sound:string; ///----we can use public     sound:string;
  

    constructor(name:string,species:string,sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound
    }
/// -------> we can make this constructor to write in one line code use public parameter 

  //-----> constructor(public name:string, public species:string, public sound:string){} <-----if i write this line code we not need code that we write in previous 


    makeSound(){ // here we use normal function because this is not work in arrow function
        console.log(`the ${this.name} says ${this.sound}`)
    }
}
const dog=new Animal('German Shepard ','dog','ghew ghew');
const cat=new Animal('persian bhi','cat','mew mew')

///then if i write dog. then ts suggestion me how many property is there 

// dog.











    ////
}