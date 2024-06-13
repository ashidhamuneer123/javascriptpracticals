const person ={
    name:"Ashidha",
    details:function (age,place){
        console.log(`hellooo ${this.name}..your age is ${age} & you are from ${place}`);
    }
}

person.details(34,"dxb")

const per1={
    name:"hina"
}

const per2={
    name:"hikmah"
}

const per3={
    name:"muneer"
}

person.details.call(per1,7,"dxb");
person.details.apply(per2,[3,"dxb"])
let p3=person.details.bind(per3,34,"dxb")
p3()