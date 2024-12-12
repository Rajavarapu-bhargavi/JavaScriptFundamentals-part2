const arr=[5,1,2,3,4];
// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));
const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);
// function findMax(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));
const output1=arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)
console.log(output1);
const users=[
    {'first':'bhargavi','last':'Rajavarapu','age':21},
    {'first':'Teja','last':'yanaganti','age':27},
    {'first':'sai','last':'Rajavarapu','age':24}
]
const op=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})
console.log(op);
const op1=users.reduce(function(acc,curr){
    if(curr.age>25){
        acc.push(curr.first);
    }
    return acc;
},[])
console.log(op1);