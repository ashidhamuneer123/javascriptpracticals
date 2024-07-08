let words = ['ant','apple','cat','cap','doll','elephant']
let aWords=[]
words.forEach(word=>{
    if(word[0]==='a'){      //word.charAt(0)=='a' or word.startsWith('a)
        aWords.push(word)
    }
})

let cWords=words.filter((word)=>word.startsWith('c'))
//console.log(aWords);


const myname='  Ashidha_Muneer  '
const myName = new String(' Ashidha_Muneer  ');
console.log(myname);
console.log(myName);
console.log(myName.trim());
console.log(myName.replace('_','-'));
console.log(myName.toUpperCase());
console.log(myName.indexOf('M'));
console.log(myName.charAt(8));
console.log(`hiii My name is ${myName}`);
console.log(myName.includes('neer'));

const str="hello th is is ash idh a"
console.log(str.replaceAll(' ',''));
console.log(cWords);


