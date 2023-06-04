import { tasks } from "./main.js";

let taskTitles = new Set();

const searchForTaskIndex = (id) => {
  let targetTaskIndex;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      targetTaskIndex = i;
      break;
    }
  }
  return targetTaskIndex;
};

const getTaskIdFromEventParent = (event) => {
  return event.target.parentNode.parentNode.id;
};

const getPriorityNumber = (priority) =>{
  return priority === 'high' ? 0 : (priority === 'middle' ? 1 : 2)
}

export const addTask = (title, priority, state) => {
  if (!isValidTitle(title)) return;
  tasks.push({
    id: Date.now(),
    title: title.trim(),
    priority: getPriorityNumber(priority.toLowerCase()),
    state,
  });
  fillAllTasks();
  updateLocalStorage();
};

const addTaskToDone = (id) => {
  const taskIndex = searchForTaskIndex(id);
  tasks[taskIndex].status = "done";
  fillAllTasks();
  updateLocalStorage();
};

export const editTask = (id, title, priority) => {
  if (!isValidTitle(title)) return;
  const taskIndex = searchForTaskIndex(id);
  tasks[taskIndex].title = title.trim();
  tasks[taskIndex].priority = getPriorityNumber(priority.toLowerCase());
  fillAllTasks();
  updateLocalStorage();
};

const deleteTask = (id) => {
  const taskIndex = searchForTaskIndex(id);
  tasks.splice(taskIndex, 1);
  fillAllTasks();
  updateLocalStorage();
};

const isValidTitle = (title) => {
  title = title.trim();
  if (!(title.length > 0 && title.length < 26)) {
    alert(
      `task title must be between 1:25 characters and you entered ${title.length} character!`
    );
    return false;
  }
  if(taskTitles.has(title)){
    alert(`${title} is already exists`)
    return false;
  }
  return true;
};

export const updateLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  taskTitles = new Set(tasks.map(el=>el.title))
  return tasks
};

const getTaskHtmlElement = (el) => {
  return `<div class="task priority-${el.priority}" id="${el.id}">
  <span class="title">${el.title}</span>
  <div class="priority">
    <span></span><span></span><span></span>
  </div>
  <div class="controlls">
    <i class="fa-solid fa-circle-check"></i>
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
  </div>
  </div>`;
};

export const fillAllTasks = () => {
  tasks.sort((a,b)=>a.priority-b.priority)
  const todoTasksList = document.querySelector(".todo-body");
  const doneTasksList = document.querySelector(".done-body");

  const todoTasksListHtmlElements = [];
  const doneTasksListHtmlElements = [];

  tasks.map((task) => {
    if (task.status == "done")
      doneTasksListHtmlElements.push(getTaskHtmlElement(task));
    else todoTasksListHtmlElements.push(getTaskHtmlElement(task));
  });

  todoTasksList.innerHTML =
    todoTasksListHtmlElements.join("") || "No tasks yet!";
  doneTasksList.innerHTML =
    doneTasksListHtmlElements.join("") || "No tasks yet!";

  const checkButtons = document.querySelectorAll(".fa-circle-check");
  checkButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      addTaskToDone(getTaskIdFromEventParent(e));
    });
  });

  const editButtons = document.querySelectorAll(".fa-pen-to-square");
  editButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = e.target.parentNode.parentNode.id;
      const editForm = document.querySelector(".edit-task-container");
      editForm.setAttribute("id", id);
      document.querySelector(".edit-task-container").classList.toggle("d-none");
    });
  });

  const removeButtons = document.querySelectorAll(".fa-trash");
  removeButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      deleteTask(getTaskIdFromEventParent(e));
    });
  });
};
