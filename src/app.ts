// const express = require('express')
import express, { NextFunction, Request ,Response} from 'express'
const app = express()
const port = 3000

//parsers
app.use(express.json())  // when we send a json type dat then we use this

app.use(express.text())// when we send raw data then we use this


/// Router

const userRouter=express.Router()
const courseRouter=express.Router()
// For use router in our app
app.use("/api/v1/users",userRouter)
app.use("/api/v1/course",courseRouter)

userRouter.get("/create-user",(req:Request,res:Response)=>{
  const user=req.body
  console.log(user)
  res.json({
    success:true,
    message:'User create successfully',
    user:user
  })
})

courseRouter.post("/create-course",(req:Request,res:Response)=>{
  const course=req.body
  console.log(course)
  res.json({
    success:true,
    message:'Course create successfully',
    user:course
  })

})



const logger=(req:Request,res:Response,next:NextFunction)=>{
console.log(req.url)
console.log(req.method)
console.log(req.hostname)
next()
}
app.get('/error-handler',logger,async(req:Request,res:Response,next:NextFunction)=>{
/// we use async await 
//and try catch for error handle
try{
  res.send(some thing wrong )  
}
catch(error){
  next(error)
// res.status(400).json({
//   success:false,
//   message:'Your request is field .'
// })
}
})
app.get('/',logger, (req:Request, res:Response) => {
// console.log(  req.query)
  res.send('Hello world')
})
app.post('/',logger, (req:Request, res:Response) => {
  console.log(req.body)
  res.send('Hello world')
})
// route error
app.all('*',(req:Request,res:Response)=>{
  res.status(400).json({
    success:false,
    message:'You put wrong route !!!'
  })
})


/// handle all error without route error
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
  if(error){
    res.status(400).json({
  success:false,
  message:'Your request is field form global.'
})
  }
})
export default app