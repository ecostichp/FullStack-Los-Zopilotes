from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    wep: str

    model_config = SettingsConfigDict(env_file = ".env.local")


settings = Settings()