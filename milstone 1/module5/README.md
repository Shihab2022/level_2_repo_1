#### For multiple query 

**Module 5.4 $in ,$nin ,implicit and condition**
## [Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)


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

## [Logical Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-logical/)

```

// db.test.find({age:{$ne:15,$lte:30}})

// Ecplicit $and
//---> this operator means if all the condition is match then return the data 

 db.test.find({$and:[
     {age:{$gte:18}},
     {age:{$ne:15},},
     {age:{$lte:30}},
     {gender:'Female'}
     ]},{age:1,gender:1}).sort({age:1})


     // Ecplicit $or
//---> this operator means if one condition is match then return the data 

// Ecplicit $or

 db.test.find({$or:[
     {interests:"Reading"},
     {interests:"Cooking"},
     ]},{interests:1,gender:1}).sort({age:1})

```

If the data is an array of object then ,
```
/// Demo data
	"skills" : [
		{
			"name" : "JAVA",
			"level" : "Intermidiate",
			"isLearning" : true
		},
		{
			"name" : "JAVA",
			"level" : "Beginner",
			"isLearning" : false
		},
		{
			"name" : "GO",
			"level" : "Beginner",
			"isLearning" : false
		},
		{
			"name" : "JAVA",
			"level" : "Intermidiate",
			"isLearning" : false
		},
		{
			"name" : "GO",
			"level" : "Beginner",
			"isLearning" : false
		}
	],
    
 ```
 then the code is ,
 ```
 // main change is --------> we declare the array element inside ' ' .then every thing is same 

 db.test.find({$or:[
{'skills.name':'JAVA'},
{'skills.name':'JAVASCRIPT'},
     ]},{interests:1,skills:1}).sort({age:1})
 ```


 If field name is same then we use the $in 
 ```
  db.test.find({'skills.name':{$in:['JAVASCRIPT','JAVA']}},{interests:1,skills:1}).sort({age:1})
 ```