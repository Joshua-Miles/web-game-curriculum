// MoveableCharacter.js

class MoveableCharacter extends Character {

    constructor(x, y, color){
        super(x, y, color)
        
        document.addEventListener('keydown', (e) => {
            if(this.direction) return
            switch(e.key){
                case 'ArrowRight':
                    this.walkRight()
                break;
                case 'ArrowLeft':
                    this.walkLeft()
                break;
                case 'ArrowUp':
                    this.walkUp()
                break;
                case 'ArrowDown':
                    this.walkDown()
                break;
            }
        })
        
        document.addEventListener('keyup', () => {
            this.stop()
        })
    }

}