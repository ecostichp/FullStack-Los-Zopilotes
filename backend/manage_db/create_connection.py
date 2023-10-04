import sqlite3

db_file = './backend/Los_Zopilotes_App/database/los_zopilotes.db'



def create_connection():
    '''
    No se ocupa ningún parámetro. La función puede retornar 2 posibilidades
    A) Si se logró conectar, una conexción a la base de datos SQLite con el parámetro db_file.
    B) Si no se logró conectar, un dato tipo NONE

    '''
    conn = None
    
    try:
        conn = sqlite3.connect(db_file)
        return conn
    
    except sqlite3.Error as e:
        print(e)

    return conn