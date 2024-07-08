const array=[1,2,3,4,5]

for(let i=0;i<array.length/2;i++){
    const temp=array[i];
    array[i]=array[array.length-1-i]
    array[array.length-1-i]=temp
}
console.log(array)


const string=["ash","nijil","aju","raees","mithilaj"]

for(let i=0;i<string.length/2;i++){
    const temp=string[i];
    string[i]=string[string.length-1-i];
    string[string.length-1-i]=temp
}
console.log(string);

//palendrome check 

const str="ashidha"
let flag=0;
for(let i=0;i<str.length/2;i++){
    if(str[i] != str[str.length-1-i]){
        flag=1;
    }
}
if(flag==0){
    console.log("palendrome");
}else{
    console.log("not a palendrome");
}
