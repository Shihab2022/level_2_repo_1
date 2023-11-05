{
////

//-------> mapped types 


const arrOfNumber:number[]=[2,35,5,6,2,46,44]

/// we want to convert all the array of element as a string 
// as like ['2','35'......]

const arrOfString:string[]=arrOfNumber.map(n=>n.toString())

console.log('arrOfString',arrOfString)


//------> mapped types is almost similar to this map 

type ArrNumber={
    height:number,
    width :number ,
}


type Height=ArrNumber['height']  ///------> this type tell look up type
// if we need this object attribute to convert as a string type as this like 

// type ArrString={
// height:string,
// width:string
// }  /// this is not dynamic 

//--------> here we use mapped types 

// type AreaString={
//     [key in 'height' | 'width']:string
// }
///-------> if we relation on ArrNumber then we use keyof 

type AreaString={
    [key in keyof ArrNumber]:string/// which type we are defined that we give here 
}

/// if we pass an object there have different types of value and then we want convert to different types then we can use generic 



/// T =>{height:string,width:number}
// key => T['width']
type AreaStringGeneric<T>={
    [key in keyof T]:T[key]
}
const arr1:AreaStringGeneric<{height:string,width:number}>={
    height:'100',
    width:50
}













    ////
}