export function validateTaskInput(text) {
  if (text.trim() === "") return "Task cannot be empty!";
  if (text.length > 50) return "Task must be under 50 characters!";
  return null;
}
