# Full-Stack FastAPI + SolidJS Application

A modern full-stack web application built with **FastAPI** (Python backend) and **SolidJS** (TypeScript frontend) using **TanStack Start**  and **Park UI** for beautiful, accessible components.

## 🚀 Features

- **Backend**: FastAPI with PostgreSQL, SQLModel, Alembic migrations
- **Frontend**: SolidJS with TanStack Router
- **UI**: Park UI components with Panda CSS for styling
- **Theme**: Dark/Light mode toggle with persistent preferences
- **Authentication**: JWT-based authentication system
- **Database**: PostgreSQL with automatic migrations
- **Development**: Hot reload, TypeScript, linting, formatting
- **Docker**: Complete containerized setup

## 🏗️ Architecture

```
├── backend/                 # FastAPI Python backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── core/           # Configuration, database, security
│   │   ├── models.py       # SQLModel database models
│   │   └── crud.py         # Database operations
│   ├── alembic/            # Database migrations
│   └── tests/              # Backend tests
├── frontend/               # SolidJS TypeScript frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── features/       # Feature-based modules
│   │   ├── routes/         # TanStack Router routes
│   │   └── contexts/       # React contexts (Theme, etc.)
│   └── styled-system/      # Panda CSS generated styles
└── docker-compose.yml      # Docker orchestration
```

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLModel** - SQL databases in Python, designed for simplicity
- **PostgreSQL** - Robust, open-source database
- **Alembic** - Database migration tool
- **Pydantic** - Data validation using Python type annotations
- **JWT** - JSON Web Tokens for authentication
- **Passlib** - Password hashing library

### Frontend
- **SolidJS** - Declarative JavaScript UI library
- **TanStack Start** - Full-stack framework
- **TanStack Router** - Type-safe routing
- **Park UI** - Beautiful, accessible component library
- **Panda CSS** - CSS-in-JS with static extraction
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

## 📋 Prerequisites

- **Node.js** 18+ and **pnpm**
- **Python** 3.10+
- **Docker** and **Docker Compose**
- **PostgreSQL** (or use Docker)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd full-stack-fastapi
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
# Database
POSTGRES_SERVER=localhost
POSTGRES_PORT=5432
POSTGRES_DB=app
POSTGRES_USER=postgres
POSTGRES_PASSWORD=changethis
DB_SUFIX=local

# Backend
SECRET_KEY=your-secret-key-here
BACKEND_CORS_ORIGINS=["http://localhost:3000"]
FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=admin

# Frontend
FRONTEND_HOST=localhost:3000

# Docker
DOCKER_IMAGE_BACKEND=app-backend
TAG=latest
DOMAIN=localhost
ENVIRONMENT=development

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAILS_FROM_EMAIL=your-email@gmail.com

# Monitoring (optional)
SENTRY_DSN=your-sentry-dsn
```

### 3. Start with Docker (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f
```

### 4. Manual Development Setup

#### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -e .

# Run database migrations
alembic upgrade head

# Start development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Generate Panda CSS styles
pnpm run prepare

# Start development server
pnpm run dev
```

## 🎨 Theme System

The application includes a complete dark/light mode system:

- **Theme Context**: Manages theme state with localStorage persistence
- **Theme Toggle**: Sun/moon icon button in headers
- **Park UI Integration**: Automatic color scheme switching
- **Persistence**: Theme preference saved across sessions

### Usage

```typescript
import { useTheme } from '../contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
pytest
```

### Frontend Tests

```bash
cd frontend
pnpm test
```

## 📦 Building for Production

### Backend

```bash
cd backend
# Build Docker image
docker build -t app-backend .
```

### Frontend

```bash
cd frontend
# Build for production
pnpm run build

# Start production server
pnpm start
```

## 🔧 Development Scripts

### Backend Scripts

```bash
cd backend
# Format code
ruff format .

# Lint code
ruff check .

# Run tests
pytest

# Database migrations
alembic revision --autogenerate -m "description"
alembic upgrade head
```

### Frontend Scripts

```bash
cd frontend
# Development
pnpm run dev              # Start dev server
pnpm run build            # Build for production
pnpm run start            # Start production server

# Code quality
pnpm run format           # Format code
pnpm run lint             # Lint code
pnpm run check            # Check code quality
pnpm run prepare          # Generate Panda CSS

# Testing
pnpm test                 # Run tests
```

## 🌐 API Documentation

Once the backend is running, visit:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/openapi.json

## 📁 Project Structure

### Backend Structure

```
backend/
├── app/
│   ├── api/
│   │   ├── deps.py          # Dependencies and authentication
│   │   ├── main.py          # API router
│   │   └── routes/          # API endpoints
│   ├── core/
│   │   ├── config.py        # Settings and configuration
│   │   ├── db.py           # Database connection
│   │   └── security.py     # Authentication and security
│   ├── models.py           # SQLModel database models
│   ├── crud.py             # Database operations
│   └── main.py             # FastAPI application
├── alembic/                # Database migrations
├── tests/                  # Test files
└── pyproject.toml          # Python dependencies
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/             # Park UI components
│   │   ├── IndexPage/      # Home page components
│   │   └── ThemeToggle/    # Theme toggle component
│   ├── features/
│   │   └── auth/           # Authentication feature
│   ├── routes/             # TanStack Router routes
│   ├── contexts/           # React contexts
│   ├── router.tsx          # Router configuration
│   └── index.css           # Global styles
├── styled-system/          # Panda CSS generated files
├── panda.config.ts         # Panda CSS configuration
└── package.json            # Node.js dependencies
```

## 🔐 Authentication

The application uses JWT-based authentication:

1. **Login**: POST `/api/v1/login/access-token`
2. **Register**: POST `/api/v1/users/`
3. **Protected Routes**: Include `Authorization: Bearer <token>` header

## 🐳 Docker

### Services

- **db**: PostgreSQL database
- **prestart**: Database initialization and migrations
- **backend**: FastAPI application
- **frontend**: SolidJS application (if needed)

### Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f [service-name]

# Rebuild and restart
docker-compose up -d --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Review the documentation
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) - Modern Python web framework
- [SolidJS](https://www.solidjs.com/) - Declarative JavaScript UI library
- [TanStack](https://tanstack.com/) - Type-safe tools for React/SolidJS
- [Park UI](https://park-ui.com/) - Beautiful, accessible component library
- [Panda CSS](https://panda-css.com/) - CSS-in-JS with static extraction
