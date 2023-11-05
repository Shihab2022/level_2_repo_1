{//learning function
//normal function
function add(num1:number,num2:number){
    return num1+num2
}
function addWithType(num1:number,num2:number):number{
    return num1+num2
}
add(2,2)
// add(2,'4') //this will give error because '4' is string .

//arrow function

const addArrow=(num1:number,num2:number)=>num1+num2
//same as normal function

// we are put a type what is the type of the output 
const addArrowWithType=(num1:number,num2:number):number=>num1+num2

const poorUser={
    name:'shihab',
    balance:0,
    addBalance(balance:number){  //inside object you can not pass arrow function you have always pass a normal function 
        return this.balance+balance
    }
}

// Here inside the object function if we want to pass any string then we can define the output type 


const poorUserWithType={
    name:'shihab',
    balance:0,
    addBalance(balance:number):string{  //inside object you can not pass arrow function you have always pass a normal function 
        return `this is my new balance ${this.balance+balance} `
    }
}


const array:number[]=[2,3,44,56,33]
const newArray=array.map((ele:number)=>ele*ele)}