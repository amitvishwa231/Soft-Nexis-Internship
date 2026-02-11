import { loadTasks, saveTasks } from "./modules/storage.js";
import { renderTaskList } from "./modules/render.js";
import { validateTaskInput } from "./modules/validation.js";

let tasks = loadTasks();
let currentFilter = "all";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const errorMsg = document.getElementById("error-msg");

const taskList = document.getElementById("task-list");
const counter = document.getElementById("task-counter");

function createTask(text) {
  return {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
}

function updateStats() {
  counter.textContent = `Total Tasks: ${tasks.length}`;
}

function getFilteredTasks() {
  if (currentFilter === "active")
    return tasks.filter(t => !t.completed);

  if (currentFilter === "completed")
    return tasks.filter(t => t.completed);

  return tasks;
}

function renderApp() {
  renderTaskList(taskList, getFilteredTasks());
  updateStats();
}

renderApp();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const error = validateTaskInput(input.value);

  if (error) {
    errorMsg.textContent = error;
    return;
  }

  errorMsg.textContent = "";

  tasks.push(createTask(input.value));
  saveTasks(tasks);

  input.value = "";
  renderApp();
});

taskList.addEventListener("click", (e) => {
  const taskElement = e.target.closest(".task");
  if (!taskElement) return;

  const taskId = Number(taskElement.dataset.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Delete this task?")) {
      tasks.splice(taskIndex, 1);
      saveTasks(tasks);
      renderApp();
    }
  }

  if (e.target.type === "checkbox") {
    tasks[taskIndex].completed = e.target.checked;
    saveTasks(tasks);
    renderApp();
  }
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    renderApp();
  });
});
