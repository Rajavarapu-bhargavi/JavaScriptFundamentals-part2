const fruits=['banana','kiwi','mango','sapota','grape']
//sort
console.log(fruits.sort());
//reverse
console.log(fruits.reverse());
//toSorted-dont disturb the orignal array
console.log(fruits.toSorted());
//toReversed()
//numeric sort
const points=[40,100,1,5,25,10];
console.log(points.sort(function(a,b){return a-b}));
//numeric reverse
console.log(points.sort(function(a,b){return b-a}));
//min value
function myArrayMax(arr){
    return Math.max.apply(null,arr);
}
console.log(myArrayMax(points));
function myArrayMin(arr){
    return Math.min.apply(null,arr);
}
console.log(myArrayMin(points));