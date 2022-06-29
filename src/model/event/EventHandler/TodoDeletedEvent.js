import EventHandler from "./EventHandler.js";

export default class TodoDeletedEventHandler extends EventHandler{
    #todoCollection
    setReceiver(reciver){
        this.#todoCollection = reciver
    }    
    handleEvent(event){
        this.#todoCollection.deleteTodo(event)
    }

}