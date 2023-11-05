{
    ///

//----> generic type

// we can declare an array in simple way 
const arr:number[]=[2,3,5,6,67,0]
const arrS:string[]=['shihab','siraj','tamil']
const arrB:boolean[]=[true,false,true]

///we can declare those array as generic type 
const arrNGeneric:Array<number>=[2,3,5,6,67,0]
const arrSGeneric:Array<string>=['shihab','siraj','tamil']
const arrBGeneric:Array<boolean>=[true,false,true]


/// we can make it dynamic 

type GenericArray<T>=Array<T>
const arrNDGeneric:GenericArray<number>=[2,3,5,6,67,0]
const arrSDGeneric:GenericArray<string>=['shihab','siraj','tamil']
const arrBDGeneric:GenericArray<boolean>=[true,false,true]

/// Now this is not very useful but if we declare a array of object then we  can see the use of --->generic type 



const user:GenericArray<{name:string,age:number}>=[
    {
        name:'shihab',
        age:150
    },
    {
        name:'siraj',
        age:145,
    }

]

///---> generic tuple

//we can declare it manually as like this
const fakeUser:[string,string]=['shihab','siraj']


// but  we make it dynamic with use generic tuple

type GenericTuple<X,Y>=[X,Y]

const mans:GenericTuple<string,string>=['mr.X','mr.Y']

const userId:GenericTuple<number,{name:string,email:string}>=[12344,{name:'shihab',email:'a@gmail.com'}]

//we can send this object as this like 

// type User={
//     name:string,
//     email:string
// }
// interface User{
//     name:string,
//     email:string
// }
// const userId:GenericTuple<number,User>=[12344,{name:'shihab',email:'a@gmail.com'}]


    ///

}