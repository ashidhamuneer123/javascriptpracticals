const fruits=[
    {name:"Apple",quantity:6},
    {name:"orange",quantity:6},
    {name:"pomegranate",quantity:6},
    {name:"mango",quantity:6},
    {name:"banana",quantity:6}
]


let count=0;
fruits.forEach((fruit)=>{
    count +=fruit.quantity;
})
console.log(`total number of fruits:${count}`);
