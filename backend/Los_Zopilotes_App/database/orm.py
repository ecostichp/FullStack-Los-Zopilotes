from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pathlib import Path

from ..config import settings

print(settings)


db_file = 'los_zopilotes.db'

SQLALCHEMY_DATABASE_URL = f"sqlite:///./Los_Zopilotes_App/database/{db_file}"

engine = create_engine( SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} )

Base = declarative_base()



SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        