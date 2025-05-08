# GestBank
Proyecto sobre un banco virtual que permite gestionar cuentas bancarias y realizar operaciones financieras.

# Descripción
Este proyecto es una aplicación web construida con FastAPI como backend, utilizando MySQL como base de datos para manejar los datos. La aplicación permite a los usuarios realizar operaciones como crear cuentas, realizar pagos mediante Bizum, consultar transacciones, y eliminar cuentas. El frontend está construido con HTML, CSS y JavaScript.
El proyecto también incluye características como la validación de datos y la gestión de las bases de datos mediante SQLAlchemy. Se utiliza Uvicorn como servidor ASGI para ejecutar la aplicación en un entorno local y en la nube.

# Funcionalidades

Gestión de cuentas bancarias:

Crear nuevas cuentas con IBAN y saldo inicial
Consultar saldo de cuentas existentes
Eliminar cuentas (incluyendo todas sus transacciones asociadas)


Operaciones Bizum:

Realizar pagos (incrementa el saldo)
Solicitar dinero (reduce el saldo)
Consultar historial de transacciones


Interfaz de usuario:

Versión 1 (gestión en memoria interna)
Versión 2 (almacenamiento en base de datos)



# Estructura del proyecto
gestbank
|-- app/
|   |-- __init__.py
|   |-- database.py
|   |-- main.py
|   |-- models.py
|-- static/
|   |-- css/
|   |   |-- styles.css
|   |-- images/
|   |   |-- logo-web.png
|   |-- js/
|   |   |-- script.js
|   |   |-- v2.js
|-- templates/
|   |-- gestbankv1.html
|   |-- gestbankv2.html
|   |-- index.html
|-- requirements.txt
|-- README.md

# Tecnologías utilizadas

Backend: FastAPI, SQLAlchemy, Pydantic
Base de datos: MySQL (con pymysql)
Frontend: HTML, CSS, JavaScript
Servidor: Uvicorn

# Instalación de dependencias
pip install -r requirements.txt

# Comando para la inicialización del servidor backend en local
python -m uvicorn app.main:app --reload
