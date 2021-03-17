# NodeJS 🚀️

* Al instalar NodeJS se instala tambien NPM, un administrador de paquetes.
* Para ejecutar un proyecto hacemos `node nombreArchivo.js`
* NodeJS es un framework de JS que nos permite escribir codigo backend en JS.
* Posee modulos utiles como:
  * HTTP: Modulo que funciona como server.
  * File System: Lee y modifica archivos
  * Path: Para trabajar con directorios y path de archivos.
  * Assertion testing

# NPM 🚀️

Cuando comenzamos un nuevo proyecto, node.js genera una carpeta en nuestro proyecto llamado `package.json` el cual contiene las dependencias de nuestro proyecto. Los packages son guardados en una carpeta llamada `node_modules`. Esta carpeta puede ser local de nuestro proyecto o global, algo que incluye a todo.

### Package.json

* Se suele poner un autor y descripcion del proyecto por si planeamos venderlo a futuro
* Podemos usar la seccion `keyboard` para poner palabras claves que identifiquen al proyecto
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



# Express 🚀️

* Express corre entre el código backend de Node y el front-end, manejando el routing de la aplicación misma. Para crear un objeto express, solo creo el objeto en mi js de mi aplicación.

