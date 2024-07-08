const Person={
    f_name:"Ashi",
    l_name:"muni",
    age:36,
    place:"DXB",
    isStudent:true,
    hobbies:["dancing","reading","singing"],
    address:{
        street:4,
        Apt:206,
        building:98,
        area:"Discovery Gardens"
    }
}

console.log(Person.address.Apt);
console.log(Person.hobbies[0]);

console.log(Person.hobbies.length);