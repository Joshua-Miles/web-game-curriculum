// GameObject.js

let gameObjects = []

class GameObject {

    constructor(x, y){
        this.element = document.createElement('img')
        this.element.style.position = 'absolute'
        this.x = x
        this.y = y
        this.width = 100
        this.height = 150
        
        document.body.append(this.element)
        gameObjects.push(this)

    }
    
    get x(){
        return parseInt(this.element.style.left)
    }
    
    set x(value){
        this.element.style.left = `${value}px`
    }
    
    get y(){
        return parseInt(this.element.style.bottom)
    }
    
    set y(value){
        this.element.style.bottom = `${value}px`
    }
    
    get width(){
        return parseInt(this.element.style.width)
    }
    
    set width(value){
         this.element.style.width = `${value}px`
    }
    
    get height(){
        return parseInt(this.element.style.height)
    }
    
    set height(value){
        this.element.style.height = `${value}px`
    }
    
    get leftSide(){
        return this.x
    }
    
    get rightSide(){
       	return this.leftSide + this.width
    }
    
    get bottom(){
        return this.y
    }
	
	get top(){
        return this.y + this.height
	}

}

setInterval( () => {
    gameObjects.forEach( one => {
        gameObjects.forEach( two => {
            if(one === two) return
            if(
                one.leftSide < two.rightSide 
                    &&
                one.rightSide > two.leftSide
                    &&
                one.top > two.bottom
                    &&
                one.bottom < two.top
            ){
                console.log(one, 'collided with', two)
            }
        })
    })
}, 1)