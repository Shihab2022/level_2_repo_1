{
    //destructuring
   const user={
    id:1,
    name:{
        firstName:'md',
        middleName:'shihab',
        lastName:'uddin'
    },
    address:'uganda'
   } 

   const {id,name:{middleName}}=user

//    array destructuring
const myFriend=['shihab','shiraj','nur','ekon','mahidul']

const [,,bestFriend,...rest]=myFriend
}

