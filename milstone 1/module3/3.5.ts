{

///----------Access Modifiers



//---->it use public this will be access able form out side of the class selector

//---->it use private this will not be access able form out side of the class selector



//-----------> if use readonly this will never change .that means this value is always fixed
//---.we can use protected 

class BankAccount{
    // id:number;
    public readonly id:number; 
    public name:string;
    // private  balance:number;
    protected  _balance:number; /// we write _balance because this s the standard way

    constructor (id:number,name:string,balance:number){
        this.id=id,
        this.name=name,
        this._balance=balance
    }
    public addDeposit(amount:number){
        this._balance=this._balance+amount
    }
    public getBalance(){
        return this._balance
    }
}
class StudentAccount extends BankAccount{
    test(){
        this._balance///here we can get access to modify balance
    }
}

const goribManuserAccount=new BankAccount(111,'Mr . Gorib',2000)

/// goribManuserAccount.balance =0 // we are not getting access in this way
const myBalance =goribManuserAccount.getBalance()
console.log(myBalance)


}