import ObservableEvent from "./event/ObservableEvent.js"
import TodoCompletedStatedChangedEvent from "./event/TodoCompletedStatedChangedEvent.js"
import TodoCreatedEvent from "./event/TodoCreatedEvent.js"
import TodoDeletedEvent from "./event/TodoDeletedEvent.js"
import TodoTextUpdatedEvent from "./event/TodoTextUpdatedEvent.js"

export default class Todo extends ObservableEvent{
    #id
    #todo
    #isCompleted
    #isCompletedBool
    #createdAt
    #updatedAt
    constructor(map){
        super(map)
    }
    #setTodo(todo){
        if(!todo) throw new Error('todo is null')
        this.#todo = todo         
    }
    #setIsCompleted(bool){
        if(bool===null) throw new Error('completed boolean is null')
        this.#isCompleted = bool
        this.#isCompletedBool = bool
    }
    #setId(id){
        if(!id) throw new Error('id is null')

        this.#id = id
    }
    #setCreatedAt(createdDate){
        if(!createdDate) throw new Error('create date is null')

        this.#createdAt = createdDate 
    }
    #setUpdatedAt(updatedDate){
        if(!updatedDate) throw new Error('update date is null')

        this.#updatedAt = updatedDate
    }
    createNewTodo(todoId, todo, isComplated, createdAt, updatedAt){
            this.#setId(todoId)
            this.#setTodo(todo)
            this.#setIsCompleted(isComplated)
            this.#setCreatedAt(createdAt)
            this.#setUpdatedAt(updatedAt)
            this.notify(new TodoCreatedEvent(todoId, todo, isComplated, createdAt, updatedAt))
    }
    updateTodoText(id,todoText, updatedAt){
        if(!todoText) throw new Error('todo is null')
        this.#todo = todoText        
        this.#setUpdatedAt(updatedAt)
        this.notify(new TodoTextUpdatedEvent(id, this.getTodo(), updatedAt))
    }
    updateCompletedState(id, updatedAt){
        if(!id) throw new Error('id is null')
        let bool = (this.#isCompleted === false) ? true : false
        this.#setIsCompleted(bool)
        this.#setUpdatedAt(updatedAt)
        this.notify(new TodoCompletedStatedChangedEvent(id, this.#isCompleted, updatedAt))
    }
    deleteTodo(id){
        if(!id) throw new Error('id is null')
        this.notify(new TodoDeletedEvent(id))
    }
    getTodo(){
        return this.#todo
    }
    getIsCompleted(){
        return this.#isCompleted ? 'todo has been done': 'todo has not been done'
    }
    getCreatedAt(){
        return this.#createdAt
    }
    getId(){
        return this.#id
    }
    getUpdatedAt(){
        return this.#updatedAt
    }
    getIsCompletedBool(){
        return this.#isCompletedBool
    }
}