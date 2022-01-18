
//Создать поле 10 на 10
createField()
function createField(){
let field = document.createElement('div')
field.classList.add('field')
field.style.width = '400px';
field.style.height = '400px';
field.style.backgroundColor = 'yellow';
field.style.border = '1px solid black' 
field.style.display = 'grid'
field.style.gridTemplateColumns = 'repeat(10, 1fr)'
field.style.gridTemplateRows = 'repeat(10, 1fr)'



document.body.appendChild(field)
createCells()
function createCells(){
  for (let index = 0; index < 100; index++) {
      console.log(index)
      
      let div = document.createElement('div')
      div.classList.add('cell', 'cell_'+(index+1));
      div.style.backgroundColor = 'white'
      div.style.border = '1px solid black'
      document.querySelector('.field').appendChild(div)

  }
}
}