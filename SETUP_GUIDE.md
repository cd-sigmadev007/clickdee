# Dittofeed Development Environment Setup Guide

## Prerequisites Checklist

✅ **Node.js** - v22.19.0 (installed)
✅ **Yarn** - v4.1.1 (installed, matches project requirement)
✅ **Docker** - v28.4.0 (installed)
✅ **Docker Compose** - v2.39.2 (installed)
✅ **Dependencies** - node_modules already installed

⚠️ **Docker Daemon** - Currently NOT running (needs to be started)

## Required Services

Dittofeed requires the following services to run:

1. **PostgreSQL** - Main database (port 5432)
2. **ClickHouse** - Analytics database (ports 8123, 9000, 9009)
3. **Temporal** - Workflow engine (port 7233)
4. **Optional: Kafka** - Message broker (if using event streaming)
5. **Optional: MinIO** - S3-compatible blob storage
6. **Optional: MailHog** - SMTP testing (port 1025/8025)

## Setup Steps

### Step 1: Start Docker Daemon

```bash
# On macOS, start Docker Desktop or run:
open -a Docker
```

Wait until Docker is fully started (check with `docker ps`).

### Step 2: Start Docker Compose Services

```bash
# Start all required services (Postgres, ClickHouse, Temporal)
docker compose up -d

# Verify services are running
docker compose ps
```

### Step 3: Build and Bootstrap

```bash
# This will:
# - Build dashboard and emailo packages
# - Compile TypeScript for backend-lib and dashboard
# - Run the bootstrap script to set up the database
./dev-setup.sh
```

Or run manually:
```bash
yarn
yarn workspace emailo build
yarn workspace backend-lib tsc --build
yarn workspace dashboard tsc --build
yarn admin bootstrap
```

### Step 4: Start Development Servers

Open separate terminal windows/tabs for each service:

**Terminal 1 - Dashboard:**
```bash
yarn workspace dashboard dev
# Runs on http://localhost:3000
```

**Terminal 2 - API:**
```bash
yarn workspace api dev
# Runs on http://localhost:3001
```

**Terminal 3 - Worker (Optional):**
```bash
yarn workspace worker dev
```

## Verify Setup

### Check Docker Services
```bash
docker compose ps
```

You should see:
- `postgres` - Running
- `clickhouse-server` - Running
- `temporal` - Running

### Access Services

- **Dashboard**: http://localhost:3000
- **API**: http://localhost:3001
- **Temporal UI** (optional): http://localhost:8080 (run with `--profile temporal-ui`)
- **ClickHouse**: http://localhost:8123
- **MailHog** (optional): http://localhost:8025 (if using `--profile smtp`)

### Verify Database Access

```bash
# Access Postgres
./packages/backend-lib/scripts/local-pg-access.sh

# Access ClickHouse
./packages/backend-lib/scripts/local-ch-access.sh
```

## Common Issues & Solutions

### Issue: No users showing in workspace

**Solution**: Bootstrap events and start the worker:
```bash
BOOTSTRAP_WORKER=true BOOTSTRAP_EVENTS=true yarn admin bootstrap
yarn workspace worker dev
```

### Issue: Docker daemon not running

**Solution**: Start Docker Desktop on macOS, or start Docker service on Linux

### Issue: Port already in use

**Solution**: Stop any services using ports 3000, 3001, 5432, 8123, or 7233

### Issue: Build errors

**Solution**: Clean and rebuild:
```bash
yarn clean  # if available
yarn install
yarn workspace backend-lib tsc --build
```

## Optional Profiles

### Run with SMTP testing (MailHog)
```bash
docker compose --profile smtp up -d
```

### Run with OpenTelemetry
```bash
docker compose --profile otel up -d
START_OTEL=true yarn workspace dashboard dev
```

### Run Temporal UI
```bash
docker compose --profile temporal-ui up -d
# Access at http://localhost:8080
```

## Environment Variables

The project uses default values in `docker-compose.yaml`. For production, create a `.env` file with custom values:

```bash
DATABASE_USER=my-postgres-user
DATABASE_PASSWORD=my-postgres-password
CLICKHOUSE_USER=my-clickhouse-user
CLICKHOUSE_PASSWORD=my-clickhouse-password
SECRET_KEY=your-secret-key
```

## Additional Resources

- [Contributing Docs](https://docs.dittofeed.com/contributing/)
- [Running Locally Guide](https://docs.dittofeed.com/contributing/running-locally)
- [Docker Compose Deployment](https://docs.dittofeed.com/deployment/self-hosted/docker-compose)

## Quick Start Commands

```bash
# Full setup (one-time)
docker compose up -d
./dev-setup.sh

# Daily development
yarn workspace dashboard dev    # Terminal 1
yarn workspace api dev          # Terminal 2
yarn workspace worker dev       # Terminal 3 (optional)
```

## Testing

```bash
# Run tests for a specific package
yarn workspace backend-lib jest

# Run tests for a specific file
yarn test:file packages/backend-lib/src/resources.test.ts

# Lint a file
yarn workspace backend-lib eslint src/resources.test.ts --fix
```
