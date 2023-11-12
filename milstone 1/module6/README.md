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