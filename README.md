# Todo App with MongoDB

A full-stack todo application built with React (frontend) and Express/MongoDB (backend).

## Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todo titles and descriptions
- ✅ MongoDB database for data persistence
- ✅ RESTful API backend
- ✅ Responsive React frontend

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Project Structure

```
trov-tver/
├── backend/
│   ├── server.js           # Express API server
│   ├── schema.js           # MongoDB Todo schema
│   ├── config/
│   │   └── dbconnect.js    # Database connection
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styles
│   │   └── setupProxy.js   # API proxy config
│   ├── public/
│   └── package.json
├── start-dev.ps1           # Start both servers
├── stop-dev.ps1            # Stop all servers
├── test.ps1                # Comprehensive test suite
└── README.md
```

## Quick Start

### 1. Setup Environment

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=mongodb://localhost:27017/todoapp
PORT=3001
```

### 2. Install Dependencies

```powershell
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Start Application

```powershell
# From root directory
.\start-dev.ps1
```

This will:
- Start the backend server on port 3001
- Start the frontend server on port 3000
- Automatically open your browser to http://localhost:3000

### 4. Stop Application

```powershell
.\stop-dev.ps1
```

## Manual Start

If you prefer to start servers manually:

```powershell
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm start
```

## Testing

Run the comprehensive test suite:

```powershell
.\test.ps1
```

This tests:
- Backend API endpoints
- CRUD operations
- Data validation
- Error handling
- Server connectivity
- Frontend-backend integration

## API Endpoints

| Method | Endpoint           | Description          |
|--------|-------------------|----------------------|
| GET    | /api/health       | Server health check  |
| GET    | /api/todos        | Get all todos        |
| GET    | /api/todos/:id    | Get single todo      |
| POST   | /api/todos        | Create new todo      |
| PUT    | /api/todos/:id    | Update todo          |
| DELETE | /api/todos/:id    | Delete todo          |

### Request/Response Examples

**Create Todo:**
```json
POST /api/todos
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

**Update Todo:**
```json
PUT /api/todos/:id
{
  "completed": true
}
```

## Technologies

### Backend
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- Cors - Cross-origin support
- dotenv - Environment configuration

### Frontend
- React - UI library
- Create React App - Build tooling
- Fetch API - HTTP requests

## Development Scripts

### Backend (`backend/package.json`)
- `npm start` - Start server (production)
- `npm run dev` - Start with nodemon (development)

### Frontend (`frontend/package.json`)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Database Schema

Todo Model:
```javascript
{
  title: String (required),
  description: String (default: ""),
  completed: Boolean (default: false),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Troubleshooting

### Port Already in Use
```powershell
# Stop all Node processes
.\stop-dev.ps1
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGO_URI in `.env` file
- Verify database permissions

### Frontend Not Loading
- Wait 30-60 seconds for initial compilation
- Clear browser cache (Ctrl+Shift+R)
- Check backend is running at http://localhost:3001/api/health

### Cannot Delete Todos
- Ensure you're using the latest code (MongoDB uses `_id` not `id`)
- Refresh browser after code changes
- Check browser console for errors

## Production Build

### Backend
```powershell
cd backend
npm start
```

### Frontend
```powershell
cd frontend
npm run build
# Serve the build folder with a static server
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly with `.\test.ps1`
5. Submit a pull request

## License

MIT

## Support

For issues or questions:
- Check the troubleshooting section
- Run `.\test.ps1` to diagnose problems
- Review browser console and terminal logs