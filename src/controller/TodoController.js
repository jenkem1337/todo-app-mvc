export default class TodoController {
    #todoModel
    #todoCollection
    constructor(model, todoCollection){
        this.#todoModel = model
        this.#todoCollection = todoCollection
        this.#todoModel.addObserver(this.#todoCollection)
    }
    createNewTodo(todoText){
        this.#todoModel.createNewTodo(new Date().getTime(),todoText, false, new Date().toLocaleString(), new Date().toLocaleString())
    }
    updateTodoText(todoId, newTodoText){
        this.#todoModel.updateTodoText(todoId, newTodoText, new Date().toLocaleString())
    }
    updateCompletedState(todoId){
        this.#todoModel.updateCompletedState(todoId, new Date().toLocaleString())
    }
    deleteTodo(todoId){
        this.#todoModel.deleteTodo(todoId)
    }
}