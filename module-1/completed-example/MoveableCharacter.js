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

    onCollision(object){
        if(object instanceof Character){
            switch(this.direction){
                case 'right':
                    this.x -= 5
                break; 
                case 'left':
                    this.x += 5
                break; 
                case 'up':
                    this.y -= 5
                break; 
                case 'down':
                    this.y += 5
                break; 
            }
            this.stop()
        }
    }

}