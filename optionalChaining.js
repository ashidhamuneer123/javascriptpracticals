const players = {
    name :"muneer",
    age:36,
    company:{
        comp_name:"Deyaar"
    }
}

//if we dont know whether a particular key exist..we can use chaining to nest the condition 
if(players?.company?.comp_name){
    console.log(players.company.comp_name);
}
if(players?.company?.comp_place){
    console.log(players.company.comp_place);
}