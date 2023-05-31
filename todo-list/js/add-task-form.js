import { addTask } from "./utils.js";

const newTaskForm = document.querySelector(".add-task-container");
const closeTaskFormBtn = document.querySelector(".form-close-task");
const priorityFormSelector = document.querySelector(".input-priority-btn");
const priorityFormOptionsDiv = document.querySelector(
  ".input-priority-options"
);
const addTaskFormBtn = document.querySelector(".form-add-task");

// handle close button
closeTaskFormBtn.addEventListener("click", () => {
  newTaskForm.classList.toggle("d-none");
});

// handle display priority list
priorityFormSelector.addEventListener("click", () => {
  priorityFormOptionsDiv.classList.toggle("d-none");
});

// handle priority options selections
priorityFormOptionsDiv.childNodes.forEach((option) => {
  option.addEventListener("click", () => {
    priorityFormSelector.innerHTML = option.innerHTML;
    priorityFormOptionsDiv.classList.toggle("d-none");
  });
});

// handle add new task button
addTaskFormBtn.addEventListener("click", () => {
  var title = document.querySelector(".input-title").value;
  const priority = priorityFormSelector.innerHTML;
  addTask(title, priority, "todo");
  newTaskForm.classList.toggle("d-none");
  document.querySelector(".input-title").value = "";
});
