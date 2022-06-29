export default class Observable{
    #observer = new Array()
    addObserver(observer){
        this.#observer.push(observer)
    }
    removeObserver(observer){
        let observerIndex = this.#observer.findIndex((o) => o === observer)
        this.#observer.splice(observerIndex,1)
    }
    notify(something){
        this.#observer.forEach((observer) => observer.update(something))
    }
}