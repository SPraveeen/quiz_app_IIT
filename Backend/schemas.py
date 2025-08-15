from pydantic import BaseModel
from typing import Optional
from .models import Role

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    role: Role

    class Config:
        orm_mode = True # This is required for pydantic to work with sqlalchemy models

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
