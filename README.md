# INFO-ENSA Project - Development Guide (dev-real)

This repository contains the `INFO-ENSA` platform, featuring a Laravel backend and a plain HTML/CSS/JS frontend, both containerized using Docker.

## Branches
- `main`: Original branch.
- `dev-optimal`: Full development branch with Laravel + Angular.
- `dev-real`: Lightweight development branch with Laravel + Plain HTML/CSS/JS (Active).

---

## How to Run the Project

Follow these steps to get the project up and running locally.

### 1. Prerequisites
- [Docker](https://www.docker.com/) and Docker Compose installed.
- Git.

### 2. Setup Environment Files
The project requires `.env` files in the root and `backend/` directory. (These have been initialized for you).

### 3. Start the Containers
Run the following command in the root directory:
```bash
docker compose up -d --build
```

### 4. Initialize Laravel Backend
Run these commands to generate the application key and migrate the database:
```bash
docker exec info-ensa-backend-1 php artisan key:generate
docker exec info-ensa-backend-1 php artisan migrate --force
```

### 5. Access the Application
- **Frontend**: [http://localhost:4200](http://localhost:4200) (Simple HTML/CSS/JS)
- **Backend API**: [http://localhost:8080](http://localhost:8080)

---

## Architecture details
This branch (`dev-real`) is designed for simplicity. The frontend is served via Nginx and communicates with the Laravel API. Angular is **not** used here.
