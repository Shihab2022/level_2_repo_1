### For multiple query 

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




 **Module  5-6 $exists, $type,$size**
## [Element Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-element/)

**$exists use for check the field is present or not inside data**
**It receive only boolean true or false**
```

db.test.find({favoutiteColor:{$exists:true}})
db.test.find({favoutiteColor:{$exists:false}})

```


*** $type ***
[(https://www.mongodb.com/docs/manual/reference/operator/query/type/#mongodb-query-op.-type)](https://www.mongodb.com/docs/manual/reference/operator/query/type/#mongodb-query-op.-type)

**If some field data is different type as like age=10 or '10' . then if we need the which age is string type**
**Or we can put any type and then get this specific type data**

```
db.test.find({friends:{$type: "array"}})
```


*** $Size ***
[(https://www.mongodb.com/docs/manual/reference/operator/query/size/)](https://www.mongodb.com/docs/manual/reference/operator/query/size/)

**If i check array by length ways then we can use $size operator**
**here if we put size 4 then it check that there have any friends array that length is 4**
```
db.test.find({friends:{$size:4}}).project({friends:1})

```




 **Module  5-7 $all , $elemMatch**
## [Array Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-array/)


**If I get data base on his index number from a array than**
```
// this is for get data from an array

db.test.find({interests:'Cooking'}).project({interests:1})

//this is for get data base one index


db.test.find({'interests.2':'Cooking'}).project({interests:1})

/// -----> only change is when i declare a filed we add the index number ('interests.2')
```

## this is for array  [$all](https://www.mongodb.com/docs/manual/reference/operator/query/all/#mongodb-query-op.-all)

**This is use if we need that there have different data in  a array and if we want to pass array of data . If there have all data is match and position is not match  then showing this data 
```
db.test.find({interests:{$all:['Cooking',"Gardening", "Gaming"]}}).project({interests:1})


```

##  this is for object [$elemMatch (query)](https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/#mongodb-query-op.-elemMatch)

```
db.test.find(
    
    {skills:{ 
$elemMatch:{level:'Intermidiate',name:'JAVASCRIPT'}}}
    
    ).project({skills:1})


```

### Update


 **Module  5-8 $set, $addToSet, $push,**
## [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)

***Update One***

**$set**
```
// this is only for primetive data type

// here first parameter is which data we want to update
// second parameter is which data we want to update
db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
    {$set:{
        salary:0
    }}
    )
```

**$addToSet**

```
//This is use for update an array .For single value add

db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
    {$addToSet: {languages:'bangla'}
        
    }
    )

//This is use for update an array .For multiple value 


db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
    {$addToSet: {languages:{$each: ['arabic','hindi']}}
        
    }
    )

```

**$push:**


```
//This is use for update an array .But it can dublicate the value.

db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
    {$push: {languages:'bangla'}
        
    }
    )
```
 **5-9 $unset, $pop, $pull, $pullAll**

 ## [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)


 **$unset**

 ```
 //If we remove a field 

 db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
        {$unset:{	"birthday":1}}

    )
 ```

 **$pop**
This is for array . 
 ```
 //if we put 1 it remove last element . If I put -1 then it remove first element
 db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
        {$pop:{	"languages":1}}

    )
 ```

 **$pull**
 If we remove an specific element then we use pull operator

  ```
 db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
        {$pull:{"languages":"Tajik"}}

    )
 ```

 **$pullAll**

 Here we can provide more value inside an array then it remove all element

 ```
 db.test.updateOne(
    {_id:ObjectId("6406ad65fc13ae5a400000c6")},
        {$pullAll: {languages:[ "Macedonian", "Albanian", "bangla", "arabic" ]}}

    )
 ```

