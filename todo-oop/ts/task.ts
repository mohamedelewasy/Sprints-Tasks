class Task {
  #id!: number;
  #title!: string;
  #priority!: number;
  #status!: string;
  errors: string[] = [];

  constructor(title: string, priority: number, status: string) {
    this.setId();
    this.setTitle(title);
    this.setPriority(priority);
    this.setStatus(status);
  }

  getId = () => {
    return this.#id;
  };
  getTitle = () => {
    return this.#title;
  };
  getPriority = () => {
    return this.#priority;
  };
  getStatus = () => {
    return this.#status;
  };
  setId = () => (this.#id = Date.now());
  setTitle = (title: string) => {
    title = title.trim();
    if (!(title.length > 0 && title.length < 26)) {
      this.errors.push("title must be between 1:25 characters");
      return;
    }
    this.#title = title;
  };
  setPriority = (priority: number) => {
    if (isNaN(priority) || priority < 0 || priority > 2) {
      this.errors.push("priority must be between 0:2");
      return;
    }
    this.#priority = priority;
  };
  setStatus = (status: string) => {
    this.#status = status === "done" ? "done" : "todo";
  };
}

abstract class TaskSystem {
  static #tasks: Task[] = [];
  static #taskTitles: Set<string> = new Set();

  static addTask = (task: Task) => {
    if (task.errors.length > 0) {
      alert(task.errors.join("\n"));
      return;
    } else if (TaskSystem.#taskTitles.has(task.getTitle())) {
      alert(`${task.getTitle()} is already exists`);
      return;
    }
    TaskSystem.#tasks.push(task);
    TaskSystem.#taskTitles.add(task.getTitle());
  };

  static getTaskIndex = (id: number): number => {
    for (let i = 0; i < TaskSystem.#tasks.length; i++)
      if (TaskSystem.#tasks[i].getId() === id) return i;
    return -1;
  };
  static sortTasks = () =>
    TaskSystem.#tasks.sort((a, b) => a.getPriority() - b.getPriority());
  static getTaskHtmlElement = (task: Task) => {
    return `<tr id="${task.getId()}">
    <td><input type="checkbox"></td>
    <td><input type="text" value="${task.getTitle()}"></td>
    <td><input type="number" value="${task.getPriority()}"></td>
    <td><input type="text" value="${task.getStatus()}"></td>
    <td><button class="edit-task">edit</button><button class="delete-task">delete</button></td>
  </tr>`;
  };

  static renderTaskControls = () => {
    const editBtns = document.querySelectorAll(".edit-task");
    const removeBtns = document.querySelectorAll(".delete-task");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e: Event) => {
        const row = (e.target as HTMLElement).parentNode
          ?.parentNode as HTMLElement;
        const title = (row.childNodes[3].childNodes[0] as HTMLInputElement)
          .value;
        const priority = (row.childNodes[5].childNodes[0] as HTMLInputElement)
          .value;
        const status = (row.childNodes[7].childNodes[0] as HTMLInputElement)
          .value;

        TaskSystem.updateTask(+row.id, title, +priority, status);
        TaskSystem.renderTaskTable();
      });
    });

    removeBtns.forEach((btn) => {
      btn.addEventListener("click", (e: Event) => {
        // remove several rows
        const ids: number[] = [];
        const tableBody = (
          (e.target as HTMLElement).parentNode?.parentNode as HTMLElement
        ).parentNode as HTMLElement;
        tableBody.childNodes.forEach((r) => {
          const row = r as HTMLTableRowElement;
          if ((row.childNodes[1].firstChild as HTMLInputElement).checked)
            ids.push(+row.id);
        });
        ids.map((id) => TaskSystem.removeTask(id));

        // remove target row
        if (ids.length === 0) {
          const row = (e.target as HTMLElement).parentNode
            ?.parentNode as HTMLElement;
          TaskSystem.removeTask(+row.id);
        }

        TaskSystem.renderTaskTable();
      });
    });
  };

  static renderTaskTable = () => {
    let elements: string[] = [];
    TaskSystem.sortTasks();
    TaskSystem.#tasks.forEach((task) =>
      elements.push(TaskSystem.getTaskHtmlElement(task))
    );
    const tableBodyElement = document.querySelector(
      ".table-body"
    ) as HTMLTableElement;
    tableBodyElement.innerHTML = elements.join("");

    TaskSystem.renderTaskControls();
  };

  static updateTask = (
    id: number,
    title: string,
    priority: number,
    status: string
  ) => {
    const newTask = new Task(title, priority, status);
    if (newTask.errors.length > 0) {
      alert(newTask.errors.join("\n"));
      return;
    }
    const task = TaskSystem.#tasks[TaskSystem.getTaskIndex(id)];
    TaskSystem.#taskTitles.delete(task.getTitle());
    task.setTitle(title);
    task.setPriority(priority);
    task.setStatus(status);
    TaskSystem.#taskTitles.add(title);
  };

  static removeTask = (id: number) => {
    const taskIndex = TaskSystem.getTaskIndex(id);
    const task = TaskSystem.#tasks[taskIndex];
    TaskSystem.#taskTitles.delete(task.getTitle());
    TaskSystem.#tasks.splice(taskIndex, 1);
  };

  static getTasks = () => {
    TaskSystem.sortTasks();
    const tasks: {
      id: number;
      title: string;
      priority: number;
      status: string;
    }[] = TaskSystem.#tasks.map((task) => {
      return {
        id: task.getId(),
        title: task.getTitle(),
        priority: task.getPriority(),
        status: task.getStatus(),
      };
    });
    return tasks;
  };
}

export { Task, TaskSystem };
