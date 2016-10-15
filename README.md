# react-redux-jumpstart
Jumpstart project for a react using redux.

## Synopsis
This project is meant to be used to create react-redux applications. Its a very minimal project containing some of the most used redux packages and react.

## Motivation
I wanted to create a simple project that I could use to experiment with react ideas very quickly. This project allows me to start something quick and just add application logic because all the build and configurations are done. There  are other packages that can be included like linter etc. But I will add those at a later time.

## Reference
The project assumes you have npm and node installed. It also take some dependencies in other dev packages here is the full list.

To start the project: **grunt dev**
To publish the bundle to the app directory: **grunt**

```javascript
[  
  "devDependencies": {
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",
    "grunt": "^1.0.1",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-webpack": "^1.0.14",
    "redux-devtools": "^3.3.1",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.1"
  },
  "dependencies": {
    "axios": "^0.14.0",
    "bootstrap": "^3.3.7",
    "react": "^15.3.1",
    "react-dom": "^15.3.1",
    "react-redux": "^4.4.5",
    "react-router": "^2.8.1",
    "redux": "^3.6.0",
    "redux-form": "^6.0.2",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.1.0"
  }
]
```
##License
MIT
