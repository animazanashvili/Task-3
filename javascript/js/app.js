function calc() {
    const number_1 = parseFloat(prompt("First Number"));
const number_2 = parseFloat(prompt("Second Number"));

if (!isNaN(number_1) && !isNaN(number_2))
{ const operation = prompt("+,-,/,*,%");

if (operation === "+") {
  alert(`Result = ${number_1 + number_2}`);
 }
else if (operation === "-") {
  alert(`Result = ${number_1 - number_2}`);
 }
 else if (operation === "/") {
   alert(`Result = ${number_1 / number_2}`);
 }
 else if (operation === "*") {
     alert(`Result = ${number_1 * number_2}`);
 }
 else if (operation === "%") { 
     alert(`Result = ${number_1 % number_2}`);
 }
 else {
     alert("Bad Operatoin");
 }

// switch(operation) {
//     case "+": alert(`Result = ${number_1 + number_2}`);
//         break; 

//      case "-": alert(`Result = ${number_1 - number_2}`);
//         break; 

//     case "/": alert(`Result = ${number_1 / number_2}`);
//         break; 

//     case "*":  alert(`Result = ${number_1 * number_2}`);
//         break;

//     case "%": alert(`Result = ${number_1 % number_2}`);
//         break; 
//     default:
//         alert("Bad Operation");    
// }
// }
// else {
//     alert ("Bad Number");
// }

}
}
