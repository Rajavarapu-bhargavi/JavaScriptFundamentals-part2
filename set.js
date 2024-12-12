//set declaration
const lett=new Set(['a','b','c']);
console.log(lett);//by passing array to set
const lett1=new Set();//by adding values
lett1.add('a');
lett1.add('b');
lett1.add('c');
console.log(lett1);
//has method
let text = "";
lett.forEach (function(value) {
  text += value;
})
console.log(text);
//keys
//values
//entries
