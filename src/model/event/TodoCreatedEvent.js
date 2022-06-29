export default class TodoCreatedEvent {
    constructor(id, todoText, isCompleted, createdAt, updatedAt){
        this.todoId = id
        this.todo = todoText
        this.isCompleted = isCompleted
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}