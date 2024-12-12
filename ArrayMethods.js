const fruits=['apple','banana','mango','grape'];
//Array length
console.log(fruits.length);
//toString()
console.log(fruits.toString());
//At method
console.log(fruits.at(2));
//join--it is also like toString() but have the separator
console.log(fruits.join('_'));
//pop-removes last element
console.log(fruits.pop());
//push-add at last& returns the last
console.log(fruits.push('strawberry'));
//shift-removes the first element
console.log(fruits.shift());
//unshift-adds at the first
console.log(fruits.unshift('Lemon'));
//delete-remains holes
console.log(delete fruits[0]);
const veggies=['cabbage','tomoto','potato']
//concat
console.log(fruits.concat(veggies));
//copy within()
console.log(fruits.copyWithin(2,0));
const arr=[[1,2],[3,4],[5,6]];
//flat--flat all sub array elements
console.log(arr.flat());
//splice()--add new items to an array
console.log(fruits.splice(2,0,'lemon','kiwi'));
//slice-sub array->new array
console.log(veggies.slice(0,2));