**7-2 What is module, commonjs vs esm**
[Node Modules](https://www.freecodecamp.org/news/what-are-node-modules/)
[Path](https://nodejs.org/dist/latest-v20.x/docs/api/path.html)


**7-4 Event driven architecture, create your own events**
[events](https://nodejs.org/dist/latest-v20.x/docs/api/events.html)

**7-5 Stream and buffer, create your own server**
[Stream and buffer](https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/)

**7-6 Installing express, typescript**

**For create inti file we put**
```
npm init
```
then press enter many time .


[expressjs](https://expressjs.com/en/starter/installing.html)


**7-7 What is parsers, request and response object**

*It use for convert tsc file to js . If we made any change it will auto convert to js file*
```
tsc -w
```

**7-8 middleware in express.js**

*if we send data by params*
```
http://localhost:5000/152/25366666666666666666666
```

```
app.get('/:id/:userId', (req:Request, res:Response) => {
console.log(  req.params)
  res.send('Hello world')
})
```
*if we send data by query*

```
http://localhost:5000?name=shihab
```
*If we send multiple query*
```
http://localhost:5000?name=shihab&emial=shiab@gmail.com&education=3rt year
```
```
app.get('/', (req:Request, res:Response) => {
console.log(  req.query)
  res.send('Hello world')
})
```


## For middleware function 

```
const logger=(req:Request,res:Response,next:NextFunction)=>{
console.log(req.url)
console.log(req.method)
console.log(req.hostname)
next()
}
```
*When we use middleware we must call next function . If we are not call and use this it will give us loading*

```
// here we can use multiple middleware separated by comma
app.get('/',logger, (req:Request, res:Response) => {
// console.log(  req.query)
  res.send('Hello world')
})
```
