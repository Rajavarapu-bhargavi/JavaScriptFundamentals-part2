const person={
    name:'bhargavi',
    age:21,
    city:'hyderabad'
}
console.log(typeof(person));
//display the object properties....
console.log(person.name+' : '+person.age+' : '+person.city);
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

// Display the object properties using loops
console.log(text);
//display the object properties using values method
console.log(Object.values(person));
//display the object properties using entries method
let test="";
for(let[attribute,value] of  Object.entries(person)){
    test+=attribute+':'+value;
}
console.log(test);
//display the object properties using JSON Stringify method
console.log(JSON.stringify(person));