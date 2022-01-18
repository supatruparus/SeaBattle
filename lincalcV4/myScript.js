function addBlocks(){
  console.log("click");
  let newBlock = this.appendChild(document.createElement("div"));
  newBlock.innerHTML= "NewBlock";
  newBlock.classList.add("block");
}
function sayHi(){
  console.log("Hi");
};
export {addBlocks, sayHi};