Object.prototype.SetProperties = function(newvaluesObject){
  // console.log(targetObj)
  let targetObj = this
  let updatedObj = {}
  targetObj.keys = Object.getOwnPropertyNames(targetObj)
  let targetObjValues = Object.values(targetObj)
  let targetObjEntries = Object.entries(targetObj)

  let newvaluesObjectKeys = Object.getOwnPropertyNames(newvaluesObject)
  let newvaluesObjectEntries = Object.entries(newvaluesObject)
  newvaluesObject.keys = Object.getOwnPropertyNames(newvaluesObject)
  // console.log('Целевой массив значений: ' + targetObjEntries )
  //Для каждого ключа нового объекта проверяем есть ли такой ключ в целевом объекте и если есть то
  newvaluesObject.keys.forEach(key => {
    if(targetObj.keys.includes(key)){
      //если в целевом объекте есть такой ключ:
      let oldIndex = targetObj.keys.indexOf(key)
      let oldValue = targetObjValues[oldIndex] 
      let newvaluesObjectIndex = newvaluesObjectKeys.indexOf(key)
    
      // console.log('ключ ' + key + ' есть в целевом массиве, старое значение = ' + oldValue + 'Ключ-значение = '
      //  + targetObjEntries[oldIndex] + ' Индекс = ' + oldIndex + 'Индекс в новом массиве = ' +  newvaluesObjectIndex + ' Ключ-значение = ' + newvaluesObjectEntries[newvaluesObjectIndex] )
      //заменяем значение этого ключа:
      targetObjEntries[oldIndex] = newvaluesObjectEntries[newvaluesObjectIndex]

    } else{
        //если нет такого ключа:
      
        // console.log('ключа ' + key + ' нет в целевом массиве')
      }


      // Показать новый объект
    
 
  });
  targetObjEntries.pop()
  // console.log(Object.fromEntries(targetObjEntries))
  updatedObj = (Object.fromEntries(targetObjEntries))
  targetObj = updatedObj;
  // console.log(`Обновленный объект:  ${Object.values(updatedObj)} `)
  // console.log(updatedObj)
  // console.log(this)
  // console.log('Новый массив: ' + targetObjEntries)
  
  return updatedObj

}




//Создать поле 10 на 10

const sound = {
      click: new Audio('./sounds/click.mp3'),
      bomb: [new Audio('./sounds/big_bomb.mp3'), new Audio('./sounds/bomb2.mp3')]
}

let ships = {
  indexes: []
}

let battleSize = '400px'
let battleSizeFloat = parseFloat(battleSize)
let marginTop = '100px'
let ShipsIsHidden = false;
button1 = document.createElement('button')
placeShipButton = document.createElement('button')




let arr = [1, 3, 24]
// console.log(arr.slice(1,1))










createCells()


console.log(parseInt(battleSize))






