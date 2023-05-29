import { toDoTasks, doneTasks, handleTasksListItems } from "./main.js";
import { getPriorityNumber } from "./utils.js";

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
  const priorityType = priorityFormSelector.innerHTML;
  if (title.length > 25)
    alert(
      `task title must be at most 25 characters and you entered ${title.length} character!`
    );
  toDoTasks.push({
    id: Date.now(),
    title,
    priority: getPriorityNumber(priorityType),
  });
  handleTasksListItems();
  newTaskForm.classList.toggle("d-none");
  localStorage.setItem("tasks", JSON.stringify({toDoTasks, doneTasks}))
});
