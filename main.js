/*
Switch challenge
 */

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
  console.log(`the Job is ${job} and The Salary is : ${salary}$`)
}else if (job === "IT" || job === "Support"){
  salary = 6000;
  console.log(`the Job is ${job} and The Salary is : ${salary}$`)
}else if (job === "Developer" || job === "Designer"){
  salary == 7000;
  console.log(`the Job is ${job} and The Salary is : ${salary}$`)
}else{
  salary == 4000;
  console.log(`Unknown Job , The Salary is : ${salary}$`)

}

//Covert  if  to switch

switch (job) {
  case "Manager" :
    salary = 8000;
    console.log(`the Job is ${job} and The Salary is : ${salary}$`)
    break;
  case "IT" :
  case "Support" :
    salary = 6000;
    console.log(`the Job is ${job} and The Salary is : ${salary}$`)
    break;
  case "Developer" :
  case "Designer" :
    salary = 7000;
    console.log(`the Job is ${job} and The Salary is : ${salary}$`)
    break;
    default :
    salary = 4000;
    console.log(`Unknown job , the Salary is : ${salary}$`)
}
/***********************************/
// Convert awitch to if 

let holidays = 1;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

function myMoney1 (){
  if (holidays == 0){
    money = 5000;
  }else if (holidays > 0 && holidays <= 2){
    money = 3000;
  
  }else if (holidays == 3){
    money = 2000;
  
  }else if (holidays == 4){
    money = 1000;  
  }else{
    money = 0;
  }
  console.log(`My Money is ${money}`);
}
myMoney1()
function myMoney2 (){
  holidays == 0 ? money = 5000 
  :holidays > 0 && holidays <= 2 ? money = 3000 
  : holidays == 3 ? money = 2000 
  : holidays == 4 ? money = 1000 : money = 0;
  console.log(`My Money is ${money}`);
}
myMoney2()