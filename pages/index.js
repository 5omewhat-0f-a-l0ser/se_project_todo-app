import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4);

import {initialTodos, validationConfig} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidate from "../components/FormValidator.js";
import Section from '../utils/section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import TodoCounter from '../components/TodoCounter.js';

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEL = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEL.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEL.querySelector(".popup__close");
// const todoTemplate = document.querySelector("#todo-template"); -> remove
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");
todoCounter._updateText();

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;
    const id = uuidv4();

    const values = { name, date: new Date(dateInput), id };
    const todo = generateTodo(values);
    todosList.append(todo);

    addTodoPopup.close();
    addTodoForm.reset();
  },
});

addTodoPopup.setEventListeners();
//const openModal = (modal) => {
//  modal.classList.add("popup_visible");
//};

//const closeModal = (modal) => {
//  modal.classList.remove("popup_visible");
//};

// The logic in this function should all be handled in the Todo class.

function handleCheck(isCompleted) {
  todoCounter.updateCompleted(isCompleted);
}

function handleDelete(isCompleted) {
  todoCounter.updateCompleted(false);
}


const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  
// to be removed...  
//  const todoElement = todoTemplate.content;
//    .querySelector(".todo")
//    .cloneNode(true);
//  const todoNameEl = todoElement.querySelector(".todo__name");
//  const todoCheckboxEl = todoElement.querySelector(".todo__completed");
//  const todoLabel = todoElement.querySelector(".todo__label") 
//const todoDate = todoElement.querySelector(".todo__date");
//  const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");
//
//  todoNameEl.textContent = data.name;
//  todoCheckboxEl.checked = data.completed;
//
//  // Apply id and for attributes.
//  // The id will initially be undefined for new todos.
//  todoCheckboxEl.id = `todo-${data.id}`;
//  todoLabel.setAttribute("for", `todo-${data.id}`);
//
//  // If a due date has been set, parsing this it with `new Date` will return a
//  // number. If so, we display a string version of the due date in the todo.
//  const dueDate = new Date(data.date);
//  if (!isNaN(dueDate)) {
//    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
//      year: "numeric",
//      month: "short",
//      day: "numeric",
//    })}`;
//  }
//
//  todoDeleteBtn.addEventListener("click", () => {
//    todoElement.remove();
//  });
//
 return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
 }, 
 containerSelector: '.todos__list' //here
});  
section.renderItems(); 

addTodoButton.addEventListener("click", () => {
 // openModal(addTodoPopupEL);
 addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  //closeModal(addTodoPopupEL);
  addTodoPopup.close();
});

//addTodoForm.addEventListener("submit", (evt) => {
//  evt.preventDefault();
//  const name = evt.target.name.value;
//  const dateInput = evt.target.date.value;
//
//  // Create a date object and adjust for timezone
//  const date = new Date(dateInput);
//  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
//
//  const id = uuidv4();
//
//  const values = { name, date, id };
//  const todo = generateTodo(values);
//  todosList.append(todo);
// addTodoPopup.close();
//});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

//initialTodos.forEach((item) => {
//  const todo = generateTodo(item);
//  todosList.append(todo);
//});

const newTodoValidator = new FormValidate(validationConfig, addTodoForm);
newTodoValidator.enableValidation();