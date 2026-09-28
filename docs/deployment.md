# AAROH Production Deployment Guide

> **Problem Statement 26096:** *Digital Heritage Archive for Memorials, Manuscripts & Ambedkar: AI-Powered Institutional Archive and Audio-Visual Knowledge Platform.*

This guide provides step-by-step instructions for deploying AAROH to **GitHub**, **Vercel**, and **Institutional Kiosk Hardware**.

---

## 1. Preparing the GitHub Repository

The entire `AAROH Final Version` folder is self-contained and pre-configured as a complete Git repository.

### Initializing Git & Pushing to GitHub
Open your terminal in `AAROH Final Version`:

```bash
cd "C:\Users\dhanraz'\Desktop\AAROH Final Version"

# Initialize repository
git init

# Add all files (the preconfigured .gitignore excludes node_modules and .env)
git add .

# Create initial commit
git commit -m "feat: initial commit of AAROH production release (Problem Statement 26096)"

# Link to your remote GitHub repository
git remote add origin https://github.com/<your-username>/aaroh-archive.git
git branch -M main
git push -u origin main
```

### Git LFS for Model Weights (Recommended)
The LoRA weights in `content/aaroh_qwen3_final/adapter_model.safetensors` are 83.3 MB (under GitHub's 100 MB hard limit, but eligible for Git LFS):
```bash
git lfs install
git lfs track "*.safetensors"
git add .gitattributes
git commit -m "chore: track large adapter weights with Git LFS"
git push
```

---

## 2. Deploying Frontend to Vercel

AAROH includes a native `vercel.json` configured for zero-config Vite deployments.

### Automatic GitHub Integration (Recommended)
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select your `aaroh-archive` repository.
4. Vercel automatically reads `vercel.json`:
   - **Framework Preset:** Vite
   - **Build Command:** `npm --prefix frontend run build`
   - **Output Directory:** `frontend/dist`
5. Click **Deploy**.

### Manual CLI Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel --prod
```

---

## 3. Deploying the AI Backend (Optional)

The backend provides real-time neural inference and search grounding via FastAPI:

### Local Production Server
```bash
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Docker Containerization (Dockerfile)
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## 4. Museum Kiosk & Smart-Display Setup

For interactive exhibitions, touchscreen kiosks, and museum installations:

### Windows Kiosk Mode (Edge / Chrome)
Launch Google Chrome or Microsoft Edge in full-screen app mode:
```cmd
chrome.exe --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 "http://localhost:5173"
```

### Key Kiosk Characteristics in AAROH:
- **Touch Responsiveness:** High-contrast tap feedback, expanded hit targets for fingers.
- **Scrollbar Suppression:** Built-in CSS hides visual scrollbars while keeping touch dragging intuitive.
- **Resilient Offline Mode:** The complete 85-artifact database, chronological timeline, digital library, and D3 map render client-side without internet connectivity.
