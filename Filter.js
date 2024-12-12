const arr=[5,1,3,2,6];
function isOdd(x){
    return x%2;
}
const output1=arr.filter(isOdd);
console.log(output1);
const output2=arr.filter(
    function isEven(x){
        return x%2==0});
console.log(output2);
const output3=arr.filter((x)=>x>4);
console.log(output3);
const users=[
    {'first':'bhargavi','last':'Rajavarapu','age':21},
    {'first':'Teja','last':'yanaganti','age':27},
    {'first':'sai','last':'Rajavarapu','age':24}
]
const op=users.filter(x=>x.age>25).map(x=>x.first)
console.log(op);