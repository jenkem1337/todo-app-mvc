import EventHandler from "./EventHandler.js";

export default class TodoCompletedStateChangedEventHandler extends EventHandler{
    #todoCollection
    setReceiver(reciver){
        this.#todoCollection = reciver
    }    
    handleEvent(event){
        this.#todoCollection.updateTodoCompleteState(event)
    }

}