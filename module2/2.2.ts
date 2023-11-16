{
//

///----> interface type vs alias type




// type alias
type User={
    name:string,
    age:number
}
// then we can use it 
const user1:User={
    name:'shihab',
    age:23
}
/// if we increase a type in alias type then
type UserWithRol1=User&{role:string}
const user3:UserWithRol1={
    name:'shihab',
    age:34,
    role:'student'
}

// interface type

interface User2{  // main difference here that is if we declare variable this way we can not use type and = symbol
    name:string,
    age:number
}

const user2:User2={
    name:'shihab',
    age:23
}
/// if we increase a type in alias type then
interface UserWithRol2 extends User2{
    role:string
}
const user4:UserWithRol2={
    name:'shihab',
    age:34,
    role:'student'
}
/// ----> we are not able to use this interface type when we declare a primitive data type as like 
//  type rollNumber=number //here we can not use interface type 

// Js -->object , array->object ,function->object

//that means we can declare array type use interface

type Roll1=number[]
const rol1:Roll1=[2,3,4,5,5]

interface Roll2{
    [index:number]:number
}
const rollNumber1:Roll2=[1,3,4,5]
                     // 0 1 2 3 ->number type


type Add1=(num1:number,num2:number)=>number
const add1:Add1=(num1,num2)=>num1+num2

interface Add2{
    (num1:number,num2:number):number
}

const add2:Add2=(num1,num2)=>num1+num2




    //
}