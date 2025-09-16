# Docker Setup Guide

This project uses Docker Compose with separate configurations for local development and production deployment.

## 📁 Files Overview

- `docker-compose.yml` - Base configuration
- `docker-compose.override.yml` - Local development overrides (auto-loaded)
- `docker-compose.production.yml` - Production environment

## 🚀 Quick Start

### Local Development

```bash
# Start development environment (uses docker-compose.yml + docker-compose.override.yml)
docker-compose up --build
```

**Services:**

- Frontend: http://localhost:3000 (with hot reload)
- Backend: http://localhost:8000 (with auto-reload)
- Database: localhost:5432
- Mailcatcher: http://localhost:1080

### Production

```bash
# Start production environment
docker-compose -f docker-compose.production.yml up --build -d
```

**Services:**

- Frontend: http://localhost:80 (nginx)
- Backend: http://localhost:8000 (gunicorn)
- Database: Internal network only

## 🔧 Environment Configuration

### Required Environment Variables

Create a `.env` file in the root directory with:

```env
# Database
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
POSTGRES_PORT=5432

# Backend
SECRET_KEY=your_secret_key
FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=admin_password
ENVIRONMENT=local  # or production

# Docker Images
DOCKER_IMAGE_BACKEND=your-backend
DOCKER_IMAGE_FRONTEND=your-frontend
TAG=latest

# CORS
BACKEND_CORS_ORIGINS=http://localhost:3000,http://localhost:5173
FRONTEND_HOST=http://localhost:3000

# Domain (for production)
DOMAIN=your-domain.com
```

## 🏗️ Architecture Differences

### Local Development

- **Base**: `docker-compose.yml` (production-like base)
- **Overrides**: `docker-compose.override.yml` (development features)
- **Frontend**: Vite dev server with hot reload
- **Backend**: FastAPI with auto-reload
- **Database**: Exposed on port 5432
- **Mailcatcher**: For email testing
- **Volumes**: Source code mounted for live editing

### Production

- **Configuration**: `docker-compose.production.yml`
- **Frontend**: Nginx serving static files
- **Backend**: Gunicorn with multiple workers
- **Database**: Internal network only
- **Health Checks**: Built-in monitoring
- **Optimized**: Multi-stage builds, minimal images

## 🛠️ Development Workflow

### Starting Development

```bash
# Start all services (uses base + overrides)
docker-compose up --build

# Start specific services
docker-compose up db backend
```

### Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Viewing Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
```

## 🚀 Production Deployment

### Building for Production

```bash
# Build production images
docker-compose -f docker-compose.production.yml build

# Start production services
docker-compose -f docker-compose.production.yml up -d
```

### Production Monitoring

```bash
# Check service status
docker-compose -f docker-compose.production.yml ps

# View logs
docker-compose -f docker-compose.production.yml logs -f

# Check health
docker-compose -f docker-compose.production.yml exec backend curl http://localhost:8000/api/v1/utils/health-check/
```

## 🔍 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in docker-compose files
2. **Permission issues**: Check file permissions
3. **Environment variables**: Ensure .env file is properly configured
4. **Network issues**: Check Docker network configuration

### Useful Commands

```bash
# Rebuild specific service
docker-compose build backend

# Execute commands in running container
docker-compose exec backend bash

# Clean up Docker resources
docker system prune -a
```

## 📝 Notes

- Local development uses Docker Compose's automatic override loading
- `docker-compose.override.yml` is automatically loaded when running `docker-compose up`
- Production uses a completely separate configuration file
- Health checks ensure service reliability
- Environment-specific configurations are clearly separated
