let tasks = [];
let currentId = 1;

export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) return res.status(404).json({ error: "Task not found" });

  res.status(200).json(task);
};

export const createTask = (req, res) => {
  const { text } = req.body;

  const newTask = {
    id: currentId++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks[index] = { ...tasks[index], ...req.body };
  res.status(200).json(tasks[index]);
};

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  const initial = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);

  if (tasks.length === initial)
    return res.status(404).json({ error: "Task not found" });

  res.status(204).send();
};
