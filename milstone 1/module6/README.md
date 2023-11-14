## For multiple query Aggregation

[mongodb](https://www.mongodb.com/basics/aggregation)
[w3schools](https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php)

## Good ---> [studio3t](https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/)

[Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)

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

_Here one thing that $project we use last .If we use top it wil create issue_

**6-2 $addFields , $out , $merge aggregation stage**

[$addFields](https://www.mongodb.com/docs/manual/reference/operator/aggregation/addFields/#:~:text=The%20stage%20has%20the%20following,information%20on%20expressions%2C%20see%20Expressions.)

addFields mainly use for add new field in our pipline .

_It not change our main document . It only add new filed and marge the data_

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

_We can add multiple field_

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

_Here , If we use $project then it will add only which field that we add inside project_

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

_Here we have to add the collection name where we want to marge_

**6-3 $group , $sum , $push aggregation stage**

[$group (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/#:~:text=Use%20the%20_id%20field%20in,are%20set%20using%20accumulator%20expressions.)

Group is use for groping the data .

```
db.test.aggregate([

{$group: { _id: "$age"}},

    ])
```

_Here we must put the \_id and put the field name which field is requared for groping..._

_We can put multiple operator inside group_

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

\*If we get all the element base on country then we use -----------> $$ROOT

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

**6-4 explore more about $group & $project**

## [Max ,min ,avg.....](https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/)

```
db.test.aggregate([
//stage1
{
    $group: {
        // here weh use null as a id it will give use all the document .
        _id: null,
        totalSalary:{$sum:'$salary'},
        maxValue:{$max: "$salary"},
        minValue:{$min:"$salary"},
        avaValue:{$avg:'$salary'},



    },

},

    ])
```

If we need to change the field name as like avaValue to averageSalary then we can do inside the project

```
db.test.aggregate([
//stage1
{
    $group: {
        // here weh use null as a id it will give use all the document .
        _id: null,
        totalSalary:{$sum:'$salary'},
        maxValue:{$max: "$salary"},
        minValue:{$min:"$salary"},
        avaValue:{$avg:'$salary'},



    },

},
// stage2

{
    $project: {
    totalSalary:1,
    maxValue:1,
    MinimumSalary:'$minValue',
    averageSalary:'$avaValue',
    //--- if we need some calculate value . We can calculate thos
    rangeBtMinToMax:{$subtract: [ "$maxValue", '$minValue' ]}



    }
}

    ])

```

**6-5 Explore $group with $unwind aggregation stage**

[$unwind (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/)

_If we need to group an array and use $group . It doblicate the value .To solve this error we use $unwind first then use group_

```
///---> here check how many time are used 
db.test.aggregate([
    // stage1
{$unwind: "$friends"} ,
//stage2
{
    $group: { _id: "$friends",count:{$sum:1}}
}
])
```

*If we comment unwind then we see the different .*
```
db.test.aggregate([
    // stage1
{$unwind: "$interests"} , 
//stage2
{
    $group: { _id: "$age",intersetPerAge:{$push:'$interests'}}
}
    ])
```


**6-6 $bucket, $sort, and $limit aggregation stage**

[$bucket (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/bucket/)

```
db.test.aggregate([
    {
        $bucket: {
              groupBy: "$age",
              boundaries: [ 20, 40, 60,80 ],
              default: "This is those person that age is getter then 80",
              output: {
                "count": { $sum: 1 },
                "personsName" : { $push: "$name" }
              }
            }    
    },
     
    ])
```

*We can use sort limit project other projection pipline*

```
db.test.aggregate([
    //Stage 1 
    {
        $bucket: {
              groupBy: "$age",
              boundaries: [ 20, 40, 60,80 ],
              default: "This is those person that age is upto 80",
              output: {
                "count": { $sum: 1 },
                "personsName" : { $push: "$name" }
              }
            }
        
    },
    
   /// stage 2
   {
       $sort:{count:-1}
   },
   ///stage 3
   
   //----> limit use after the sort 
   {
       $limit:1
   },
   
   //stage 4
   {
       $project: {count:1}
   }
    
    ])



```

**6-7 $facet, multiple pipeline aggregation stage**


*If we generate multiple pipeline in one aggregation we use $facet*

```
db.test.aggregate([
    {
        $facet: {
            //--->pipeline --1
            'friendsCount':[
    //stage---1
    {$unwind: "$friends"},
    ///---stage--2
{$group: { _id: "$friends",count:{$sum:1}}}    
    ],
   
            //---->pipeline --2
            'educationCount':[
                //stage1
                {$unwind: "$education"},
                {$group: { _id: "$education",count:{$sum:1}}}
                
                ],
            
            ///--->pipeline --3
            'skillsCount':[
                //stage--1
                {$unwind: "$skills"},
                //stage--2
                {$group: { _id: "$skills",count:{$sum:1}}}
                
                ]
        }
        }])
```

*It is use , When i create any report in same data then we use $facet*