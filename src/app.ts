// const express = require('express')
import express, { NextFunction, Request ,Response} from 'express'
const app = express()
const port = 3000

//parsers
app.use(express.json())  // when we send a json type dat then we use this

app.use(express.text())// when we send raw data then we use this

const logger=(req:Request,res:Response,next:NextFunction)=>{
console.log(req.url)
console.log(req.method)
console.log(req.hostname)
next()
}

app.get('/',logger, (req:Request, res:Response) => {
// console.log(  req.query)
  res.send('Hello world')
})
app.post('/',logger, (req:Request, res:Response) => {
  console.log(req.body)
  res.send('Hello world')
})

export default app