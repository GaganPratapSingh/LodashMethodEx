
const _ = require("lodash");

// let result=_.chunk(['a', 'b', 'c', 'd'],3);
// console.log(result);


// Note: all false value removed from array
// let result=_.compact([0,1,false,2,'',3])
// console.log(result)


// const arr=[1];
// let res=_.concat(arr,2,[3],[[4]]);
// console.log(res)

// const arr1 =[2,1];
// const arr2=[2,3];
// let res=_.difference(arr1,arr2);
// console.log(res);


// let res=_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.ceil);
// console.log(res);

// let res= _.differenceBy([{"x":2},{"x":1}],[{"x":1}],"x");
// console.log(res);

// var obj=[{'x':1, 'y':2}, {'x':2, 'y':1}];
// let res=_.differenceWith(obj, [{'x':1, 'x':2}], _.isEqual);
// console.log(res);


// const arr=[1,2,3,4,5];
// let res = _.drop(arr,2);
// let res=_.dropRight(arr,2);
// console.log(res);


// var users = [
//     {'user':'akon' ,'active':false},
//     {'user':'harry' ,'active':false},
//     {'user':'fred' ,'active':true}
// ]

// let res=_.dropRightWhile(users, function(o) {return !o.active;});
// console.log(res);

// let res =_.findIndex(users,function(o) {return o.user == 'fred';});
// let res =_.findLastIndex(users,function(o) {return o.user == 'fred';});
// console.log(res);


// let arr=[1,[2,[3,[4]], 5]]
// let res=_.flatten(arr);
// console.log(res);
// console.log(_.flatten(res));
// let res2=_.flattenDeep(arr);
// console.log(res2);


// let res=_.intersection([2,1],[2,3]);
// console.log(res);

// let arr=['a', 'b', 'c'];
// let res = _.join(arr,"~");
// console.log(res);


// let arr=[{'x':1},{'x':2},{'x':3},{'x':1}];
// let res = _.pullAllBy(arr, [{'x':1}, {'x':3}],'x');
// console.log(res);

// let arr=['a','b','c','d'];
// let res=_.pullAt(arr,[1,2]);
// console.log(res);
// console.log(arr)



// const arr=[1,2,3,4,5,6];
// let res=_.remove(arr,function(e){return e%2==0})
// console.log(res);


// let arr=[1,3,4,5,6];
// let res= _.reverse(arr);
// console.log(res);

// let arr=[2,1,5,8,3,4];
// let res=_.sortedIndex(arr,10)
// console.log(res);


// let obj=[{'x':4},{'x':5}];
// let res = _.sortedIndexBy(obj,{'x':7}, function(o){return o.x;});
// console.log(res);


// let arr=[1,3,3,4,6,8,8];
// // let srt=_.sortBy(arr,0);
// // console.log(srt);
// let res=_.sortedUniq(arr);
// console.log(res);

// let arr=[1,2,3,4];
// // let res=_.tail(arr);
// let res =_.head(arr);
// console.log(res);

// console.log(_.take([1,2,3],2));


// let zipped = _.zip([1,2],[10,20],[100,200]);
// console.log(zipped);


// console.log(_.deburr('d`eja`'));
// let str=('fred, barney, & pebbles');
// console.log(_.escape(str));


// console.log(_.pad('ABC',3));
// console.log('abc',8,'_-')


// console.log(_.repeat('abc',2));

// console.log(_.snakeCase('Gagan Pratap Singh'))

// console.log(_.split("gaganpratapsingh",'',3))

// console.log(_.startCase("gaganPratapSingh"));


// console.log(_.startsWith('ABC','A'));


// console.log(_.unescape('fred, barney, &amp; pebbles'));


// var elements = _.attempt(function(selector) {
//     return document.querySelectorAll(selector);
//   }, '>_>');
   
//   if (_.isError(elements)) {
//     elements = [];
//   }
//   console.log(elements);


// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
// _.pull(array, 'a', 'c');
// console.log(array);

let array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);

