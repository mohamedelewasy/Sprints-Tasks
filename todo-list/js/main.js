import { fillAllTasks, getFromLocalStorage } from "./utils.js";

// {id, title, priority, state}
export let tasks = [];

window.onload = () => {
  tasks = getFromLocalStorage() || [];
  fillAllTasks();
};

// handle add new task float button
const addNewTaskBtn = document.querySelector(".add-task-btn");
addNewTaskBtn.addEventListener("click", () => {
  document.querySelector(".add-task-container").classList.toggle("d-none");
});
