{

///----> getter and setter means we get any value by getter and set value by setter .. If we use this getter and setter out code will be much more cleaner

    class BankAccount{
        public readonly id:number; 
        public name:string;
        protected  _balance:number; 
        constructor (id:number,name:string,balance:number){
            this.id=id,
            this.name=name,
            this._balance=balance
        }
        // public addDeposit(amount:number){
        //     this._balance=this._balance+amount
        // }
        set deposit(amount:number){
this._balance=this._balance+amount
        }
        // public getBalance(){
        //     return this._balance
        // }
        get balance(){
            return this._balance
        }
    }
    
    const goribManuserAccount=new BankAccount(111,'Mr . Gorib',2000)
    /// goribManuserAccount.deposit=0
    //goribManuserAccount.addDeposit(30)/// function call korte hsse
    goribManuserAccount.deposit=3000
    // const myBalance =goribManuserAccount.getBalance()
    const myBalance=goribManuserAccount.balance
    console.log(myBalance)
}