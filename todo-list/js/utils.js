import { toDoTasks, doneTasks } from "./main.js";

export const getPriorityName = (num) => {
  return num == 0 ? "high" : num == 1 ? "medium" : "low";
};

export const getPriorityNumber = (str) => {
  return str == "High" ? 0 : str == "Middle" ? 1 : 2;
};

export const addTaskToDoneList = (e) => {
  const id = e.target.parentNode.parentNode.id;
  // search for task
  let targetTask, targetTaskIndex;
  for (let i = 0; i < toDoTasks.length; i++) {
    if (toDoTasks[i].id == id) {
      targetTask = toDoTasks[i];
      targetTaskIndex = i;
      break;
    }
  }
  toDoTasks.splice(targetTaskIndex, 1);
  doneTasks.push(targetTask);
  localStorage.setItem("tasks", JSON.stringify({toDoTasks, doneTasks}))
};

export const removeTask = (e) => {
  const id = e.target.parentNode.parentNode.id;
  const toDo =
    e.target.parentNode.parentNode.parentNode.classList.contains("todo-body");
  // search for task
  let targetTask, targetTaskIndex;
  for (let i = 0; i < toDoTasks.length; i++) {
    if (toDoTasks[i].id == id) {
      targetTask = toDoTasks[i];
      targetTaskIndex = i;
      break;
    }
  }
  if (toDo) toDoTasks.splice(targetTaskIndex, 1);
  else doneTasks.splice(targetTaskIndex, 1);
  localStorage.setItem("tasks", JSON.stringify({toDoTasks, doneTasks}))
};
