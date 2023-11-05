{// Type of Alias

const student1:{
    name:string;
    age:number;
    contactNo?:string;
    gender:string;
    address:string;
}={
    name:'shihab',
    age:23,
    gender:'male',
    address:'chapai',
    contactNo:'0170000000'
}

const student2:{
    name:string;
    age:number;
    contactNo?:string;
    gender:string;
    address:string;
}={
    name:'shihab',
    age:23,
    gender:'male',
    address:'chapai',
    contactNo:'0170000000'
}

// if i want to declare another object i will create same code declare type that is not developer friendly,

//that way use type of Alias

type Student={ //if we make the type , that way we make capital letter of the Student variable

    name:string;
    age:number;
    contactNo?:string;
    gender:string;
    address:string;
}
const student3:Student={
    name:'shihab',
    age:23,
    gender:'male',
    address:'chapai',
    contactNo:'0170000000'
}
const student5:Student={
    name:'shihab',
    age:23,
    gender:'male',
    address:'chapai',
}

// this process we can use for declare string or function 

type UseName=string
type IsAdmin=boolean
const userName:UseName='shihab'
const idAdmin:IsAdmin=true

//for function 

type Add=(num1:number,n:number)=>number;
const add:Add=(num1,num2)=>num1+num2

///to declare Alias type first write type then write type name that i want to declare with capital letter



}