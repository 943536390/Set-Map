const MySet = require('./Set.js');
const MyMap = require('./Map.js');

let set = new MySet([1,2,3,3,1,6,8,4,2]);
// set.forEach((val,key,myset)=>{
// 	console.log(set === myset);
// });
//console.log([...newSet]);

let myMap = new MyMap();
myMap.set(1,'1');
myMap.set(2,'2');
myMap.set(3,'3');
myMap.forEach((val,key)=>{
	console.log(key+" "+val);
});
