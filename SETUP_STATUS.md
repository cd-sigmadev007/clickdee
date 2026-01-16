# Dittofeed Development Environment - Setup Status

## ✅ Completed Setup Steps

### 1. Prerequisites ✓
- **Node.js**: v22.19.0 ✅
- **Yarn**: v4.1.1 ✅ (matches project requirement)
- **Docker**: v28.4.0 ✅
- **Docker Compose**: v2.39.2 ✅

### 2. Dependencies ✓
- **Node modules**: Installed ✅
- **Build artifacts**: Present ✅
  - `packages/backend-lib/dist/` exists
  - `packages/dashboard/.next/` exists

### 3. Docker Services ✓
All required services are **running**:

| Service | Status | Port(s) | Container Name |
|---------|--------|---------|----------------|
| PostgreSQL | ✅ Running | 5432 | dittofeed-postgres-1 |
| ClickHouse | ✅ Running | 8123, 9000, 9009 | dittofeed-clickhouse-server-1 |
| Temporal | ✅ Running | 7233 | temporal |

### 4. Database Setup ✓
- **PostgreSQL**: Database `dittofeed` exists with tables created ✅
- **ClickHouse**: Service is running ✅
- Database schema appears to be initialized (tables present)

## 🚀 Next Steps: Starting Development Servers

You're ready to start developing! Open separate terminal windows/tabs and run:

### Terminal 1: Dashboard (Next.js Frontend)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace dashboard dev
```
**Access at**: http://localhost:3000

### Terminal 2: API (Backend Server)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace api dev
```
**Access at**: http://localhost:3001

### Terminal 3: Worker (Optional - for processing jobs)
```bash
cd /Users/adityaharsh/dittofeed
yarn workspace worker dev
```

## 🔍 Verify Setup

### Check Services Status
```bash
docker compose ps
```

### Test Database Access
```bash
# PostgreSQL
./packages/backend-lib/scripts/local-pg-access.sh

# ClickHouse
./packages/backend-lib/scripts/local-ch-access.sh
```

### Access Services in Browser
- **Dashboard**: http://localhost:3000 (after starting dashboard)
- **Temporal UI** (optional): http://localhost:8080 (requires `--profile temporal-ui`)
- **ClickHouse HTTP**: http://localhost:8123

## 📝 Important Notes

### Workspace Bootstrap
If you need to create a new workspace or reset:
```bash
yarn admin bootstrap --workspace-name "My Workspace" --workspace-domain "example.com"
```

To bootstrap with sample events:
```bash
BOOTSTRAP_WORKER=true BOOTSTRAP_EVENTS=true yarn admin bootstrap
```

### Environment Variables
The project uses default values from `docker-compose.yaml`. For customization, create a `.env` file in the root directory (currently not present - optional).

### Docker Compose Profiles
- **Default**: Postgres, ClickHouse, Temporal
- **SMTP testing**: `docker compose --profile smtp up -d` (adds MailHog)
- **OpenTelemetry**: `docker compose --profile otel up -d` (adds monitoring)
- **Temporal UI**: `docker compose --profile temporal-ui up -d` (adds UI at :8080)

## 🛠️ Useful Commands

### Development
```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f [service-name]

# Rebuild after code changes
yarn workspace backend-lib tsc --build
yarn workspace dashboard tsc --build
```

### Testing
```bash
# Run tests for a package
yarn workspace backend-lib jest

# Run specific test file
yarn test:file packages/backend-lib/src/resources.test.ts

# Lint and fix
yarn workspace backend-lib eslint src/resources.test.ts --fix
```

### Admin CLI
```bash
# View all admin commands
yarn admin --help

# Bootstrap clickhouse
yarn admin bootstrap-clickhouse

# Bootstrap blob storage
yarn admin bootstrap-blob-storage
```

## ⚠️ Common Issues & Solutions

### Port Conflicts
If ports 3000, 3001, 5432, 8123, or 7233 are already in use:
- Stop conflicting services
- Or modify ports in `docker-compose.yaml`

### Docker Daemon Not Running
```bash
# macOS
open -a Docker

# Verify
docker ps
```

### Database Not Initialized
If you see database errors:
```bash
# Run bootstrap
yarn admin bootstrap

# Or full setup
./dev-setup.sh
```

### No Users in Workspace
If workspace is empty:
```bash
# Bootstrap with sample events
BOOTSTRAP_WORKER=true BOOTSTRAP_EVENTS=true yarn admin bootstrap

# Start worker
yarn workspace worker dev
```

## 📚 Additional Resources

- **Setup Guide**: See `SETUP_GUIDE.md` for detailed instructions
- **Contributing Docs**: https://docs.dittofeed.com/contributing/
- **Running Locally**: https://docs.dittofeed.com/contributing/running-locally
- **Project README**: `README.md`

## ✨ Quick Start (All-in-One)

```bash
# 1. Ensure Docker is running
docker ps

# 2. Start services (if not already running)
docker compose up -d

# 3. Start development servers in separate terminals
# Terminal 1:
yarn workspace dashboard dev

# Terminal 2:
yarn workspace api dev

# Terminal 3 (optional):
yarn workspace worker dev
```

---
**Status**: ✅ Ready for development
**Last Updated**: $(date)