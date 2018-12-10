import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootComponent = <App />;
const root = document.getElementById('root');
ReactDOM.render(rootComponent, root);

serviceWorker.unregister();
