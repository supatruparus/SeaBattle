let circle = {
    elem: document.querySelector('.circle'),
    class: 'circle',
    styleObject: {
        width: '340px',
        height: '100px',
        backgroundColor: 'yellow'
    },
    get style() {
        // console.log('Keys: ' + Object.keys(this.styleObject))
        // console.log(this.styleObject)
        // return this.styleObject
        
            },
    set style(value) {
        this.styleObject = SetProperties.call(this.styleObject, value)
        

        
        },
    add() {
        myScript.addBlocks(this.class)
    }
        
}

circle.style = {width: '300', height: '20px', position: 'absolute', top: '500px'}




    
