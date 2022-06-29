export default class TodoTextUpdatedEvent {
    constructor(todoId, todoText, updatedAt){
        this.todoId = todoId
        this.todo = todoText
        this.updatedAt = updatedAt
    }
}