const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("promise1");
        res(10)
    },1000)
})

const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("promise2");
        res(20)
    },2000)
})

const p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("promise3");
        res(30)
    },3000)
})

Promise.all([p1,p2,p3]).then((result)=>{
    const sum=result.reduce((sum,num)=>sum+num,0)
    console.log(`promises:${result}`);
    console.log(`sum:${sum}`);
}).catch((err)=>{
    console.log("err",err);
})
