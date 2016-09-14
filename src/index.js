// main react imports
import React from 'react';
import { render } from 'react-dom';
import ReactRouter from 'react-router';

// redux imports
// for more info on redux usage
// visit http://redux.js.org/docs/basics/
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// reducers imports
import mainApp from './reducers/reducers'

// application components
import App from './components/app.jsx';


// create redux store we also need to make sure the component
// is werapped in a provider that is using the store
let store = createStore(mainApp)

// wire up the main app component in the index.html app element.
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
