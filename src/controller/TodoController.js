import TodoAggregate from "../model/TodoAggregate.js"
import TodoItem from "../model/TodoItem.js"

export default class TodoController {
    #todoAggregate
    constructor(todoAggregate){
        if(todoAggregate instanceof TodoAggregate){
            this.#todoAggregate = todoAggregate
        }
    }
    createNewTodo(todoText){
        let todoItem = new TodoItem(new Date().getTime(),todoText, false, new Date().toLocaleString(), new Date().toLocaleString())
        this.#todoAggregate.addTodo(todoItem)
    }
    updateTodoText(todoId, newTodoText){
        this.#todoAggregate.updateTodoText(todoId, newTodoText, new Date().toLocaleString())
    }
    updateCompletedState(todoId){
        this.#todoAggregate.updateTodoCompleteState(todoId, new Date().toLocaleString())
    }
    deleteTodo(todoId){
        this.#todoAggregate.deleteTodo(todoId)
    }
}