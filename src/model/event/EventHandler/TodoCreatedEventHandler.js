import EventHandler from "./EventHandler.js";

export default class TodoCreatedEventHandler extends EventHandler{
    #todoCollection
    setReceiver(reciver){
        this.#todoCollection = reciver
    }    
    handleEvent(event){
        this.#todoCollection.addTodo(event)
    }
}