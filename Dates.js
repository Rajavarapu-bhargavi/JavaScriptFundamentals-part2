const d=new Date();
console.log(d);
//only 2 digits-->19***
const d1=new Date(99,11,24);
console.log(d1.toDateString());
console.log(d.toISOString());
console.log(d.toUTCString());