# FastAPI Quiz App Backend

This is the backend for a Quiz Application, built with FastAPI and using a SQLite database.

## Features

- User authentication with JWT tokens.
- Role-based access control (Admin and User).
- A default admin user created on startup.
- Interactive API documentation with Swagger UI.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd quiz_app_IIT/backend
    ```

2.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run the application:**
    ```bash
    uvicorn main:app --reload
    ```

The application will be running at `http://127.0.0.1:8000`.

## API Endpoints

You can access the interactive API documentation at `http://127.0.0.1:8000/docs`.

-   **POST** `/signup`: Register a new user. New users are assigned the `user` role by default.
-   **POST** `/login`: Log in to get a JWT access token.
-   **GET** `/users/me`: Get the details of the currently logged-in user.
-   **GET** `/users/`: Get a list of all users (Admin only).

## Default Admin User

On the first run, a default admin user is created with the following credentials:

-   **Username:** `admin`
-   **Password:** `admin`
