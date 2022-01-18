
function calculate(){

r = parseFloat(document.calculator.radius.value.replace(/,/, '.'));
v = parseFloat(document.calculator.vitki.value.replace(/,/, '.'));

timer = (r+r+23)/100*3.15 / 2 * v * w;
document.getElementById('Stimer').innerHTML=parseFloat(timer).toFixed(2);
document.getElementById('Length').innerHTML= parseFloat(timer/w);
}

document.addEventListener("click", function(thenew)
{

if_id = thenew . target. id;

the_class = thenew . target.className;

if(the_class == "click_me")

{

if_id = document.getElementById(if_id);

if(if_id .style . background == "red")

{

if_id .style . background = "#efefef";

}

else

{

var links = document.querySelectorAll(".click_me");

links.forEach(link => {

link.setAttribute("style", "background:#efefef");

})

if_id .style . background = "red";

}

}

});