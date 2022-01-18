console.log('Hello World!');
function umnoj(x,y){
  var z = x*y;
  return z;
}
function umnojit() {console.log(umnoj(3,4));}
console.log(umnoj(3,5));

function getDayfromNumber(x){
  switch(x){
  case 1:return("Понедельник");
  case 2:return("Вторник");
  case 3:return("Среда");
  case 4: return("Четверг");
  case 5:return("Пятница");
  case 6:return("Суббота");
  case 7:return("Воскресенье");
  case x<1:return ("меньше 1");
  default: return("Введите число от 1 до 7"+" ,а не " + typeof(x));
  }
}
document.getElementById("calc-button").addEventListener("click",printDay);
day=getDayfromNumber(43);
console.log(day);
var num=2;
function printDay(){
  console.log(getDayfromNumber(parseInt(document.getElementById("number").value)));
}