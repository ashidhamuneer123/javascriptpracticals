let read=require('readline-sync')

let fruitType = read.questionInt("enter your choice:");
switch (fruitType) {
    case 1:
      console.log("Oranges are $0.59 a pound.");
      break;
    case 2:
      console.log("Apples are $0.32 a pound.");
      break;
    case 3:
      console.log("Bananas are $0.48 a pound.");
      break;
    case 4:
      console.log("Cherries are $3.00 a pound.");
      break;
    case 5:
      console.log("Mangoes are $0.56 a pound.");
      break;
    case 6:
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of stock.`);
  }
  console.log("Is there anything else you'd like?");
  