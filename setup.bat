@echo off
echo Setting up LIFEDROP project...

echo.
echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo Setup complete!
echo.
echo To start the project:
echo 1. Backend: cd backend && npm run dev
echo 2. Frontend: cd frontend && npm run dev
echo.
echo Don't forget to:
echo 1. Set up PostgreSQL database
echo 2. Copy backend/.env.example to backend/.env and configure
echo 3. Create GitHub repository and push code
pause