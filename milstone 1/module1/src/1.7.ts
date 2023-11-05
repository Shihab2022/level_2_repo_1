//if we are not use node or express and declare a variable same name on different page it give error . If we want to solve this problem we cover all file as like {}


//Spread operator 
//rest operator 
//destructuring
{
//Spread operator 
const arr1:string[]=['shihab','siraj','nur']
const arr2:string[]=['kafi','mamun','thorul','faruk']
// arr1.push(arr2) //it gives error because the output is ['shihab','siraj','nur',['kafi','mamun','thorul','faruk']] thats not correct 

//if  i do that in this way first we spread the array that i want to push as like
arr1.push(...arr2)

// similar for object 
const mentors1={
    typescript :"Mezba",
    redux:'mir',
    bdms:'Mizan'
}
const mentors2={
    prisma:'firoz',
    next:'tonmoy',
    cloud:'Nahid'
}

// if we  combain this two object 

const allMentors={...mentors1,...mentors2}



//rest operator 

const greetFriends=(...friends:string[])=>{
    friends.forEach((friend:string)=>console.log(`Hi this is all my friend 
    ${friend}`))
}

greetFriends('Ekon','samad','mahidul','robiul')

}