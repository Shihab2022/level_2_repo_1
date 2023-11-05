{
////

//-----> generic constraint with operator

type Vehicle={
    bike:string;
    car:string;
    ship:string
}
type Owner='bike' |'car'|'ship'  /// this is manually 

type Owner2=keyof Vehicle

/// in above this two type Owner and Owner2 is work same



/// now for object 


//--> we create a function that return a object value as this like user['age']or['name]
const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{ /// here we can write <X,Y extends name |age|address ///this is not dynamic for make dynamic we can write in this way that is comment out 
    return obj[key]

}

const user={
    name:'shihab',
age:23,
address:'chapai'
}
const user2={
    name:'shihab',
age:23,
address:'chapai'
}
const result1=getPropertyValue(user,'name')
const result12=getPropertyValue(user2,'name')

    //
}