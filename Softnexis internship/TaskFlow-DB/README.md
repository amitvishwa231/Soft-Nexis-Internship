# TaskFlow DB
MongoDB + Mongoose powered backend for task management.

## Setup
1. Install deps: `npm install`
2. Create `.env` using `.env.example`
3. Run: `npm run dev`

## API Endpoints
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`
- GET `/api/tasks/search/query?q=text`
- GET `/api/tasks/pagination/list?page=1&limit=10`
