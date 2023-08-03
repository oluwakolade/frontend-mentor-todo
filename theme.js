const header = document.querySelector("header");
const lightIcon = document.querySelector(".sun-icon");
const darkIcon = document.querySelector(".moon-icon");
const buttonContainer = document.querySelector(".btn-container");
const button = document.querySelector(".input-btn");
const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-container");
const todo = document.querySelector(".todo");
const checkbox = document.querySelector(".todo-check-btn");
const selectTodoMode = document.querySelector(".select-todo-mode");
const body = document.querySelector("body");

lightIcon.addEventListener('click', function(){

lightIcon.classList.add("hide");
darkIcon.classList.remove("hide");
body.classList.toggle("light");
header.classList.toggle("light-header");
button.classList.toggle("light");
todoInput.classList.toggle("light");
todoContainer.classList.toggle("light");
todoContainer.classList.toggle("light-ts");
// todo.classList.toggle("light");
// checkbox.classList.toggle("light");
selectTodoMode.classList.toggle("light");
});

darkIcon.addEventListener('click', function(){

    lightIcon.classList.remove("hide");
    darkIcon.classList.add("hide");
    body.classList.toggle("light");
    header.classList.toggle("light-header");
    button.classList.toggle("light");
    todoInput.classList.toggle("light");
    todoContainer.classList.toggle("light");
    todoContainer.classList.toggle("light-ts");
    // todo.classList.toggle("light");
    // checkbox.classList.toggle("light");
    selectTodoMode.classList.toggle("light");
    });

