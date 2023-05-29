import { getPriorityName, addTaskToDoneList, removeTask } from "./utils.js";

export let toDoTasks = [];
export let doneTasks = [];

export const handleTasksListItems = () => {
  const todoTasksList = document.querySelector(".todo-body");
  todoTasksList.innerHTML =
    toDoTasks
      .map(
        (el) =>
          `<div class="task priority-${getPriorityName(el.priority)}" id="${
            el.id
          }">
    <span class="title">${el.title}</span>
    <div class="priority">
      <span></span><span></span><span></span>
    </div>
    <div class="controlls">
      <i class="fa-solid fa-circle-check"></i>
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>`
      )
      .join("") || "No tasks yet!";

  const doneTasksList = document.querySelector(".done-body");
  doneTasksList.innerHTML =
    doneTasks
      .map(
        (el) =>
          `<div class="task priority-${getPriorityName(el.priority)}" id="${
            el.id
          }">
    <span class="title">${el.title}</span>
    <div class="priority">
      <span></span><span></span><span></span>
    </div>
    <div class="controlls">
      <i class="fa-solid fa-circle-check"></i>
      <i class="fa-solid fa-trash"></i>
    </div>
  </div>`
      )
      .join("") || "No tasks yet!";

  const checkButtons = document.querySelectorAll(".fa-circle-check");
  checkButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      addTaskToDoneList(e);
      handleTasksListItems();
    });
  });

  const removeButtons = document.querySelectorAll(".fa-trash");
  removeButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      removeTask(e);
      handleTasksListItems();
    });
  });
};

window.onload = () => {
  const storage = JSON.parse(localStorage.getItem("tasks"));
  toDoTasks = storage.toDoTasks || [];
  doneTasks = storage.doneTasks || [];
  handleTasksListItems();
};

// handle add new task float button
const addNewTaskBtn = document.querySelector(".add-task-btn");
addNewTaskBtn.addEventListener("click", () => {
  document.querySelector(".add-task-container").classList.toggle("d-none");
});
