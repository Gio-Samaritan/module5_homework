/*Задание 6 */
const a = [1, 2, 3, "5"];
const b = [1, 2, 3, 5];
if(JSON.stringify(a)===JSON.stringify(b))
 console.log("True");
else
 console.log("False");