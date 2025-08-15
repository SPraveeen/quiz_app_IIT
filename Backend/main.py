from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from .database import engine, Base, get_db
from .routers import auth, users
from . import crud, schemas, models

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.on_event("startup")
def on_startup():
    db = next(get_db())
    admin_user = crud.get_user_by_username(db, username="admin")
    if not admin_user:
        user = schemas.UserCreate(username="admin", email="admin@example.com", password="admin")
        crud.create_user(db=db, user=user, role=models.Role.admin)

app.include_router(auth.router)
app.include_router(users.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Quiz App API"}
