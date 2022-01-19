
//Создать поле 10 на 10
let field = {
  size: 11,
};
const sound = {
      click: new Audio('./sounds/click.mp3'),
      bomb: [new Audio('./sounds/big_bomb.mp3'), new Audio('./sounds/bomb2.mp3')]}
let ships = {
  indexes: [8,15,16,35,44,33,44,45,46,48,98,99]
}






createField()
createCells()
create_letters()
create_numbers()




























function createField(){
  let field = document.createElement('div');
  field.classList.add('field');
  field.id = "field"
  field.style.width = '400px';
  field.style.height = '400px';
  field.style.backgroundColor = 'yellow';
  field.style.border = '1px solid black' 
  field.style.display = 'grid'
  field.style.gridTemplateColumns = `repeat(10, 1fr)`
  field.style.gridTemplateRows = `repeat(10, 1fr)`
  document.body.insertAdjacentElement("afterbegin", field)
  }
function createCells(){
  for (let index = 0; index < (99); index++) {
      console.log(index)
      
      let cell = document.createElement('div')
      cell.index = index+1
      cell.classList.add('cell', 'cell_'+(cell.index));
      cell.style.backgroundColor = 'white'
      cell.style.border = '1px solid black'
      cell.addEventListener('click', function(){console.log(field.size)
        ;    
            if( ships.indexes.indexOf(this.index) != -1){
              console.log('попал')
              sound.bomb[Math.floor(Math.random() * sound.bomb.length)].play()
              changeColor.call(this)}
              else console.log('мимо')
           
            sound.click.play()})
      document.getElementById('field').appendChild(cell)

  }
}
function create_letters(){
  let letters = document.createElement('div')
  letters.style.backgroundColor = 'transparent'
  letters.style.border = 'black solid 1px'
  letters.style.width = '400px'
  letters.style.height = '40px'
  letters.style.display = 'grid'
  letters.style.gridTemplateColumns = 'repeat(10, 1fr)'
  letters.style.columnGap = '2px'
  document.getElementById('field').insertAdjacentElement("beforebegin", letters)
  letter = Object.create({},{
    text: {value: 'A',
          writable:true}
  })
  fill(letters, 10)
  
  
  
}
function changeColor(){
    this.style.backgroundColor = 'black';
  }
function fill(targetElem, qty){
  const width = getComputedStyle(targetElem).width
  for (let index = 0; index < qty; index++) {
    let new_elem = document.createElement('div')
    
    new_elem_width = parseInt(width)/qty;
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
function create_numbers(){
  let field = document.getElementById('field')
  let numbers = document.createElement('div')
  numbers.insertAdjacentElement('beforebegin', field)
  numbers.style.height = getComputedStyle(field).height.toString()
}