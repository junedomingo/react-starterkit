# React Starterkit
> Build web apps using ReactJS, Redux, Webpack and Babel

### Tech
- [Redux](http://redux.js.org/) - Predictable state container for JavaScript apps
- [Webpack](https://webpack.github.io/) - A bundler for javascript and friends
- [React-Router](https://github.com/ReactTraining/react-router) - A complete routing library for React
- [Babel](https://babeljs.io/) - Compiles ES6 to ES5. Enjoy the new version of JavaScript today
- [ESLint](http://eslint.org/) - The pluggable linting utility for JavaScript and JSX
- NPM scripts - Run project with just one command

### Requirements

- [Node.js](https://nodejs.org/) v4
- [Bower](https://bower.io/)
- [YARN](https://yarnpkg.com/) - Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

### Installation

Install Yarn
```sh
$ npm install yarn -g
```

Clone this repo

```sh
$ git clone https://github.com/JuneDomingo/react-starterkit.git
$ cd react-starterkit
$ yarn install
$ npm start -s
```

Clone the API repo (Optional)

```sh
$ git clone https://github.com/JuneDomingo/react-starterkit-api.git
$ cd react-starterkit-api
$ yarn install
$ npm start
```

### Useful Commands
- `npm start` - Start the app (it will automatically open http://localhost:3005 on your default browser). Add `-s` option to start the app in silent mode.
- `npm run lint` - Analyze the entire app and it will report possible syntax errors and warnings based on ESlint rules.
- `npm run lint:watch` - Same as `npm run lint` but this will run continuously and analyze the file as you save it.
- `npm run build` - Build the app for production. Output files are located in `./dist` folder.
- `npm run prod` - Start the app in production mode.

### Configurations
You might want to edit `.env` located in your app root directory.

General Settings
- `PORT` - Default is `3005`

Dev Settings
- `OPEN_BROWSER_ON_START` - Set to `FALSE` if you don't want your app to automatically open the default browser upon running `npm start`. Default is `TRUE`

### Extras
- [reactgen](https://www.npmjs.com/package/reactgen) - React Component Generator
