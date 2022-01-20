
//Создать поле 10 на 10
let cells = {
  size: 11,
};
const sound = {
      click: new Audio('./sounds/click.mp3'),
      bomb: [new Audio('./sounds/big_bomb.mp3'), new Audio('./sounds/bomb2.mp3')]}
let ships = {
  indexes: [8,15,16,35,44,33,44,45,46,48,98,99]
}






createField()































function createField(){
  //Сам код
  createCells()
  create_numbers()
  create_letters()

  //Объявляем переменные
  let mainfield = document.createElement('div')
  document.body.insertAdjacentElement('afterbegin', mainfield)
  mainfield.classList.add('mainfield')

  //Set style 
  mainfield.style.margin = '8% 0 3% 5%'
  mainfield.style.width = '600px'
  mainfield.style.height = '600px'
  mainfield.style.position = 'relative'


  

  let cells = document.createElement('div');
  cells.classList.add('cells');
  cells.id = "cells"


  cells.style.width = '90%';
  cells.style.height = '90%';
  cells.style.backgroundColor = 'yellow';
  cells.style.border = '1px solid black' 
  cells.style.display = 'grid'
  cells.style.gridTemplateColumns = `repeat(10, 1fr)`
  cells.style.gridTemplateRows = `repeat(10, 1fr)`



  mainfield.insertAdjacentElement('afterbegin', cells)


  
  

  function createCells(){
    for (let index = 0; index < (100); index++) {
        
        
        let cell = document.createElement('div')
        cell.index = index+1
        cell.classList.add('cell', 'cell_'+(cell.index));

        
        cell.style.backgroundColor = 'white'
        cell.style.border = '1px solid black'



        cell.addEventListener('click', function(){console.log(cells.size)
          ;    
              if( ships.indexes.indexOf(this.index) != -1){
                console.log('попал')
                sound.bomb[Math.floor(Math.random() * sound.bomb.length)].play()
                changeColor.call(this)}
                else console.log('мимо')
             
              sound.click.play()})
        document.getElementById('cells').appendChild(cell)
  
    }
  }
  function create_letters(){
    
    let letters = document.createElement('div')
    
    letters.classList.add('letters')


    letters.style.backgroundColor = 'transparent'
    letters.style.border = 'black solid 1px'
    letters.style.width = '90%'
    letters.style.height = '10%'
    letters.style.display = 'grid'
    letters.style.gridTemplateColumns = 'repeat(10, 1fr)'
    letters.style.columnGap = '2px'
  
   
    document.querySelector('.cells').insertAdjacentElement("beforebegin", letters)
    
    
    fill(letters, 10)
    
    
    
  }
  function create_numbers(){
    let cells = document.getElementById('cells')
    let numbers = document.createElement('div')
    numbers.classList.add('numbers')



    numbers.style.position = 'relative'
    numbers.style.backgroundColor = 'red'
    numbers.style.height = '90%'
    numbers.style.width = '8%'
    numbers.style.marginTop = '10%'
    numbers.style.bottom = '0px'
    numbers.style.float = 'left'


    numbers.insertAdjacentElement('beforebegin', cells)
    document.querySelector('.cells').insertAdjacentElement("beforebegin", numbers)

  }
  }


function changeColor(){
    this.style.backgroundColor = 'black';
  }
function fill(targetElem, qty){
  const width = getComputedStyle(targetElem).width
  for (let index = 0; index < qty; index++) {
    let new_elem = document.createElement('div')
    new_elem.style.textAlign = "center"
    new_elem.style.justifyContent = 'bottom'
    
    switch ((index+1)) {
      case 1:
        new_elem.innerText = 'К'
        break;
      case 2:
        new_elem.innerText = 'И'
        break;
      case 3:
        new_elem.innerText = 'З'
        break;
      case 4:
        new_elem.innerText = 'Ж'
        break;
      case 5:
        new_elem.innerText = 'Е'
        break;
      case 6:
        new_elem.innerText = 'Д'
        break;
      case 7:
        new_elem.innerText = 'Г'
        break;
      case 8:
        new_elem.innerText = 'В'
        break;
      case 9:
        new_elem.innerText = 'Б'
        break;
      case 10:
        new_elem.innerText = 'А'
        break;     
      default:
        break;
    }
    new_elem.style.border = 'solid 1px green'
    targetElem.insertAdjacentElement('afterbegin', new_elem)
    
  }
   
}
