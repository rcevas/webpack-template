Webpack Workflow

npm init

npm install --save-dev webpack webpack-cli @webpack-cli/init @babel/core @babel/preset-env core-js@3 babel-loader html-webpack-plugin css-loader style-loader mini-css-extract-plugin sass-loader node-sass autoprefixer postcss-loader file-loader webpack-dev-server rimraf

//si quieres utilizar typescript
npm install typescript @babel/preset-typescript @babel/plugin-proposal-class-properties --save-dev
//despues puedes iniciar el aechivo de configuracion de typescript
tsc --init
//despues cambiar en tsconfig.json
"target": "es6",  
"module": "es2015",
"removeComments": true,
"noEmit": true,
"strict": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true 

//si quieres puedes instalar un motor de plantillas de html como handlebars
npm install --save-dev handlebars handlebars-loader

//para ejecutar el archivo webpack.config.js
npx webpack
//pero se usan mejor los comandos start y build
  "scripts": {
    "build": "rimraf dist && webpack --mode=production",
    "build-tsc": "rimraf dist && tsc && webpack --mode=production",
    "start": "webpack-cli serve --mode development"
  },
//start para comenzar webpack-dev-server
npm run start 
//build para compilar en la carpeta dist para produccion
npm run build
//build-tsc para compilar typescript en la carpeta dist para produccion
npm run build-tsc