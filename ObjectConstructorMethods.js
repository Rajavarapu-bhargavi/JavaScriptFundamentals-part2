function person(first,last,age){
    this.firstname=first,
    this.lastname=last,
    this.age=age
    this.fullname=function(){return this.firstname+' '+this.lastname};//can add the method to object constructor
}
const father=new person('venky','rajavarapu',55);
const mother=new person('padhu','rajavarapu',40);
const brother=new person('sai','rajavarapu',23);
const me=new person('bhargavi','rajavarapu',21);
console.log(father);
console.log(mother);
console.log(brother);
console.log(me);
console.log(father.fullname());
