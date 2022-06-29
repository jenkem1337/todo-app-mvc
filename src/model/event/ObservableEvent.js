export default class ObservableEvent {
    #observer = new Array()
    #mapObj
    constructor(mapObj){
        this.#mapObj = mapObj
    }
    addObserver(observer){
        this.#observer.push(observer)
    }
    removeObserver(observer){
        let observerIndex = this.#observer.findIndex((o) => o === observer)
        this.#observer.splice(observerIndex,1)
    }
    notify(event){
        this.#observer.forEach((observer) => {
            if(this.#mapObj.has(event.constructor.name)){
                let command = this.#mapObj.get(event.constructor.name)
                command.setReceiver(observer)
                command.handleEvent(event)
            }
        })
    }

}