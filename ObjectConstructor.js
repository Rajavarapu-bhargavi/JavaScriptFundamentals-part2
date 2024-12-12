function person(first,last,age){
    this.firstname=first,
    this.lastname=last,
    this.age=age
}
const father=new person('venky','rajavarapu',55);
const mother=new person('padhu','rajavarapu',40);
const brother=new person('sai','rajavarapu',23);
const me=new person('bhargavi','rajavarapu',21);
person.city='hyderabad';//cannot add new property to the object constructor
person.prototype.city="hyderabad";//can add new property by using prototype
father.city='hyderabad';//can add new property to the object
console.log(father);
console.log(mother);
console.log(brother);
console.log(me);
console.log(me.city);
