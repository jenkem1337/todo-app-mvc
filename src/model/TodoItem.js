export default class TodoItem{
    #id
    #todo
    #isCompleted
    #createdAt
    #updatedAt
    constructor(todoId,todo,isComplated,createdAt,updatedAt){
        this.setId(todoId)
        this.setTodo(todo)
        this.setIsCompleted(isComplated)
        this.setCreatedAt(createdAt)
        this.setUpdatedAt(updatedAt)

    }
    setTodo(todo){
        if(!todo) throw new Error('todo is null')
        this.#todo = todo         
    }
    setIsCompleted(bool){
        if(bool===null) throw new Error('completed boolean is null')
        this.#isCompleted = bool
    }
    setId(id){
        if(!id) throw new Error('id is null')

        this.#id = id
    }
    setCreatedAt(createdDate){
        if(!createdDate) throw new Error('create date is null')

        this.#createdAt = createdDate 
    }
    setUpdatedAt(updatedDate){
        if(!updatedDate) throw new Error('update date is null')

        this.#updatedAt = updatedDate
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
        return this.#isCompleted
    }
}