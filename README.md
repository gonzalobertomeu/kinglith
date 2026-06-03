# Kinglith

NestJS microservices monorepo built with Clean/Onion Architecture, TypeORM, and PostgreSQL.

## Architecture

The project follows Clean Architecture principles with a clear separation between domain, application, and infrastructure layers. Each microservice is isolated in its own schema within a shared PostgreSQL instance.

```
kinglith/
├── apps/
│   ├── auth/                          # Auth microservice
│   │   ├── src/
│   │   │   ├── config/
│   │   │   │   └── auth.config.ts     # Typed env vars (Zod)
│   │   │   ├── logic/
│   │   │   │   ├── domain/
│   │   │   │   │   └── entities/      # Pure domain entities
│   │   │   │   └── infrastructure/
│   │   │   │       ├── persistence/
│   │   │   │       │   ├── datasource/ # TypeORM DataSource
│   │   │   │       │   └── models/    # ORM models
│   │   │   │       └── auth.module.ts
│   │   │   ├── migrations/            # TypeORM migrations
│   │   │   └── main.ts
│   │   └── Makefile                   # Migration commands
│   └── kinglith/                      # Main microservice
├── libs/
│   └── envs/                          # Shared env parsing utility
│       └── src/
│           └── envs.service.ts        # parseEnv(schema: ZodObject)
├── infrastructure/
│   └── compose.yaml                   # Docker Compose services
└── Makefile                           # Root commands
```

## Stack

- **Runtime** — [Bun](https://bun.sh)
- **Framework** — [NestJS 11](https://nestjs.com)
- **ORM** — [TypeORM](https://typeorm.io)
- **Database** — PostgreSQL 17
- **Validation** — [Zod](https://zod.dev)
- **Containerization** — Docker Compose

## Prerequisites

- [Docker](https://www.docker.com) and Docker Compose
- [Bun](https://bun.sh)
- [Make](https://www.gnu.org/software/make)

## Getting started

```bash
# Install dependencies
bun install

# Start all services
make up

# Check running containers
make ps
```

## Docker commands

```bash
make up        # Start all services in background
make down      # Stop and remove containers
make logs      # Tail logs from all services
make restart   # Restart all services
make ps        # Show container status
```

## Database migrations

Migrations run inside the Docker container against the service's own PostgreSQL schema.

### Auth service

```bash
# Generate a new migration from entity changes
make auth-migrate-generate name=MigrationName

# Run all pending migrations
make auth-migrate-run

# Revert the last migration
make auth-migrate-revert
```

## Environment variables

Each microservice defines and validates its own environment variables using Zod. Add a `.env` file or configure them in `infrastructure/compose.yaml`.

### Auth service

| Variable | Description | Default |
|---|---|---|
| `DB_HOST` | PostgreSQL host | — |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_BASE` | Database name | — |
| `DB_USER` | Database user | — |
| `DB_PASS` | Database password | — |

## Project conventions

- **Domain entities** are pure TypeScript classes with no ORM decorators
- **ORM models** live in `infrastructure/persistence/models` and are mapped to/from domain entities
- **Migrations** are always explicit — `synchronize` is disabled
- **Schemas** — each microservice owns its own PostgreSQL schema (`auth`, etc.)
- **Shared libs** live in `libs/` and have no knowledge of any specific microservice
