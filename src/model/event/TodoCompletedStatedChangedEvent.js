export default class TodoCompletedStatedChangedEvent {
    constructor(id,completedState, updatedAt){
        this.todoId = id
        this.stateOfCompleted = completedState
        this.updatedAt = updatedAt
    }
}