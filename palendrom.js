function pal(str){
    let flag=0;
    for(let i=0;i<=str.length;i++){
        if(str[i]!=str[str.length-1-i]){
            flag=1;
        }
    }
    if(flag==0){
        console.log("palindrome");
    }else{
        console.log("not a palindrom");
    }
}

pal("malayalam")
