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
      bomb: [new Audio('./sounds/big_bomb.mp3'), new Audio('./sounds/bomb2.mp3')]}
let ships = {
  indexes: [8,15,16,35,44,33,44,45,46,48,98,99]
}
let oldStyle = {
  width: 'старая',
  height:'плохая',
}


let myStyle = {
  width: 'новая',
  height: 'хорошая',
  backgroundColor: 'red',
}
// console.log(Object.entries(oldStyle))
// oldStyle = Object.merge(oldStyle, myStyle)

// console.log(oldStyle)
// console.log(Object.entries(oldStyle))
oldStyle = oldStyle.SetProperties({
                width:'38px',
                height:'55px'})
console.log(oldStyle)






let arr = [1, 3, 24]
// console.log(arr.slice(1,1))










createCells()









function createCells(){
  let cells = document.createElement('div');
  cells.classList.add('cells');
  cells.id = "cells"


  cells.style.width = '400px';
  cells.style.height = '400px';
  cells.style.backgroundColor = 'yellow';
  cells.style.border = '1px solid black' 
  cells.style.display = 'grid'
  cells.style.gridTemplateColumns = `repeat(10, 1fr)`
  cells.style.gridTemplateRows = `repeat(10, 1fr)`
  document.body.insertAdjacentElement("afterbegin", cells)


  createCells()
  create_letters()
  create_numbers()
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
  
  
  function changeColor(){
      this.style.backgroundColor = 'black';
    }
  
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
}



