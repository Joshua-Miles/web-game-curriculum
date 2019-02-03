// Character.js

class Character extends GameObject {

    constructor(x, y, color){
        super(x, y)
        this.direction = false
        this.assets = `https://joshua-miles.github.io/web-game-curriculum/module-1/assets/${color}`
        this.element.src = `${this.assets}/static.gif`
        setInterval( () => {
            switch(this.direction){
                case 'right':
                    this.element.style.left = parseInt(this.element.style.left) + 1 + 'px'
                break;
                case 'left':
                    this.element.style.left = parseInt(this.element.style.left) - 1 + 'px'
                break;
                case 'up':
                    this.element.style.bottom = parseInt(this.element.style.bottom) + 1 + 'px'
                break;
                case 'down':
                    this.element.style.bottom = parseInt(this.element.style.bottom) - 1 + 'px'
                break;
            }
        }, 1)       
    }

    walkRight(){
        this.element.src = `${this.assets}/walkright.gif`
        this.direction = 'right'
    }

    walkLeft(){
        this.element.src = `${this.assets}/walkleft.gif`
        this.direction = 'left'
    }

    walkUp(){
        this.element.src = `${this.assets}/walkup.gif`
        this.direction = 'up'
    }

    walkDown(){
        this.element.src = `${this.assets}/walkdown.gif`
        this.direction = 'down'
    }


    stop(){
        this.element.src = `${this.assets}/static.gif`
        this.direction = false
    }

}
 