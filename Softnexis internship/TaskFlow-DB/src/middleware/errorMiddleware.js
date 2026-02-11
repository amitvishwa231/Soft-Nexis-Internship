export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err.message);

  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid Task ID" });
  }

  res.status(500).json({ error: "Database operation failed" });
};
