{
    ///
// type assertion
// this is the type that if i assign a type as any then i can assign any type of variable on this variable 
// But if i use this assertion type then we can tell be better that what is the type of this variable

let anything:any
anything='this is next level course';
anything=222;

// (anything as number) // if i put . it will be get suggetion that is use in number 

(anything as string) // if i put . it will be get suggetion that is use in string

const kgToGm=(value:string|number): string|number|undefined=>{
if(typeof value==='string'){
    const convertedValue=parseFloat(value)*1000;
    return `the converted value is : ${convertedValue}`
}
if(typeof value==='number'){
    return value*1000
}
}

const result1=kgToGm(1000) as number
const result2=kgToGm('1000') as string
// when we use this type we have very carefull about the output 



type CustomError={
    message:string
}

try{

}
catch(error){
    // console.log(error.message) //it gives error . to solve this error we can create a custom type then use this type 

     console.log((error as CustomError).message)
}
    ///
}