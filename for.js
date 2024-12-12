const person={'first':'bhargavi','last':'Rajavarapu','age':21};
let text='';
//forin
for(let x in person){
    text+=' '+person[x];
}
console.log(text);
//forof
let demo='';
const num=[5,2,10,15,9];
for(let x of num){
    demo+=' '+x;
}
console.log(demo);
let d='';
const a='javascript';
for(let x of a){
    d+=' '+x
}
console.log(d);
//foreach
const items = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems); 