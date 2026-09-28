@echo off
echo ===================================================
echo Starting AAROH Development Environment
echo ===================================================
echo Starting FastAPI Backend on http://localhost:8000
start "AAROH Backend (FastAPI)" cmd /k "cd /d %~dp0..\backend && python -m uvicorn main:app --reload --port 8000"

echo Starting Vite Frontend on http://localhost:5173
start "AAROH Frontend (Vite)" cmd /k "cd /d %~dp0..\frontend && npm run dev"

echo AAROH services initiated. Press any key to close this launcher.
pause
