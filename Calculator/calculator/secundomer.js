 //Объект секундомер
  let secundomer = {
    end: 10,
    value: 0,
    Id: "no timer",
    target: document.getElementById(output),
    start: function (end){
      secundomer.end = end || secundomer.end;
      function plusvalue(){
        if(secundomer.value<=secundomer.end -1){
          secundomer.value++; console.log(secundomer.value);
        } else{ console.log("Интервал " + "'" + secundomer.Id + "' очищен"); clearInterval(secundomer.Id);
          }
        }
      this.Id = setInterval(plusvalue,500);
    }
    
  }
  console.log(secundomer);