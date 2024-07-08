const promise=new Promise((res,rej)=>{
    let num =8;
    if(num%2===0){
        res("even")
    }else{
        rej("odd")
    }
}).then((result)=>{
    console.log(`num is :${result}`);
}).catch((err)=>{
    console.log(`errrr:${err}`);
})



const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10)
    },1000)
})

const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(20)
    },2000)
})

const p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(30)
    },3000)
})

const p4=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(40)
    },4000)
})

Promise.all([p1,p2,p3,p4]).then((result)=>{
    console.log(`${result}`);
}).catch((err)=>{
    console.log(`rejected:${err}`);
})