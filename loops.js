//do while
let i = 0;
do {
  i += 1;
  //console.log(i);
} while (i < 5);

//while
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  //console.log(`n:${n} & x:${x}`);
}

//break inner loop usecase

let a=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<a.length;i++){
    if(a[i]=== 5){
        break;
    }
    console.log(a[i]);
}

//for..in loop=> iterates over object properties

let car ={
    name:tiida,
    model:2013,
    place:dubai
}

for(let property in car){
    console.log();
}
