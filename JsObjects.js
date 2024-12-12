const alpha={a:'apple',b:'bat',c:'cat',d:'dog'} //object declaration using literal
console.log(alpha.a);
const person=new Object();//object declaration using new keyword;
person.firstname='bhargavi';
person.lastname='Rajavarapu';
person.age=21;
person.lastname='yanaganti';
console.log(person['firstname']+' is '+person['age']+' years old ');//accessing object properties
console.log(person.age);//accessing object properties
const details={
    aadhar:65882100,
    personality_details://nested object
    {
        age:21,
        gender:'female'
    },
    firstname:'Bhargavi',
    lastname:'Rajavarapu',
    fullname:function(){return this.firstname+' '+this.lastname}//object method
};
console.log(details.personality_details.gender);
console.log(details.fullname());
console.log(person.lastname);
delete details.aadhar;
console.log(details.aadhar);
