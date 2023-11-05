{
    ////

    ///--->Constraints 

    // -----> this type is basically use for , If we need some type must be need in our function parameter then we use this  constraints 

    /// as for example  in out addCourseStudent function we must need student name , email , id .  ----Then we can assign this date as a constraints type 


    const addCourseToStudent=<T extends {id:number,name:string,email:string}>(student:T)=>{
        const course='Next level '
        return{
            ...student,
            course
        }
    }
    
    const student1=addCourseToStudent({id:3445,name:'x',email:'x@gmailcom',devType:'juniour'})
    const student2=addCourseToStudent({name:'y',email:'y@gmailcom',id:3445,handWatch:'apple'})



    ///we must pass this three parameter that we declare by extends on the function parameter as like handWatch


    ////
}