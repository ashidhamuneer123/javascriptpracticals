const ba=[{af:[434,23],ag:56},
          {af:[43,234],ag:6},
          {af:[434,23],ag:62},
          {af:[96,23],ag:11}]

let arr=[]
 ba.forEach((e)=>{
    arr.push(e.af,e.ag);
  
 })
let array=arr.flat(Infinity)
let result=arr.reduce((a,b)=>a+b,0)
console.log(result);


const customers = [
    { id: 1, name: 'Alice', city: 'New York' },
    { id: 2, name: 'Bob', city: 'Los Angeles' },
    { id: 3, name: 'Charlie', city: 'New York' }
  ];

  const newyorkCustomers=customers.filter((customer)=>customer.city=='New York')
  newyorkCustomers.forEach((customer)=>{
    console.log(customer.name);
  })
  
  