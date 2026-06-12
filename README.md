# Middleware-Private-Route-Protection
JWT Auth Middleware and Private Route Protection using Express.js and React

## What I Built
- JWT-based auth middleware for Express backend
- Protected backend API routes using middleware
- Private Route component in React for frontend protection

## How to Run

### Backend
cd backend && npm install && node server.js

### Frontend
cd frontend && npm install && npm run dev

## Test Credentials
Username: admin | Password: password123

## Key Concepts
- authMiddleware verifies JWT token before allowing access
- next() passes control to the next handler in chain
- PrivateRoute checks localStorage for token before rendering
