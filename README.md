# Full-Stack App (with ExtJS|ReactJS) and Express

## Instalar en atom
* https://github.com/AtomLinter/linter-jscs
* https://github.com/AtomLinter/linter-jshint
> Ejemplo de configuración para jshint
* https://github.com/jshint/jshint/blob/master/examples/.jshintrc

Configuración básica para linter-jscs
```json
{
    "preset": "node_style_guide",
    "validateIndentation": 4,
    "validateLineBreaks": "CRLF",
    "disallowMixedSpacesAndTabs": true,
    "maximumLineLength": 80,
    "disallowTrailingWhitespace": true,
    "requireCurlyBraces": null
}
```
## Links
* JSCS https://github.com/jscs-dev/node-jscs/blob/master/OVERVIEW.md
* V7.X https://nodejs.org/es/
* Sencha doc http://docs.sencha.com/extjs/6.2.1/index.html
* Sencha fiddle  https://fiddle.sencha.com
* Sencha example http://examples.sencha.com/extjs/6.2.0/examples/
* React views https://github.com/reactjs/express-react-views
* rethinkdb https://www.rethinkdb.com/docs/guide/javascript/
* rethinkdb install https://www.rethinkdb.com/docs/install/
* Reactive programming http://reactivex.io/
    > https://github.com/stoeffel/awesome-frp-js
    > https://gist.github.com/staltz/868e7e9bc2a7b8c1f754


## CMD

* compilar en modo desarrollo `sencha app build -dev`
* compilar en modo production `sencha app build -pr`
* compilar esparando cambios `sencha app watch`

## Iniciar proyecto

* Instalar dependencias con el comando `npm install`
* Copiar el framework `ext` a la carpeta FrontEnd
* Compilar el proyecto `sencha app build -dev`
* Iniciar el servidor de rethinkdb [base de datos: `curso`, tabla: `user`]
* Iniciar express `node app.js`
* Iniciar webserver de sencha `sencha web start`

