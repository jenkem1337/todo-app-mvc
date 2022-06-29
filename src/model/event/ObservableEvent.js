export default class ObservableEvent {
    #observer = new Array()
    addObserver(observer){
        this.#observer.push(observer)
    }
    removeObserver(observer){
        let observerIndex = this.#observer.findIndex((o) => o === observer)
        this.#observer.splice(observerIndex,1)
    }
    notify(something){
        if(this.#observer.length === 0) return;
        this.#observer.forEach((observer) => observer.handleEvent(something))
    }

}