import EventHandler from "./EventHandler.js";

export default class TodoTextUpdatedEventHandler extends EventHandler{
    #todoCollection
    setReceiver(reciver){
        this.#todoCollection = reciver
    }    
    handleEvent(event){
        this.#todoCollection.updateTodoText(event)
    }

}