//singleton    ->Object.create (object creation using this is constructor method creation)

//object literals like creating object will not be singleton

//-----------------------------------------------------------------------------//

//object literals

const user = {} //empty object

const myUser = {
    name:"Ashi",
    age:33,
    place:"Dubai",
    email:"ashi@gmail.com",
    isAdmin:true,
    lastLogin:["monday","saturday"]
}

//to access object properties we normally use objectname followed by dot then key
//but we have another method as well objectname["key"]  which is recommended 

console.log(myUser.name);
console.log(myUser["name"]);

//both ways we can access... but in second method its only accesible in certain cases
//consider the modified object 

const newUser = {
    name:"Ashi",
    "full name":"Ashidha Muneer",
    age:33,
    place:"Dubai",
    email:"ashi@gmail.com",
    isAdmin:true,
    lastLogin:["monday","saturday"]
}

//when we come across this type of object we cant able to access fullname using dot method..we need to follow second method

console.log(newUser["full name"]);

//if you need to include Symbol datatype (primitive) inside object you have to first declare symbol then the key of object should be written with in  square bracket.
//also while accessing inside squarebracket no need to put quotes

const mySymbol = Symbol("key1");

const symUser = {
    name:"Ashi",
    "full name":"Ashidha Muneer",
    [mySymbol] : "mykey",
    age:33,
    place:"Dubai",
    email:"ashi@gmail.com",
    isAdmin:true,
    lastLogin:["monday","saturday"]
}

console.log(symUser[mySymbol]);
console.log(symUser)

//to change value we can just simply assign new value to the particular key that need to be changed

symUser.name = "Ashidha"
console.log(symUser);

//freeze an object
//if we dont want to edit or change any object after its created , we can freeze that object using freeze method

Object.freeze(symUser)

//now if we assign any new value it will not show any error,but will not change any value

symUser.age=35;
console.log(symUser);//age will not get updated

//---------------------------------------------------------------------------------------

const latestUser0 = new Object()//creating an object using object constructor
const latestUser ={} //object created without oject constructor

latestUser.name="Ashidha"
latestUser.id="123aaa"
latestUser.greeting=function(){
    console.log(`welcome , ${this.name}`);
}
latestUser.full_name={
    first_name:"Ashidha",
    last_name:"Muneer"
}
console.log(latestUser.greeting());

//console.log(Object.keys(latestUser));
//console.log(Object.values(latestUser));
//console.log(Object.entries(latestUser));

//................merging objects....Object.assign(),spread operator etc 

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};
const objjjj={...obj1,...obj2,...obj3}
//console.log(objjjj);

const objAsssign=Object.assign({},obj1,obj2,obj3) //assigns all objects in first parametre..here in empty object...works same as spread operator

//console.log(objAsssign);


//object destructuring

const personDetails={
    name:"Arjun",
    age:25,
    place:"kerala"
}

const {name,age,place}=personDetails;
console.log(age);

//rest operator

//in the below example no need to specify each property in obj destructuring,instead can use rest operator
const personDetail={
    name:"Arjun",
    age:25,
    place:"kannur",
    sex:"Male",
    phone:123456,
    pincode:987877,
    state:"kerala",
    country:"India"
}
//for destructuring using rest operator

const {sex,...rest}=personDetail;
console.log(rest.country);

//forEach

const players=[{
    name:"Arjun",
    age:25,
    place:"kerala"
},{
    name:"Arun",
    age:28,
    place:"kerala"
},{
    name:"jun",
    age:5,
    place:"kerala"
},{
    name:"Annnn",
    age:25,
    place:"kerala"
}]



let ages =[];
players.forEach((player)=>{    
    ages.push(player.age);
 })
 let totalAge=ages.reduce((sum,value)=>sum+value,0)
 console.log(ages);
 console.log(totalAge);

 let total=0;
 for(let i=0;i<players.length;i++){
    
    total += players[i].age;
 }
 console.log(total);

 //map & filter 

 const mappedPlayers=players.map(value=>value)
 console.log(mappedPlayers);
 const filteredPlayers=players.filter(value=>value.age>5)
 console.log(filteredPlayers);

 //find

 const newPlayer=players.find((player)=>player.name === "Arjun");
 console.log(newPlayer);

