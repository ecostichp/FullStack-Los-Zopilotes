# Aplicación prueba FullStack IACele



## Descripción de la aplicación

El código es público:
 -El código está en [GitHub](https://github.com/ecostichp/FullStack-Los-Zopilotes)



La estructura de la aplicación queda de la siguiente manera:

1.- Backend FastAPI
  1.1.- ORM: SQLAlchemy

2.- Database Motor SQLite

3.- Frontend ReactJS
  3.1.- Ruteador: React-Router-Dom
  3.2.- Peticiones HTTP: Axios
  3.3.- CSS: TailwindCSS
  3.4.- UI components: TailwindUI, NextUI





## El Backend

### 1. Actualiza PIP en python.
```
python -m pip install -U Pip  
```

### 2. Crea un entorno para el proyecto.
Ingresa a la carpeta del backend. La carpeta del entorno quedará al mismo nivel que la carpeta de la aplicación (Los_Zopilotes_App)

En este ejemplo, el entorno se llamará "env-Los_Zopilotes"

```
python -m venv env-Los_Zopilotes
```

### 3. Activa el entorno.
```
env-Los_Zopilotes\Scripts\activate
```

### 4. Actualiza PIP en tu entorno e instala las dependencias del proyecto.
```
python -m pip install -U Pip  
python -m pip install -r requirements.txt
```

### 5. Inicia el servidor.

Sitúate dentro de la carpeta app/

```
uvicorn Los_Zopilotes_App:app --reload
```
Si quieres iniciar el servidor en otro host (ej: 192.168.1.82):
```
uvicorn Los_Zopilotes_App:app --reload  --host 192.168.1.82
```



# El Motor de Base de Datos.
Se va a utilizar SQLite como el motor de la base de datos. Puedes configurar nombre y dirección de esta base de datos dentro del archivo 'Los_Zopilotes_App/database/orm.py'.





## El Frontend

### 1. Actualiza yarn
```
npm install --global yarn
```

### 2. Instala las dependencias.
Ingresa a la carpeta del frontend, donde está el archivo "package.json" y corre el comando yarn:

```
yarn
```

### 5. Corre la aplicación en modo develpment.
```
yarn dev
```
si prefieres correr la aplición en un puerto específico (ej: 3010):
```
yarn dev -p 3010
```
si prefieres correr la aplición exponiendola en tu red local:
```
yarn dev --host
```



## Creando un archivo .env.local
Para tener variables de entorno debes crear un archivo ".env.local" y el archivo ".env.production".  Estos archivos se crean en la carpeta del proyecto, que en este ejemplo llamaste "app".


Después de esto, escribe el siguiente código dentro del archivo local:
```
VITE_API_HOST = "http://127.0.0.1:8000"
```
Es aquí donde Axios hará las peticiones que el frontend tiene para el backend.

Cuando tengas la dirección del backen de producción, haces lo mismo en el .env.production.
