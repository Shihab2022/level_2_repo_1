{
   // ternary operator || optional Chaining || nulish coalesing

   const age:number=15
   if(age>=18){
    console.log('adult')
   }
   else{
   //  console.log('not adult')
   }
// this code we can use ternary operator  as this like 
const isAdult=age>=18?'adult':'not adult'
// console.log(isAdult)


//nullish coalescing operator ??
// null /undefined --> decision making
// const isAuthenticated =null // if we use undefined we get same result 


// const result1=isAuthenticated??'Guest'
// console.log({result1})


// but if we pass as a variable value id '' then result id deferent 

// const isAuthenticated =''
// const result1=isAuthenticated??'Guest'
// const result2=isAuthenticated??'Guest'
// console.log({result1},{result2})


/// optional chaining

type User={
   name:string;
   address:{
      city:string;
      road:string;
      presentAddress:string;
      permanentAddress?:string;
   }
}

const user:User={
   name:'shihab',
   address:{
      city:'ctg',
      road:'kajla',
      presentAddress:'kalinagar'
   }
}
const permanentAddress=user?.address?.permanentAddress??'No Permanent address'

console.log(permanentAddress)


   //
}