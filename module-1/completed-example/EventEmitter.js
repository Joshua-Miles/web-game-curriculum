// Event Emitter.js

class EventEmitter {
    
	constructor(){
        this.listeners = []
	}    
    
    on(event, callback){
        this.listeners.push({
            event: event,
            callback: callback
        })
    } 
    
    emit(event, payload){
        let capitalizedEvent = event.charAt(0).toUpperCase() + event.substr(1)
        let lifecycleMethodName = `on${capitalizedEvent}`
        if(typeof this[lifecycleMethodName]){
            this[lifecycleMethodName](payload)
        }
        this.listeners.forEach( listener => {
            if(listener.event == event){
                listener.callback(payload)
            }
        })
    }
    
}