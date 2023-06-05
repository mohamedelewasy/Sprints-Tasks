var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Task_id, _Task_title, _Task_priority, _Task_status, _a, _TaskSystem_tasks, _TaskSystem_taskTitles;
class Task {
    constructor(title, priority, status) {
        _Task_id.set(this, void 0);
        _Task_title.set(this, void 0);
        _Task_priority.set(this, void 0);
        _Task_status.set(this, void 0);
        this.errors = [];
        this.getId = () => {
            return __classPrivateFieldGet(this, _Task_id, "f");
        };
        this.getTitle = () => {
            return __classPrivateFieldGet(this, _Task_title, "f");
        };
        this.getPriority = () => {
            return __classPrivateFieldGet(this, _Task_priority, "f");
        };
        this.getStatus = () => {
            return __classPrivateFieldGet(this, _Task_status, "f");
        };
        this.setId = () => (__classPrivateFieldSet(this, _Task_id, Date.now(), "f"));
        this.setTitle = (title) => {
            title = title.trim();
            if (!(title.length > 0 && title.length < 26)) {
                this.errors.push("title must be between 1:25 characters");
                return;
            }
            __classPrivateFieldSet(this, _Task_title, title, "f");
        };
        this.setPriority = (priority) => {
            if (isNaN(priority) || priority < 0 || priority > 2) {
                this.errors.push("priority must be between 0:2");
                return;
            }
            __classPrivateFieldSet(this, _Task_priority, priority, "f");
        };
        this.setStatus = (status) => {
            __classPrivateFieldSet(this, _Task_status, status === "done" ? "done" : "todo", "f");
        };
        this.setId();
        this.setTitle(title);
        this.setPriority(priority);
        this.setStatus(status);
    }
}
_Task_id = new WeakMap(), _Task_title = new WeakMap(), _Task_priority = new WeakMap(), _Task_status = new WeakMap();
class TaskSystem {
}
_a = TaskSystem;
_TaskSystem_tasks = { value: [] };
_TaskSystem_taskTitles = { value: new Set() };
TaskSystem.addTask = (task) => {
    if (task.errors.length > 0) {
        alert(task.errors.join("\n"));
        return;
    }
    else if (__classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_taskTitles).has(task.getTitle())) {
        alert(`${task.getTitle()} is already exists`);
        return;
    }
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).push(task);
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_taskTitles).add(task.getTitle());
};
TaskSystem.getTaskIndex = (id) => {
    for (let i = 0; i < __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).length; i++)
        if (__classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks)[i].getId() === id)
            return i;
    return -1;
};
TaskSystem.sortTasks = () => __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).sort((a, b) => a.getPriority() - b.getPriority());
TaskSystem.getTaskHtmlElement = (task) => {
    return `<tr id="${task.getId()}">
    <td><input type="checkbox"></td>
    <td><input type="text" value="${task.getTitle()}"></td>
    <td><input type="number" value="${task.getPriority()}"></td>
    <td><input type="text" value="${task.getStatus()}"></td>
    <td><button class="edit-task">edit</button><button class="delete-task">delete</button></td>
  </tr>`;
};
TaskSystem.renderTaskControls = () => {
    const editBtns = document.querySelectorAll(".edit-task");
    const removeBtns = document.querySelectorAll(".delete-task");
    editBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            var _b;
            const row = (_b = e.target.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode;
            const title = row.childNodes[3].childNodes[0]
                .value;
            const priority = row.childNodes[5].childNodes[0]
                .value;
            const status = row.childNodes[7].childNodes[0]
                .value;
            TaskSystem.updateTask(+row.id, title, +priority, status);
            TaskSystem.renderTaskTable();
        });
    });
    removeBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            var _b, _c;
            // remove several rows
            const ids = [];
            const tableBody = ((_b = e.target.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode).parentNode;
            tableBody.childNodes.forEach((r) => {
                const row = r;
                if (row.childNodes[1].firstChild.checked)
                    ids.push(+row.id);
            });
            ids.map((id) => TaskSystem.removeTask(id));
            // remove target row
            if (ids.length === 0) {
                const row = (_c = e.target.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode;
                TaskSystem.removeTask(+row.id);
            }
            TaskSystem.renderTaskTable();
        });
    });
};
TaskSystem.renderTaskTable = () => {
    let elements = [];
    TaskSystem.sortTasks();
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).forEach((task) => elements.push(TaskSystem.getTaskHtmlElement(task)));
    const tableBodyElement = document.querySelector(".table-body");
    tableBodyElement.innerHTML = elements.join("");
    TaskSystem.renderTaskControls();
};
TaskSystem.updateTask = (id, title, priority, status) => {
    const newTask = new Task(title, priority, status);
    if (newTask.errors.length > 0) {
        alert(newTask.errors.join("\n"));
        return;
    }
    const task = __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks)[TaskSystem.getTaskIndex(id)];
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_taskTitles).delete(task.getTitle());
    task.setTitle(title);
    task.setPriority(priority);
    task.setStatus(status);
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_taskTitles).add(title);
};
TaskSystem.removeTask = (id) => {
    const taskIndex = TaskSystem.getTaskIndex(id);
    const task = __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks)[taskIndex];
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_taskTitles).delete(task.getTitle());
    __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).splice(taskIndex, 1);
};
TaskSystem.getTasks = () => {
    TaskSystem.sortTasks();
    const tasks = __classPrivateFieldGet(TaskSystem, _a, "f", _TaskSystem_tasks).map((task) => {
        return {
            id: task.getId(),
            title: task.getTitle(),
            priority: task.getPriority(),
            status: task.getStatus(),
        };
    });
    return tasks;
};
export { Task, TaskSystem };
