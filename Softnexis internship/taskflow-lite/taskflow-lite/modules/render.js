export function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (tag) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[tag]));
}

export function renderTaskList(taskListElement, tasks) {
  taskListElement.innerHTML = "";

  if (tasks.length === 0) {
    taskListElement.innerHTML = `
      <li class="empty-state">
        <p>✨ Add your first task!</p>
      </li>
    `;
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <label>
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <span>${escapeHTML(task.text)}</span>
      </label>

      <div class="task-actions">
        <button class="delete-btn">🗑</button>
      </div>
    `;

    taskListElement.appendChild(li);
  });
}
