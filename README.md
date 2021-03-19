# API REST 🚀️

**API** => Application Programming interface

**REST** => Representational State Transfer

Es una forma de consumir un servicio que se aloja en un servidor que devuelve una respuesta.

Cliente (request) <--------http, JSON, XML ------> Servidor (response)

#### Post

* Los datos no viajaran por la URL, se recomienda para los Login.
* Enviar datos al servidor

#### Get

* La informacion va a pasar como texto plano, lo cual es inseguro si lo queremos para hacer un login
* Obtener datos del servidor

# NodeJS 🚀️

* Al instalar NodeJS se instala tambien NPM, un administrador de paquetes.
* Para ejecutar un proyecto hacemos `node nombreArchivo.js`
* Se recomienda saber lo basico de JS para entender este repositorio
* NodeJS es un framework de JS que nos permite escribir codigo backend en JS.
* El archivo `ModuloHttp.js` es el entrypoint de la aplicacion en NodeJS

### Modulos

Funcionalidades simples o complejas compuestas por uno o mas archivos JS. NodeJS ya viene con varios modulos en si mismo (Modulo de nucleo).

Posee modulos utiles como:

* **HTTP**: Modulo que funciona como server. Ejecuta JS del lado del servidor.
* **File System (fs)**: Lee y modifica archivos
* **Path**: Para trabajar con directorios y path de archivos.

Por ejemplo, puedo hacer un archivo que tenga operaciones aritmeticas, e importarlo en otro archivo.

Los modulos que hagamos nosotros seran **modulos locales**


# NPM 🚀️

Cuando comenzamos un nuevo proyecto, node.js genera una carpeta en nuestro proyecto llamado `package.json` el cual contiene las dependencias de nuestro proyecto. Los packages son guardados en una carpeta llamada `node_modules`. Esta carpeta puede ser local de nuestro proyecto o global, algo que incluye a todo.

* `npm init` => inicializar un proyecto node en nuestro proyecto. Nos pide nombre del proyecto, version, descripcion y que entry point usará, esto nos **inicializara un package.json**

### Package.json

* Se suele poner un autor y descripcion del proyecto por si planeamos venderlo a futuro
* Podemos usar la seccion `keyboard` para poner palabras claves que identifiquen al proyecto
* Si agrego un **script personalizado**, que no sea, por ejemplo, `start`, tendré que correr el comando con `npm run comandoPersonalizado`.
* El proyecto tambien necesita una **licencia**, las mas comunes para proyectos open source son MIT y BSD, esto tambien se aclara en el json
* Tambien deberiamos plasmar en que version se encuentra el proyecto actualmente con **version**
* En **dependencies** tenemos todo lo que npm instaló, nuestras dependencias, y sus versiones

Las versiones poseen una nomenclatura especial **SemVer**, es util cuando tenemos dependencias de terceros, la nomeclatura es **MAJOR.MINOR.PATCH**

* MAJOR: Cambios que pueden hacer que la API se vuelva incompatible
* MINOR: Cuando se agrega funcionalidad.
* PATCH: Cambios y parches menores.

Gracias a esto podemos "decidir" cuando queremos que se actualicen nuestras dependencias.
Si quiero se que actualicen **solo cambios PATCH**
`"some-package-name": "~1.3.8"`
Si quiero permitir actualizaciones en cambios MINOR y PATCH
`"some-package-name": "^1.3.8"`

Ejemplo de package.json =>

```
{

"author" : "Denisse",
"name": "fcc-learn-npm-package-json",
"licence":"MIT",
"versión” : “1.2",
"keywords": ["proyecto", "test"],

	"dependencies": {

		"express": "^4.14.0"

	},

	"main": "server.js",

	"scripts": {

		"start": "node server.js" // "npm start" corre el comando "node server.js"

	},

	"engines": {

		"node": "8.11.2"

	},

	"repository": {

		"type": "git",

		"url": "https://idontknow/todo.git"

	}

}
```

### package.lock.json

Se encarga de controlar las versiones de las dependencias actuales de nuestro proyecto. Si no lo encuentra, va a instalar las versiones mas recientes de las dependencias, lo que puede dar a fallas al hacer un `npm install` en el proyecto recien clonado (sin node_modules)

# Express 🚀️

* Express corre entre el código backend de Node y el front-end, manejando el routing de la aplicación misma.
* Para crear un objeto express, solo creo el objeto en mi js de mi aplicación.
* Nos hará escribir mucho menos codigo que con NodeJS puro
* Funciona mejor si es combinado con TypeScript

##  Dependencias

#### body-parser

Es una dependencia para recuperar los datos que enviamos en el body via POST en el backend. 

Instalacion => `npm i body-parser`

Inicializacion en codigo (x-www.form-urlencoded) => `app.use(bodyParser.urlencoded({extended: false}));`

Soporte para JSON (raw) => `app.use(bodyParser.json());`

#### Nodemon

Detecta nos cambios de nuestro codigo nodeJS y reinicia automaticamente, es una **dependencia**, se instala con `npm install nodemon`
