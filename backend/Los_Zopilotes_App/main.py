from fastapi import FastAPI

# Se instancía la clase para generar el objeto 'app'. Este es el módulo principal.
app = FastAPI()



# Se importa los CORS para que el frontend pueda hacer peticiones al backend
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[*origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Se importan las librería necesaria para el manejo de la descarga de archivos estáticos
from fastapi.staticfiles import StaticFiles

app.mount("/static", StaticFiles(directory="Los_Zopilotes_App/static"), name="static")



# Ruta principal
@app.get('/')
async def home():
    mensaje = {'mensaje' : 'Conexión con el servidor exitosa'}

    return mensaje



from .usuarios import router as usuarios
app.include_router(usuarios.router)


from .productos import router as productos
app.include_router(productos.router)


from .database import Base, engine
Base.metadata.create_all(bind = engine)
