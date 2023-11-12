## For multiple query Aggregation


[mongodb](https://www.mongodb.com/basics/aggregation)
[w3schools](https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php)
## Good ---> [studio3t](https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/)

Aggregate will work as like find .

```
db.test.find({})  // for get all the value

db.test.aggregate([]) // for get all the value
```

Main difference is aggregate will check stage by stage, modify , sort etc
## [$match](https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/#:~:text=Syntax&text=%24match%20takes%20a%20document%20that,include%20aggregation%20expression%20in%20%24match%20.)
```
db.test.aggregate([
    ///---->Stage-2-->here check if age is less than 30 
{$match:{age:{$lt:30}}},
///----> if age less than 30 then sort by age descending order
{$sort:{age:-1}},
///--->finally add project what can we want to print
{$project: {age:1,email:1}}

    ])
```

*Here one thing that $project we use last .If we use top it wil create issue*

**6-2 $addFields , $out , $merge aggregation stage**

[$addFields](https://www.mongodb.com/docs/manual/reference/operator/aggregation/addFields/#:~:text=The%20stage%20has%20the%20following,information%20on%20expressions%2C%20see%20Expressions.)

addFields mainly use for add new field in our pipline . 

*It not change our main document . It only add new filed and marge the data*

```
db.test.aggregate([
    //stage 1
{$match:{gender:'Female'}},
//stage2 ----> here add field but it not update our main database .

{$addFields:{course:'next level',bord:'PHero'}},
//step3
{$project: {gender:1,email:1,course:1,bord:1}}

    ])
```
*We can add multiple field*

## [$out (aggregation)](https://www.mongodb.com/docs/v4.2/reference/operator/aggregation/out/)

**It not change the collection .It create new collection our data base from our main data base**
```
db.test.aggregate([
    //stage 1
{$match:{gender:'Female'}},
//stage2 ----> here add field but it not update our main database .
{$addFields:{course:'next level',board:'PHero'}},
//step3-----------> if we not use this then all data will add our new collection
{$project: {gender:1,email:1,course:1,board:1}},
///step4
{$out:'Course Student'}

    ])
```
*Here , If we use $project then it will add only which field that we add inside project*

## [$merge (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/merge/)

merge mainly use for if we add some field in our main database ....

```
db.test.aggregate([
    //stage 1
{$match:{gender:'Female'}},
//stage2 ----> here add field but it not update our main database .
{$addFields:{course:'next level',bord:'PHero'}},
//step3
{$project: {gender:1,email:1,course:1,bord:1}},
///step4
{$merge:'test'}

    ])
```

*Here we have to add the collection name where we want to marge*


**6-3 $group , $sum , $push aggregation stage**

[$group (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/#:~:text=Use%20the%20_id%20field%20in,are%20set%20using%20accumulator%20expressions.)

Group is use for groping the data . 

```
db.test.aggregate([

{$group: { _id: "$age"}},

    ])
```
*Here we must put the _id and put the field name which field is requared for groping...*

*We can put multiple operator inside group*


## [$sum (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/sum/)

it will count how many time are present in this value 
```
db.test.aggregate([

{$group: { _id: "$age",count:{$sum:1}}},
//-->  {$group: { _id: "$address.country",count:{$sum:1}}},
    ])
```


## [$push (aggregation)](https://www.mongodb.com/docs/v3.0/reference/operator/aggregation/push/)


```
db.test.aggregate([
//stage1
{$group: {
    _id: "$address.country",
    count:{$sum:1},
    fullDoc:{$push:'$phone'},

    // here fullDoc is an array where there have all the phone number base on country and its an array
}},

    ])
```

*If we get all the element base on country then we use -----------> $$ROOT

```
db.test.aggregate([
//stage1
{
    $group: { _id: "$address.country"  ,  count:{$sum:1},
    fullDoc:{$push:'$$ROOT'}},

}
//-------> if we get some specific field then add this
//stage2
{
    $project: {'fullDoc.name':1,'fullDoc.email':1,'fullDoc.phone':1}
}
    ])
```