{
    //
//----------> utility type 


///--> Pick // this is use for a big type to get a small type 

type Person ={
    name:string,
    age:number,
    email?:string,
    contactNo:string
}
type NameAge=Pick<Person,'name'|'age'>

//------> Omit 
type contactInfo =Omit<Person,'name'|'age'>

//------>Required

type PersonRequired=Required<Person>

// ===-------> Partial 
type PersonPartial=Partial <Person>
















    ///
}