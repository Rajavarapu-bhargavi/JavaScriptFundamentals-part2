//forEach()-call function for each element
const numbers = [45, 4, 9, 16, 25];
(numbers.forEach(function(value){
    console.log(value);
}));
//every()--returns true if all values test pass
console.log(numbers.every((x)=>x>18));
//some()--returns true if some values test pass
console.log(numbers.some((x)=>x>18));
//returns like a objects
console.log(Array.from("ABCDEFGH"));

