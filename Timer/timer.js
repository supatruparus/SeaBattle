 //
 var Timer = new Object();
            
 Timer.interval = 1000;
 Timer.start = function start(end_value){
      Timer.timerId=  window.timerId = window.setInterval(() => {

var elem = document.getElementById('Result');

     elem.value = parseInt(elem.value)+1 ;
}, Timer.interval);
};
 Timer.refresh = function refresh() {
 document.getElementById('Result').value = 0;
}
 Timer.stop = function stop() {
 window.clearInterval(Timer.timerId);

      }