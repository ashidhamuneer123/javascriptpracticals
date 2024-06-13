let myArr=[1,2,3,4,5,6,7]

console.log(myArr);

myArr.pop();//removes last elememnt
console.log(myArr);
myArr.push(9);//add new element at the end of array
console.log(myArr);
myArr.shift();//removes first element from an array
console.log(myArr);
myArr.unshift(8);//add new element at the begining
console.log(myArr);

console.log(myArr.indexOf(5));
console.log(myArr.includes(9));
console.log(myArr.includes(1));


const newArr=myArr.join()  //convert array into string
console.log(newArr);
console.log(typeof(newArr));//string


//slice & splice
//slice will not affect original array... changes will happen only in sliced array...
//splice will make changes in original array as well... 

//slice doesnt include index of second parametre given  but splice include the second parametre inddex 


console.log("Original Array: ",myArr);

const slicedArray=myArr.slice(2,6)
console.log("Sliced Array:",slicedArray);
console.log("original Array after slicing:",myArr);
const splicedArray=myArr.splice(2,6);
console.log("spliced Array:",splicedArray);
console.log("original array after splicing :",myArr);


//array of strings

const marvel_heros = ["thorn","ironman","spiderman"]
const dc_heros = ["superman","flash"]
//marvel_heros.push(dc_heros) //no merging occurs as ouput will result array inside array
//console.log(marvel_heros);

//to resolve this in single array we can either use concat method or spread operator

//concat

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

//using spread operator

const real_heros=[...marvel_heros,...dc_heros]
console.log(real_heros);

//array inside array case handling

const newArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
//we can make this within single array using flat method
const mergedArray = newArray.flat(1) //spread till 1 depth array...
const correctedNerArray=newArray.flat(Infinity)//infinity you can use to indicate the depth of how many arrays inside
console.log(correctedNerArray);
console.log(mergedArray);


//isArray & from

//isArray to check whether some data is an array or not
console.log(Array.isArray("Ashidha"));//false
console.log(Array.isArray([1,2,3,4]));//true

//from-> to create an array from other datatype
console.log(Array.from("Ashidha"));

//Array.of

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

//if we give Array.from inside an object it will return an empty array

console.log(Array.from({name:"Ashiiii"}));//[] as it doesnt know from where to generate array,either from key or from value



let myArray = ["A","B","C","F"];
let slicedMyArray = myArray.slice(1,2)
console.log(slicedMyArray);
const splicedMyArray = myArray.splice(1,2)
console.log(splicedMyArray);
console.log(myArray);
myArray.splice(1,1,"B")
console.log(myArray);


const sumArr=["ash","app",3,4,{home:"tly"},5,6]

const ans = sumArr.filter((item)=>typeof item==="number")
console.log(ans);
let answer=[]
 sumArr.forEach(item=>{
    
    if(typeof(item)==="number"){
        answer.push(item)
    }
})
console.log(answer);

const arrnew=[1,2,3,4,5,6]
let even=arrnew.filter(num =>num%2 == 0)
console.log(arrnew);
console.log(even);

let arr=[1,2,3,4,5,6,7,8,9]

for(let i=arr.length-1;i>=0;i--){
    if(arr[i]%2===0){
        arr.splice(i,1)
    }
}

console.log(arr);


const numberArray=[15,5,45,60,99,87,89,66,43,21,1,22,33,44,56]
const newNumArray=numberArray.map(values=>values).filter((num)=>num>15).reduce((sum,num)=>sum+num,0)
console.log(newNumArray);


const abc=[1,23,4,5,67,7]
const b=[...abc]//copy
const a=Object.assign([],abc)//copy
console.log(a);
console.log(b);

//array destructure

const people=["rahul","ram","loy"]
const [first,second,third]=people;
console.log(second);
