function print(string){
  document.getElementById("output").innerHTML= string;
}
function copytext(){
 var string = document.getElementById("div2").innerHTML;
 print(string);
 

 
}
//Создаем объект калькулятор
let calculator = {
  length: "250px",
  width: "200px",
  b_size: "30",
    sum: function(a,b){
    let x = a+b;
    return x;
    
  },
    multiply: function(a,b){
    var x=a*b;
    return x;
  },
    print: function (string){
      
      output = string;
      console.log(string);
    },
    getButton: function(){
      console.log(this + "hi");
    }
  }
  

   //Назначаем всем кнопкам при  клике печатать их значение в поле вывода
   
  function bindbuttons() {
     let buttons = document.querySelectorAll(".number",'.sign');
    for(let i = 0;i<=buttons.length - 1; i++){
      buttons[i].addEventListener("click",
        function(){
          document.getElementById("output").innerText+=buttons[i].innerText;
        }
      )
    }
  }
  function bindequal() {
       document.getElementById("button-equal").addEventListener("click", 
          function() {
          let output = document.getElementById("output").innerText;
           console.log(output);
           }
         )
     }
  bindbuttons();
  bindequal();
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
  console.log(secundomer)