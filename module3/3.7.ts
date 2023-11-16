{
///

//------------> Static in OOP


class Counter{ // manual process
    count:number=0
    increment(){
        return (this.count=this.count+1)
    }
    decrement(){
        return (this.count=this.count-1)
    }
}
const instance1=new Counter()
console.log(instance1.increment())
console.log(instance1.increment())
console.log(instance1.increment())
console.log(instance1.increment())

const instance2=new Counter()
console.log(instance2.decrement())
console.log(instance2.decrement())
console.log(instance2.decrement())
console.log(instance2.decrement())
console.log(instance2.decrement())

//------------> use static 

class CounterStatic{
static count:number=0
///if we use  static keyword then we are not getting access by this keyword

increment(){
    return (CounterStatic.count=CounterStatic.count+1) ///---we have to use the class function name that we decleare


}
decrement(){
    return (CounterStatic.count=CounterStatic.count-1)
}
}

const instance3=new CounterStatic()
console.log(instance3.increment())
console.log(instance3.increment())
console.log(instance3.increment())
console.log(instance3.increment())

const instance4=new CounterStatic()
console.log(instance4.decrement())
console.log(instance4.decrement())
console.log(instance4.decrement())
console.log(instance4.decrement())
console.log(instance4.decrement())


class CounterStaticFun{
    static count:number=0

   static increment(){ // we can use in the function as static keyword
        return (CounterStatic.count=CounterStatic.count+1) 
    
    }
   static decrement(){
        return (CounterStatic.count=CounterStatic.count-1)
    }
    }

    //--------> in this case we are not need to make the instance . we able to direct call the function 
    console.log(CounterStaticFun.increment()) 
    console.log(CounterStaticFun.decrement()) 
    console.log(CounterStaticFun.decrement()) 
    console.log(CounterStaticFun.increment()) 
    ///
}