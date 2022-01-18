var Timer = new Object();
          
Timer.interval = 1000;
Timer.start = function start(end_value){
     Timer.timerId=  window.timerId = window.setInterval(() => {

var elem = document.getElementById('timer');

//Если таймер бесконечный

    elem.value = parseInt(elem.value)+1 ;
}, Timer.interval);
}
Timer.refresh = function refresh() {
document.getElementById('timer').value = "Работает";
}
Timer.stop = function stop() {
window.clearInterval(Timer.timerId);

     }