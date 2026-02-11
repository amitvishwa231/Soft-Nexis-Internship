# TaskFlow API 🚀

A secure RESTful backend service for task management built with **Node.js + Express**.

## Features
- CRUD Operations for Tasks
- Middleware: CORS, Helmet, Morgan Logging
- Rate Limiting
- Input Validation with Zod
- In-memory Data Store (DB-ready)

## Installation

```bash
git clone <your-repo-url>
cd taskflow-api
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|-----------------|
| GET    | /api/tasks       | Get all tasks   |
| GET    | /api/tasks/:id   | Get one task    |
| POST   | /api/tasks       | Create task     |
| PUT    | /api/tasks/:id   | Update task     |
| DELETE | /api/tasks/:id   | Delete task     |

## Example Task Payload

```json
{
  "text": "Finish backend API",
  "completed": false
}
```

## Testing

Use Postman or Thunder Client to test endpoints.

---

Made with ❤️ for TaskFlow Project
