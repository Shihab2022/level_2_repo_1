let myName:string='shihab uddin'
// myName=49 // you can not assign a number 
let age:number =24
// age=myName  //you can do do it because myName is string
let isAdmin:boolean=true

let arr=['shihab','siraj',4,5,3] //in default ts is assume implicit data type ANY thats way it can not give any error

let stArray:string[]=['shihab','siraj','nur'] //if we declare stArray as a string array thats way you  can not assign any number or boolean

//similar for number array and boolean array

let numArray:number[]=[2,34,4,55,5,3,3]

let boolArray:boolean[]=[true,false]

//you can not push any element if data type is not same
// as like 
// stArray.push(4)

//tuple -->array -->order -->type of values

let coordinate:[number,number]=[1,5]
let ageName:[number,string]=[24,'shihab']
let adminDetails:[number,string,boolean]=[24,'shihab',true]

// you can not assign any type of value if this type is not similar

// ageName[0]='siraj' //you can not do that because 0 index value is number 

