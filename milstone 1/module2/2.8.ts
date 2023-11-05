{

/// simulate
// this is simple way 

// const createPromise=()=>{
//     return  new Promise((resolve,reject)=>{
//         const data='something'
//         if(data){
//             resolve(data)

//         }
//         else{
//             reject('something is wrong ')
//         }
//     })
// }
// const showData=async()=>{
//     const data=await createPromise()
//     return data
// }
// showData()

//------> For type of string 
// const createPromise=():Promise<string>=>{
//     return  new Promise<string>((resolve,reject)=>{
//         const data:string='something'
//         if(data){
//             resolve(data)

//         }
//         else{
//             reject('something is wrong ')
//         }
//     })
// }
// const showData=async():Promise<string>=>{
//     const data:string=await createPromise()
//     return data
// }
// showData()


//------> For type of boolean

// const createPromise=():Promise<boolean>=>{
//     return  new Promise<boolean>((resolve,reject)=>{
//         const data:boolean=true
//         if(data){
//             resolve(data)

//         }
//         else{
//             reject('something is wrong ')
//         }
//     })
// }
// const showData=async():Promise<boolean>=>{
//     const data:boolean=await createPromise()
//     return data
// }
// showData()

//------> For type of object 

// type Something={something:string}

// const createPromise=():Promise<Something>=>{
//     return  new Promise<Something>((resolve,reject)=>{
//         const data:Something={something:'this is something value '}
//         if(data){
//             resolve(data)

//         }
//         else{
//             reject('something is wrong ')
//         }
//     })
// }
// const showData=async():Promise<Something>=>{
//     const data:Something=await createPromise()
//     return data
// }
// showData()




/// for fetch data fro api 

type Todo={
    id:number;
    userId:number;
    title:string;
completed:boolean;
}

const getToDo=async(): Promise<Todo> =>{
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/10')
    const data=await res.json()
    console.log(data)
    return data

}

getToDo()




//
}