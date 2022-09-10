import TodoController from "./controller/TodoController.js";
import TodoView from "./view/TodoView.js";
import TodoAggregate from './model/TodoAggregate.js'
let todoAggregate = new TodoAggregate()
let todoController = new TodoController(todoAggregate)
let todoView = new TodoView(todoController)
todoAggregate.addObserver(todoView)

window.todoView = todoView

