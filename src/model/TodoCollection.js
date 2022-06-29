import TodoCompletedStatedChangedEvent from "./event/TodoCompletedStatedChangedEvent.js";
import TodoCreatedEvent from "./event/TodoCreatedEvent.js";
import TodoDeletedEvent from "./event/TodoDeletedEvent.js";
import TodoTextUpdatedEvent from "./event/TodoTextUpdatedEvent.js";
import Observable from "./Observable.js";
import Todo from "./Todo.js";

export default class TodoCollection extends Observable {
    #todoCollection
    constructor(){
        super()
        this.#todoCollection = new Array()
    }
    addTodo(TodoCreatedEvent){
        this.#todoCollection.push({
            id:TodoCreatedEvent.todoId, 
            todoText:TodoCreatedEvent.todo, 
            isCompleted: TodoCreatedEvent.isCompleted,
            createdAt: TodoCreatedEvent.createdAt,
            updatedAt: TodoCreatedEvent.updatedAt
        })
        this.notify(this.getTodoCollection())
    }
    updateTodoText(TodoTextUpdatedEvent){
        this.#todoCollection.map(todo => {
            if(todo.id === TodoTextUpdatedEvent.todoId){
                todo.todoText = TodoTextUpdatedEvent.todo
                todo.updatedAt = TodoTextUpdatedEvent.updatedAt
            }
        })
        this.notify(this.getTodoCollection())
    }
    updateTodoCompleteState(TodoCompletedStatedChangedEvent){
        this.#todoCollection.map(todo => {
            if(todo.id === TodoCompletedStatedChangedEvent.todoId){
                todo.isCompleted = TodoCompletedStatedChangedEvent.stateOfCompleted
                todo.updatedAt = TodoCompletedStatedChangedEvent.updatedAt
            }
        })
        this.notify(this.getTodoCollection())
    }
    deleteTodo(TodoDeletedEvent){
        let todoIndex = this.#todoCollection.findIndex(todo => todo.id === TodoDeletedEvent.todoId )
        this.#todoCollection.splice(todoIndex, 1)
        this.notify(this.getTodoCollection())
    }
    getTodoCollection(){
        let todoDomainCollection = new Array()
        this.#todoCollection.forEach(todo => {
            let todoDomain = new Todo()
            todoDomain.createNewTodo(
                todo.id,
                todo.todoText,
                todo.isCompleted,
                todo.createdAt,
                todo.updatedAt
            )
            todoDomainCollection.push(todoDomain)
        })
        return todoDomainCollection
    }
}

