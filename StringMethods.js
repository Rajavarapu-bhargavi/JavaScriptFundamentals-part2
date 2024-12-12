const name='bhargavi';
//1.length() method
console.log(name.length);
//Extracting characters
//1.charAt()--->character
console.log(name.charAt(2));
//2.charCodeAt()-->ASCII number
console.log(name.charCodeAt(2));
//3.at()-->supports negative index
console.log(name.at(-2));
//4.property access
console.log(name[2]);
//Extracting string parts
//1.slice(start,end)
console.log(name.slice(-7,-5));
//2.substring(start,end)
console.log(name.substring(-7,5));
//3.substr(start,length)
console.log(name.substr(-2,6));
//uppercase
console.log(name.toUpperCase());
//lowercase
console.log(name.toLowerCase());
let last="Rajavarapu";
console.log(name.concat(" ",last));
let a="     Hello     ";
console.log(a.trim());
console.log(a.trimStart());
console.log(a.trimEnd());
let text="5";
console.log(text.padStart(4,"0"));
console.log(text.padEnd(4,"x"));
//repeat method
console.log(a.repeat(2));
name1="My name is bhargavi bhargavi";
console.log(name1.replace('bhargavi','Teja'));
console.log(name1.replace(/bhargavi/g,'Teja'));
console.log(name1.replaceAll(/bhargavi/g,'our'));
//split()
