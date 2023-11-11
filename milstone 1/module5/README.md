## For multiple query 
**Module 5.4 $in ,$nin ,implicit and condition**
```
db.test.find({
    age: { $gt: 18, $lt: 30 }, 
    gender: 'Female' ,
    interests:{$nin:['Travelling'],$in:["Cooking"]},
    languages: {$in:[,"Hindi","Chinese", "Aymara", "Punjabi"]}
}, 
    
    { age: 1, gender: 1, name: 1,interests:1 ,languages:1}).sort({ age: 1 })
```


**Module 5.5 $and $or**

```
// db.test.find({age:{$ne:15,$lte:30}})

// Ecplicit $and

 db.test.find({$and:[
     {age:{$gte:18}},
     {age:{$ne:15},},
     {age:{$lte:30}},
     {gender:'Female'}
     ]},{age:1,gender:1}).sort({age:1})
```