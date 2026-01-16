# Dittofeed - Quick Start Guide

## ✅ Your Environment is Ready!

All required services are running and configured. You can now start developing.

## 🚀 Start Development Servers

Open **3 separate terminal windows** and run:

### Terminal 1: Dashboard (Frontend)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace dashboard dev
```
→ Access at **http://localhost:3000**

### Terminal 2: API (Backend)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace api dev
```
→ API running on **http://localhost:3001**

### Terminal 3: Worker (Optional - for background jobs)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace worker dev
```

## 📊 Current Status

| Component | Status | Port |
|-----------|--------|------|
| PostgreSQL | ✅ Running | 5432 |
| ClickHouse | ✅ Running | 8123, 9000, 9009 |
| Temporal | ✅ Running | 7233 |
| Node Modules | ✅ Installed | - |
| Build Artifacts | ✅ Present | - |

## 🔍 Verify Setup

```bash
# Check all services
docker compose ps

# Test database connections
./packages/backend-lib/scripts/local-pg-access.sh
./packages/backend-lib/scripts/local-ch-access.sh
```

## 📝 Common Commands

```bash
# Restart all services
docker compose restart

# View logs
docker compose logs -f [service-name]

# Stop all services
docker compose down

# Rebuild TypeScript (if needed)
yarn workspace backend-lib tsc --build
yarn workspace dashboard tsc --build
```

## 🆘 If You See No Users in Workspace

Bootstrap sample events:
```bash
BOOTSTRAP_WORKER=true BOOTSTRAP_EVENTS=true yarn admin bootstrap
yarn workspace worker dev
```

## 📚 More Information

- **Full Setup Guide**: See `SETUP_GUIDE.md`
- **Current Status**: See `SETUP_STATUS.md`
- **Contributing Docs**: https://docs.dittofeed.com/contributing/

---
**You're all set! Start the development servers above and begin coding.** 🎉
