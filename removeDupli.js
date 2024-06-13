let arr=[99,8,3,3,3,4,5,6,6,7,8,8,8,9]
let newArr=[...new Set(arr)]
console.log(newArr);
newArr.sort((a,b)=>b-a)
console.log(newArr);
console.log(newArr[2]);