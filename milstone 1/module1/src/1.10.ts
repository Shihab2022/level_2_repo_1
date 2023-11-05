{

//union type

// type FrontendDeveloper='fakibaziDeveloper'|'juniorDeveloper'

// // that mean we make a type that name is FrontendDeveloper and his value is fixed that is fakibaziDeveloper or juniorDeveloper, --> here   |  symbol is work as like js or operator 
// type FullStackDeveloper ='frontEndDeveloper'|'expertDeveloper'

// we can declare another type use two type that we created in the above 

// type Developer=FrontendDeveloper|FullStackDeveloper

// then we can use it as type 

// const newDeveloper:FrontendDeveloper='fakibaziDeveloper'



//this union type we can use on various place as like object

type User={
    name:string;
    email?:string;
    gender:'male'|'female'|'both';
    bloodGroup:'A+'|'A-'|'B+'|'B-'|'O+'|'O-'
}

const user:User={
    name:'shihab',
    email:'shihabdev68',
    gender:"male", //we can not give different value that i declare as type
    bloodGroup:'A+'
}




{
    type FrontendDeveloper={
        skills:string[],
        designation2:'frontend  developer'
    }
    type BackendDeveloper={
        skills:string[],
        designation2:'backed developer'
    }
    type FullStackDeveloper=FrontendDeveloper&BackendDeveloper

    const fullStackDeveloper:FullStackDeveloper={
        skills:['html','css'],
        designation2:'frontend  developer',
        designation2:'backed developer'

    }
}






}