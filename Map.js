//used to transform the array
const arr=[5,1,3,2,6];
function double(x){
    return x*2;
}
const output=arr.map(double);
console.log(output);
const output1=arr.map(function triple(x){return x*3})
console.log(output1);
const output2=arr.map((x)=>x.toString(2));
console.log(output2);
const users=[
    {'first':'bhargavi','last':'Rajavarapu','age':21},
    {'first':'Teja','last':'yanaganti','age':27},
    {'first':'sai','last':'Rajavarapu','age':24}
]
const op=users.map(x=>x.first+' '+x.last);
console.log(op);
console.log(arr.flatMap((x)=>x*2));
//creating a map
const fruits=new Map([["apples",100],["bananas",200],["kiwi",300]]);
console.log(fruits);
const veggies=new Map();
veggies.set('cabbage',100);
veggies.set('tomto',200);
veggies.set('potato',300);
console.log(veggies);
console.log(fruits.get("apples"));
//get
//set
//delete
//clear
//has
//foreach
//entries
//keys
//values
