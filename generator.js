function* genfunc(){
    let num=5;
    while(true){
        yield num;
        num+=5; 
    }
}

let gen=genfunc();
for(let i=0;i<10;i++){
    console.log(gen.next());
}