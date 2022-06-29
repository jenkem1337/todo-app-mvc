import ObserverView from "./ObserverView.js";

export default class TodoView extends ObserverView {
    #todoController
    #todos = new Array()
    constructor(todoController){
        super()
        this.#todoController = todoController
    }
    update(fromCollection){
        this.#todos = fromCollection
        this.#todos.reverse()
        this.render()
    }
    
    createNewTodo(event){
        event.preventDefault()
        let todoText = document.querySelector('#todo-text-input').value
        document.querySelector('#todo-text-input').value = ''
        this.#todoController.createNewTodo(todoText)
    }
    deleteTodo(id, event){
        event.preventDefault()
        this.#todoController.deleteTodo(id)
    }
    updateCompletedState(id,event){
        event.preventDefault()
        this.#todoController.updateCompletedState(id)
    }
    updateTodoText(id,event){
        event.preventDefault()
        let newTodoText = document.querySelector('#todo-text-input').value
        this.#todoController.updateTodoText(id, newTodoText)
    }
    render(){
        let view =   `
        <h1>Todo App</h1>
        <h3 style="color:red;" id="error-msg"></h3> 
        <input id="todo-text-input" type="text" placeholder="add new todo">
        <button onclick="todoView.createNewTodo(event)">Add New Todo</button>
        ${this.#todos.map(todo => {
            return `<p>Todo Id      => ${todo.getId()}</p>
               <p>Todo Text    => ${todo.getTodo()}</p>
               <p>Is Completed => ${todo.getIsCompleted()}</p>
               <p>Created At   => ${todo.getCreatedAt()}</p>
               <p>Updated At   => ${todo.getUpdatedAt()}</p>
               <button onclick="todoView.updateTodoText(${todo.getId()}, event)">Update Todo</button>
               <button onclick="todoView.updateCompletedState(${todo.getId()}, event)">Update Complated State</button>
               <button onclick="todoView.deleteTodo(${todo.getId()}, event)">Delete Todo</button>`}).join('')}
        `
        document.getElementById('root').innerHTML = view 

    }
}