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

    newTodoValidator._resetValidation();

    addTodoPopup.close();
    addTodoForm.reset();

    todoCounter.updateTotal(true);
  },
});

addTodoPopup.setEventListeners();

function handleCheck(isCompleted) {
  todoCounter.updateCompleted(isCompleted);
  console.log(isCompleted);
}

function handleDelete(isCompleted) {
  if (isCompleted) {
    todoCounter.updateCompleted(false);
  }

  todoCounter.updateTotal(false);
}


const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  

 return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
 }, 
 containerSelector: '.todos__list' 
});  
section.renderItems(); 

addTodoButton.addEventListener("click", () => {
 addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
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

const newTodoValidator = new FormValidate(validationConfig, addTodoForm);
newTodoValidator.enableValidation();