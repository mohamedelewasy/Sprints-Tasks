import { Task, TaskSystem } from "./task";

const addTaskBtn = document.querySelector(".add-input") as HTMLButtonElement;
const titleInput = document.querySelector(".title-input") as HTMLInputElement;
const priorityInput = document.querySelector(
  ".priority-input"
) as HTMLInputElement;
const tableBody = document.querySelector(".table-body") as HTMLTableElement;
addTaskBtn.addEventListener("click", (e) => {
  const task = new Task(titleInput.value, +priorityInput.value, "todo");
  TaskSystem.addTask(task);
  TaskSystem.renderTaskTable();
  titleInput.value = "";
  priorityInput.value = "";
});
