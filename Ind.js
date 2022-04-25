// _.filter() method


const _ = require("lodash");
/*
user=[
    {
        'name':"Gagan",
        'id':1,
        'active':true
    },
    {
        'name':"Pratap",
        'id':2,
        'active':false
    },
    {
        'name':"Singh",
        'id':3,
        'active':true
    },
]

// const newArray= _.filter(user,'active');

//  const newArray =_.filter(user, function(o){
//      return o.id==3;
//  })

// const newArray = _.filter(user,{
//     'id':1,'active':true
// })
const newArray = _.filter(user,{
    'id':1
})
console.log(newArray);

*/



//  _.find() method
/*
const  _ = require("lodash")

let arr=[2,3,4,5,8,12,14];

let newArray = _.find(arr,function(ele){
    if(ele * ele > 100) {
        return true;
    }
});
console.log(newArray);


const _ = require("lodash");

const arr=[
    {
        'Id':1,
        'rent':2000,
        'sharing':3
    },
    {
        'Id':2,
        'rent':3000,
        'sharing':2
    },
    {
        'Id':3,
        'rent':1000,
        'sharing':4
    },
];

const result = _.find(arr,function(obj){
    if(obj.rent<5000){
        return true;
    }
})
console.log(result);
*/




// _.flatMap() method

/*
const _ =require("lodash");

const arr=[10,12,13,14,15];

const narr = _.flatMap(arr,function duplicate(n){
    return [n,n];
})
console.log(narr);
*/



// _.flatMapDeep() method
/*
const _ = require("lodash");

const arr=[2,3,4,5,12,13,14];
const result= _.flatMapDeep(arr,function fun(ele){
    return [[[ele,ele]]]
})
console.log(result);
*/


// _.countBy() method
/*
const arr=([2.1, 3.2, 4.6, 5.7, 3.5, 3.2, 2.3, 7.2]);

// let result= _.countBy(arr,Math.ceil);
let result= _.countBy(arr,Math.floor);

console.log(result);



const str=(["one", "two", "three", "four", "five"]);

let count = _.countBy(str,'length');

console.log(count);
*/

// _.every() method
/*
const users=[
    {
        name:'johny',
        id:1,
        active:true
    },
    {
        name:'rambo',
        id:2,
        active:true
    },
    {
        name:'disuja',
        id:3,
        active:true
    }
]

let result = _.every(users,['active',true]);
console.log(result);
*/


/*
const arr=['jan', 'fab', 'mar', 'apr', 'may']
_.forEach(arr, function(ele){
    console.log(ele);
})
_.forEach([1,2,3,4,5,6], function fun(ele){
    console.log(ele);
})
*/


// const arr=[2.3,3.2,4.5,2.6];
// let result = _.groupBy(arr,Math.floor);
// console.log(result);



// const elements=[[287,123],[4,3,1,9,6,7]];

// const res=_.invokeMap(elements, 'sort')
// console.log(res);


// const elements=[287,123];

// const res= _.invokeMap(elements,String.prototype.split,'')
// console.log(res)


var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];
   
  let result=_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  console.log(result);