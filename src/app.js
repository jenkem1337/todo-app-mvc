import TodoController from "./controller/TodoController.js";
import Todo from "./model/Todo.js";
import TodoCollection from "./model/TodoCollection.js";
import TodoView from "./view/TodoView.js";

let todoModel = new Todo()
let todoCollection = new TodoCollection()
let todoController = new TodoController(todoModel,todoCollection)
let todoView = new TodoView(todoController)
todoCollection.addObserver(todoView)

window.todoView = todoView
todoView.render()

