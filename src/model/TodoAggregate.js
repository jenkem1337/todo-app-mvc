import Observable from "./Observable.js";

export default class TodoAggregate extends Observable {
    #todoItems
    constructor(){
        super()
        this.#todoItems = new Array()
    }
    addTodo(todoItem){
        this.#todoItems.push(todoItem)
        this.notify(this)
    }
    updateTodoText(todoId, updatedTodoText, updatedAt){
        this.#todoItems.map(todo => {
            if(todo.getId() === todoId){
                todo.setTodo(updatedTodoText)
                todo.setUpdatedAt(updatedAt) 
            }
        })
        this.notify(this)
    }
    updateTodoCompleteState(todoId, updatedAt){
        this.#todoItems.map(todo => {
            if(todo.getId() === todoId){
                this.#setTodoCompletedState(todo, updatedAt)
            }
        })
        this.notify(this)
    }
    deleteTodo(todoId){
        let todoIndex = this.#todoItems.findIndex(todo => todo.getId() === todoId )
        this.#todoItems.splice(todoIndex, 1)
        this.notify(this)
    }
    getTodoCollection(){
        return this.#todoItems
    }

    #setTodoCompletedState(todo, updatedAt){
        switch (todo.getIsCompletedBool()) {
            case true:
                todo.setIsCompleted(false)
                todo.setUpdatedAt(updatedAt) 
                break;
            
            case false:
                todo.setIsCompleted(true)
                todo.setUpdatedAt(updatedAt) 

            default:
                break;
        }
    }
}

