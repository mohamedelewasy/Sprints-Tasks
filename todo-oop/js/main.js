import { Task, TaskSystem } from "./task.js";
const addTaskBtn = document.querySelector(".add-input");
const titleInput = document.querySelector(".title-input");
const priorityInput = document.querySelector(".priority-input");
const tableBody = document.querySelector(".table-body");
addTaskBtn.addEventListener("click", (e) => {
    const task = new Task(titleInput.value, +priorityInput.value, "todo");
    TaskSystem.addTask(task);
    TaskSystem.renderTaskTable();
    titleInput.value = "";
    priorityInput.value = "";
});
