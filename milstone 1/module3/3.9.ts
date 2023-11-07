{

///-----------?__>Abstraction


// ----  use the interface 
//'//' idea
interface Vehicle1{
    startEngine():void;
    stopEngine():void;
    move():void
}

//--real implementation
class Car implements Vehicle1{
    startEngine(): void {
        console.log('I am starting the car engine ')
    }
    stopEngine(): void {
        console.log('I am stopping the car engine')
    }
    move(): void {
        console.log('i am moving the car')
    }
    ///-----> We can add more extra property if we need 
    test(){
        console.log('this is for testing extra ')
    }
}

const toyotaCar=new Car()
toyotaCar.startEngine()///here we can access all the property 
toyotaCar.stopEngine()





    ///---------> now we can generate abstract class

    // ---- idea
    abstract  class Car2 {
       abstract startEngine(): void 
       abstract  stopEngine(): void 
       abstract move(): void 
        ///-----> We can add more extra property if we need 
        test(){
            console.log('this is for testing extra ')
        }
    }
    
class ToyotaCar extends Car2{
    startEngine(): void {
        console.log('I am starting the car engine ')
    }
    stopEngine(): void {
        console.log('I am stopping the car engine')
    }
    move(): void {
        console.log('i am moving the car')
    }
}










    //
}