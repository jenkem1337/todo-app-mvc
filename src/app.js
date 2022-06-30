import TodoController from "./controller/TodoController.js";
import TodoCompletedStateChangedEventHandler from "./model/event/EventHandler/TodoCompletedStateChangedEventHandler.js";
import TodoCreatedEventHandler from "./model/event/EventHandler/TodoCreatedEventHandler.js";
import TodoDeletedEventHandler from "./model/event/EventHandler/TodoDeletedEvent.js";
import TodoTextUpdatedEventHandler from "./model/event/EventHandler/TodoTextUpdatedEventHandler.js";
import TodoCompletedStatedChangedEvent from "./model/event/TodoCompletedStatedChangedEvent.js";
import TodoCreatedEvent from "./model/event/TodoCreatedEvent.js";
import TodoDeletedEvent from "./model/event/TodoDeletedEvent.js";
import TodoTextUpdatedEvent from "./model/event/TodoTextUpdatedEvent.js";
import Todo from "./model/Todo.js";
import TodoCollection from "./model/TodoCollection.js";
import TodoView from "./view/TodoView.js";

let todoModel = new Todo(new Map([
    [TodoCreatedEvent.name, new TodoCreatedEventHandler()],
    [TodoDeletedEvent.name, new TodoDeletedEventHandler()],
    [TodoTextUpdatedEvent.name, new TodoTextUpdatedEventHandler()],
    [TodoCompletedStatedChangedEvent.name, new TodoCompletedStateChangedEventHandler()]
]))
let todoCollection = new TodoCollection()
let todoController = new TodoController(todoModel,todoCollection)
let todoView = new TodoView(todoController)
todoCollection.addObserver(todoView)

window.todoView = todoView

