import { editTask } from "./utils.js";

const editTaskForm = document.querySelector(".edit-task-container");
const closeTaskFormBtn = document.querySelector(".form-edit-close-task");
const priorityFormSelector = document.querySelector(".input-edit-priority-btn");
const priorityFormOptionsDiv = document.querySelector(
  ".input-edit-priority-options"
);
const editTaskFormBtn = document.querySelector(".form-edit-task");

// handle close button
closeTaskFormBtn.addEventListener("click", () => {
  editTaskForm.classList.toggle("d-none");
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

// handle edit task button
editTaskFormBtn.addEventListener("click", (e) => {
  const id = e.target.parentNode.parentNode.id;
  var title = document.querySelector(".input-edit-title").value;
  const priority = priorityFormSelector.innerHTML;
  editTask(id, title, priority);
  editTaskForm.classList.toggle("d-none");
});
