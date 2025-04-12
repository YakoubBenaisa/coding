# Hackathon Frontend Template

A lightweight React frontend template designed for rapid development in hackathons. Built with React, Tailwind CSS, and minimal dependencies.
test
## Features

- 🔐 Authentication with JWT
- 🛡️ Protected routes
- 📝 Basic CRUD operations
- 🎨 Minimal UI with Tailwind CSS
- 🚀 Fast development setup

## Tech Stack

- React (Vite)
- React Router DOM for routing
- Zustand for state management
- Axios for API calls
- Tailwind CSS for styling
- React Auth Kit for authentication

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## API Integration

The template is configured to work with a Django backend. Update the API URL in `src/services/api.js` to match your backend:

```javascript
const API_URL = 'http://localhost:8000/api';
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── services/      # API services
├── store/         # Zustand stores
├── utils/         # Utility functions
└── layouts/       # Layout components
```

## Authentication

The template uses JWT token-based authentication. The token is stored in localStorage and automatically included in API requests.

## Development Guidelines

1. Keep components simple and focused
2. Use Tailwind CSS for styling
3. Handle loading and error states
4. Use the provided API service for backend communication
5. Follow the established project structure

## Backend API Requirements

The template expects the following API endpoints:

- POST /api/auth/login/
- POST /api/auth/register/
- GET /api/auth/user/
- GET /api/tasks/
- POST /api/tasks/
- PUT /api/tasks/:id/
- DELETE /api/tasks/:id/
# coding
# coding
