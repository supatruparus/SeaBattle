 //
 var Timer = {
       value: 150,            
       interval: 1000,
       start: function(end_value){
            Timer.timerId=  window.timerId = window.setInterval(() => {
      
      var elem = document.getElementById('Result');
      
           elem.value = parseInt(elem.value)+1 ;
      }, Timer.interval);
      },
       refresh:function() {
       document.getElementById('Result').value = 0;
      },
       stop: function() {
       window.clearInterval(Timer.timerId);
       }

  }