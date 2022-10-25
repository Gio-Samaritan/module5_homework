/*Задание 1 */
let arr = prompt();
arr = +arr;
alert(typeof arr);
if(arr%2 === 0){
  alert("четное");
}
else if(arr%1 === 0){
  alert("нечетное");
}
else if(arr !== arr){
  alert("Дядь ты шо пишешь Nan?");
}
else{
  alert("Упс, кажется вы ошиблись");
}