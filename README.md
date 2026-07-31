# Ejecutar proyecto

### Requisitos previos
- node.js instalado
- npm instalado
- MySQL - MySQL Workbench

---

1. Abrir terminal en la ruta del backend y ejecutar:
```
npm install
```

2. Abrir terminal en la ruta del frontend y ejecutar:
```
npm install
```

3. Importar la base de datos que se encuentra en la carpeta, importarla al workbench:
```
database/clientes.sql
```

4. Crear el siguiente archivo .env dentro de la carpeta backend:
`.env`
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=clientes

PORT=3000
```

5. En la terminal del backend ejecutar:
```
npm run dev
```

6. En la terminal del backend ejecutar:
```
npm run serve
```

7. abrir el link que aparece luego de ejecutar `npm run serve` en la terminal del frontend:
```
http://localhost:8080/
```
esto abrira el crud en la web

---

# Documentación CRUD Clientes - Prueba Tecnica

## Descripción
Este proyecto corresponde a la solución de la prueba técnica de CRUD Clientes.

Usando arquitectura de tres capas, implementando un backend con Node.js y Express, un frontend con Vue.js y una base de datos MySQL.

### DB
![database](/database/modelo.png)

---

# Objetivo

El objetivo principal de este proyecto es demostrar la implementación de un sistema CRUD utilizando una arquitectura de tres capas, garantizando un código organizado, fácil de mantener y escalable.

---

# Tecnologías utilizadas

## Backend

- Node.js
- Express.js
- MySQL2
- Dotenv
- Cors

## Frontend

- Vue.js
- Vue Router
- Axios

## Bases de datos

- MySQL 8
- MySQL Workbench

---

# Arquitectura de tres capas

Teniendo en cuenta la arquitectura de las 3 capas. Esta aplicación esta dividida en diferentes niveles, donde cada uno tiene una responsabilidad específica.

En este proyecto las tres capas se comunican de la siguiente manera:

```
PRESENTACIÓN
Vue.js
↓
Axios (HTTP)
↓
LÓGICA DE NEGOCIO
(node.js + Express)
↓
ACCESO A DATOS
(Mysql)
```

## Capa de Presentación

La capa de presentación corresponde al frontend desarrollado con **Vue.js**. Es la parte de la aplicación con la que interactúa el usuario.

Su función es mostrar la información en pantalla, capturar los datos de los formularios y enviar las solicitudes al backend utilizando Axios.

Por ejemplo, cuando el usuario registra un cliente, el formulario envía la información al servicio correspondiente:

```javascript
await clienteService.crearCliente(cliente);
```

En esta capa no se realizan consultas a la base de datos. Su única responsabilidad es comunicarse con el backend y mostrar los resultados al usuario.

Dentro del proyecto corresponde a la carpeta:

```
frontend/
```

---

## Lógica de Negocio

La lógica de negocio fue desarrollada con **Node.js** y **Express**. Su función es recibir las solicitudes del frontend, procesarlas y decidir qué operación debe realizarse.

**backend/Controllers** y los **backend/Services**. <br>
El **Controller** recibe la petición y la envía al **Service**.

```js
async obtenerTodos(req, res) {
    const clientes = await clienteService.obtenerTodos();
    res.json(clientes);
}
```

Después, el **Service** se encarga de ejecutar la lógica del sistema y comunicarse con la capa de acceso a datos.

```js
return await clienteRepository.obtenerTodos();
```

Dentro del proyecto esta capa corresponde a:

```
backend/
├── controllers/
└── services/
```

---

# Acceso a Datos

La capa de acceso a datos es la encargada de comunicarse directamente con MySQL.

En este proyecto esta función la realizan los **Repositories**, donde se encuentran todas las consultas SQL.

Por ejemplo, para consultar todos los clientes se ejecuta una consulta como la siguiente:

```js
const [rows] = await db.query(`
    SELECT *
    FROM clientes
`);
```

De esta manera, el resto de la aplicación no necesita conocer cómo está organizada la base de datos, ya que toda esa responsabilidad queda centralizada en los Repositories.

Dentro del proyecto corresponde a:

```
backend/
├── repositories/
├── models/
└── config/
```

--- 

## 3 capas

Cada vez que el usuario realiza una acción, como registrar un cliente, la información sigue el siguiente flujo:

```
Usuario
   │
   ▼
Vue.js
   │
Axios
   │
ClienteController
   │
ClienteService
   │
ClienteRepository
   │
MySQL
   │
Respuesta
   │
Vue.js
```

Este mismo flujo se utiliza para todas las funciones del CRUD

En resumen, cada capa cumple una función específica:

- **Presentación:** interactúa con el usuario.
- **Lógica de negocio:** procesa la información.
- **Acceso a datos:** realiza las operaciones en la base de datos.

Esta separación hace que el proyecto sea más organizado, fácil de mantener y escalable.

--- 

# Vista previa

![database](/img/clientes.png)
![database](/img/productos.png)
![database](/img/facturas.png)
![database](/img/detalle.png)