{
////'/'

//-----type guards
//-- it use object and function

//-----this will write different way 

//----typeof -----> type guard

type Alpha=string|number
const add=(num1:Alpha,num2:Alpha):Alpha=>{
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2
    }
    else{
       return num1.toString()+num2.toString()
    }
}
const result1=add(2,3)  /// if we console we get result 5
const result2=add('2','3')///then we get result 23

const result3=add('2',3)//then we get 23


//----typeof -----> in guard
type NormalUser={
    name:string
}

type AdminUser={
    name:string,
    role:'admin'
}

const getUser=(user:NormalUser|AdminUser)=>{
    if('role' in user){ /// this is the way to declare in guard ----> here in guard is check that in user there have any role property ..if this is avilable then he enter this block if this is not avilable he goes to else block
        console.log(`my name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`My name is ${user.name}`)
    }
}

const normalUser:NormalUser={
    name:'normal   user'
}
const adminUser:AdminUser={
    name:'admin user',
    role:'admin'
}

getUser(normalUser)
getUser(adminUser)


    ///
}