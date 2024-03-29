import ObserverView from "./ObserverView.js";

export default class TodoView extends ObserverView {
    #todoController
    #state
    constructor(todoController){
        super()
        this.#todoController = todoController
        this.#state = {
            todos: new Array(),
        }
        this.#getInitialHTMLView()
    }
    update(entity){

        this.#state.todos = entity.getTodoCollection()
        this.bindElement(() => 'Todo Length ' + this.#state.todos.length, 'todo-list-length')
        
        this.bindElement(() => {
            return this.#state.todos.map(todo => {
                if(!todo.getIsCompletedBool()){
                    return `<p>Todo Id      => ${todo.getId()}</p>
                    <p>Todo Text    => ${todo.getTodo()}</p>
                    <p>Is Completed => ${todo.getIsCompleted()}</p>
                    <p>Created At   => ${todo.getCreatedAt()}</p>
                    <p>Updated At   => ${todo.getUpdatedAt()}</p>
                    <button onclick="todoView.updateTodoText(${todo.getId()}, event)">Update Todo</button>
                    <button onclick="todoView.updateCompletedState(${todo.getId()}, event)">Update Complated State</button>
                    <button onclick="todoView.deleteTodo(${todo.getId()}, event)">Delete Todo</button>`
                }else {
                    return `<p>Todo Id      => ${todo.getId()}</p>
                    <p>Todo Text    => ${todo.getTodo()}</p>
                    <p>Is Completed => ${todo.getIsCompleted()}</p>
                    <p>Created At   => ${todo.getCreatedAt()}</p>
                    <p>Updated At   => ${todo.getUpdatedAt()}</p>
                    <button onclick="todoView.updateTodoText(${todo.getId()}, event)" disabled>Update Todo</button>
                    <button onclick="todoView.updateCompletedState(${todo.getId()}, event)" >Update Complated State</button>
                    <button onclick="todoView.deleteTodo(${todo.getId()}, event)">Delete Todo</button>`
    
                }
                })
        }, 'todo-list')
         
    }
    
    createNewTodo(event){
        try {
            event.preventDefault()
            let todoText = document.querySelector('#todo-text-input').value
            document.querySelector('#todo-text-input').value = ''
            this.#todoController.createNewTodo(todoText)
        } catch (error) {
            document.querySelector('#error-msg').innerHTML = error.message
            setTimeout(() => {
                document.querySelector('#error-msg').style.display = "none";
            }, 5000)

        }
    }
    deleteTodo(id, event){
        try {
            event.preventDefault()
            this.#todoController.deleteTodo(id)
    
        } catch (error) {
            document.querySelector('#error-msg').innerHTML = error.message
            setTimeout(() => {
                document.querySelector('#error-msg').style.display = "none";
            }, 5000)

        }
    }
    updateCompletedState(id,event){
        try {
            event.preventDefault()
            this.#todoController.updateCompletedState(id)
    
        } catch (error) {
            document.querySelector('#error-msg').innerHTML = error.message
            setTimeout(() => {
                document.querySelector('#error-msg').style.display = "none";
            }, 5000)

        }
    }
    updateTodoText(id,event){
        try {
            event.preventDefault()
            let newTodoText = document.querySelector('#todo-text-input').value
            this.#todoController.updateTodoText(id, newTodoText)
    
        } catch (error) {
            document.querySelector('#error-msg').innerHTML = error.message
            setTimeout(() => {
                document.querySelector('#error-msg').style.display = "none";
            }, 5000)

        }
    }

    bindElement(cb, element){
        document.querySelector(`[binding-${element}]`).innerHTML = cb()
    }

    #getInitialHTMLView(){
        let viewTemplate =   `
        <h1>Todo App</h1>
        <h3 style="color:red;" id="error-msg" binding-error></h3>
        <h3 binding-todo-list-length></h3>
        <input id="todo-text-input" value="" type="text" placeholder="add new todo or update">
        <button onclick="todoView.createNewTodo(event)">Add New Todo</button>
        <div binding-todo-list></div>
        `
        document.getElementById('root').innerHTML = viewTemplate

    }
}