function createCells(){
  let cells = document.createElement('div');
  cells.classList.add('cells');
  cells.id = "cells"
  cells.style.width = battleSize;
  cells.style.height = battleSize;
  cells.style.position = 'absolute'
  cells.style.left = battleSizeFloat/10 + 'px'
  cells.style.backgroundColor = 'yellow';
  cells.style.border = '1px solid black' 
  cells.style.display = 'grid'
  cells.style.gridTemplateColumns = `repeat(10, 1fr)`
  cells.style.gridTemplateRows = `repeat(10, 1fr)`


  let SeaBattleElem = document.createElement('div');
  document.body.insertAdjacentElement("afterbegin", SeaBattleElem)
  SeaBattleElem.classList.add('SeaBattleElem')
  SeaBattleElem.style.marginTop = marginTop;
  SeaBattleElem.style.height = '500px'
  SeaBattleElem.style.position = 'relative'
  SeaBattleElem.insertAdjacentElement("afterbegin", cells)
  createCells()
  create_letters()
  create_numbers()
  createInterface()

  
  function create_letters(){
    
    let letters = document.createElement('div')
    
    letters.classList.add('letters')
  
  
    letters.style.backgroundColor = 'transparent'
    // letters.style.border = 'black solid 1px'
    letters.style.width = battleSize
    letters.style.height = '40px'
    letters.style.position = 'absolute'
    letters.style.left = parseInt(battleSize)/10 + 'px'
    letters.style.top = -(parseInt(battleSize)/10) + 'px'
    letters.style.display = 'grid'
    letters.style.gridTemplateColumns = 'repeat(10, 1fr)'
    letters.style.alignContent = 'end'

    // letters.style.columnGap = '2px'
  
   
    document.querySelector('.cells').insertAdjacentElement("beforebegin", letters)
    
    
    fill(letters, 10)
    function fill(targetElem, qty){
      const width = getComputedStyle(targetElem).width
      for (let index = 0; index < qty; index++) {
        let new_elem = document.createElement('div')
        new_elem.style.display = 'block'
        new_elem.style.textAlign = "center"
        new_elem.style.marginTop = '5px'
        new_elem.classList.add('letters')
  
  
        
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
        // new_elem.style.border = 'solid 1px green'
        targetElem.insertAdjacentElement('afterbegin', new_elem)
        
      }
       
    }
    
    
  }
  function createCells(){
    for (let index = 0; index < (100); index++) {
        let cell = document.createElement('div')
        cell.index = index+1
        cell.classList.add('cell', 'cell_'+(cell.index));
        cell.id = index +1
        cell.style.border = '1px solid black'
        cell.addEventListener('click', function(){console.log(cells.size)
              if( ships.indexes.indexOf(this.index) != -1){
                console.log('попал')
                console.log(this.index)
                sound.bomb[Math.floor(Math.random() * sound.bomb.length)].play()
                this.classList.add('visibleCell')
              }
                else console.log('мимо')
             
              sound.click.play()})
        document.getElementById('cells').appendChild(cell)
    }

  }
  function create_numbers(){
    let cells = document.getElementById('cells')
    let numbers = document.createElement('div')
    numbers.classList.add('numbers')
  
  
    
    numbers.style.position = 'absolute'
    // numbers.style.backgroundColor = 'red'
    numbers.style.height = parseFloat(battleSize) + 'px' 
    numbers.style.width = parseFloat(battleSize) / 10 + 'px';
    // numbers.style.top = parseFloat(battleSize)/10 + 'px'
    numbers.classList.add('numbers')
    numbers.style.display = 'grid'
    numbers.style.gridTemplateColumns = '1fr, 10'

  
    numbers.insertAdjacentElement('beforebegin', cells)
    document.querySelector('.cells').insertAdjacentElement("beforebegin", numbers)
    fill(numbers, 10)
    function fill(targetElem, qty){
      const width = getComputedStyle(targetElem).width
      for (let index = 0; index < qty; index++) {
        let new_elem = document.createElement('div')
        new_elem.style.display = 'block'
        new_elem.style.textAlign = "center"
        new_elem.classList.add('letters')
  
  
        
        switch ((index+1)) {
          case 1:
            new_elem.innerText = '10'
            break;
          case 2:
            new_elem.innerText = '9'
            break;
          case 3:
            new_elem.innerText = '8'
            break;
          case 4:
            new_elem.innerText = '7'
            break;
          case 5:
            new_elem.innerText = '6'
            break;
          case 6:
            new_elem.innerText = '5'
            break;
          case 7:
            new_elem.innerText = '4'
            break;
          case 8:
            new_elem.innerText = '3'
            break;
          case 9:
            new_elem.innerText = '2'
            break;
          case 10:
            new_elem.innerText = '1'
            break;     
          default:
            break;
        }
        // new_elem.style.border = 'solid 1px green'
        targetElem.insertAdjacentElement('afterbegin', new_elem)
        new_elem.style.display = 'flex'
        new_elem.style.alignItems = 'center'
        new_elem.style.justifyContent = 'center'
        
      }
       
    }
  
  }

}


function createInterface(){
  let Interface = document.createElement('div')
  Interface.classList.add('interface')
  document.body.insertAdjacentElement('beforeend', Interface)
  button1.innerText = "Показать корабли"
  button1.classList.add('button1', 'button')
  button1 = document.querySelector('.button1')
  button1.onclick = showShips;
  Interface.insertAdjacentElement('afterbegin', button1)

  placeShipButton.innerText = 'Добавить корабли'
  Interface.insertAdjacentElement('beforeend', placeShipButton)
  placeShipButton.classList.add('placeShipButton', 'button')


  let infopanel = document.createElement('output')
  infopanel.classList.add('infopanel')
  document.querySelector('.interface').insertAdjacentElement('beforeend', infopanel)
  infopanel.innerText = 'Sea Battle'

}
function showShips(){
  console.log('privet')
  
  if(ShipsIsHidden === false){
    ships.indexes.forEach(function(index){
      ShipsIsHidden = true
      let cellWithShip = document.querySelector('.cell_' + index)
      let cellsWithShip = []
      cellsWithShip.push(cellWithShip.id)
      cellWithShip.classList.add('visibleCell')
      document.querySelector('.button1').innerText = 'Скрыть корабли'
      

      })
  }else{
    ShipsIsHidden = false
    ships.indexes.forEach(function(index){document.querySelector('.cell_' + index).classList.replace('visibleCell', 'invisibleCell')})
    
    document.querySelector('.button1').innerText = 'Показать корабли'

  }
}

function changeColor(){
  this.style.backgroundColor = 'black';
}