{
    ////

// ----> Generic with function

const createArray =(param:string):string[]=>{
    return [param]
} /// this is simple way 

const createArrayWithGeneric=<T>(param:T):T[]=>{
    return [param]
} ///function with generic 
const res1=createArray('bangladesh')
const resGeneric=createArrayWithGeneric<string>('bangladesh')
type User={id:number;name:string}

const  resGenericObj=createArrayWithGeneric<User>({
    id:3445,
    name:'shihab'
})


////function generic with tuple 

const  createArrayWithTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}
const res10=createArrayWithTuple<string,number>('bangladesh',48595955)

const res21=createArrayWithTuple<string,{name:string}>('bangladesh',{name:'aisa'})




const addCourseToStudent=<T>(student:T)=>{
    const course='Next level '
    return{
        ...student,
        course
    }
}

const student1=addCourseToStudent({name:'x',email:'x@gmailcom'})
const student2=addCourseToStudent({name:'y',email:'y@gmailcom',handWatch:'apple'})
    ////
}