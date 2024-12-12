//indexOf
//lastIndexOf
//includes
//find-returns the first element that passes the function
const numbers=[4,9,16,25,29];
function myFunction(value,index,array){
    return value>18;
}
console.log(numbers.find(myFunction));
//findIndex-returns the index
console.log(numbers.findIndex(myFunction));
//findLat-iterates from last
console.log(numbers.findLast(myFunction));
//findLastIndex
