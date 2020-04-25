import React from 'react';
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { createBrowserHistory } from 'history'
import 'antd/dist/antd.css'
import './index.css'
import routes from './routes'

const history = createBrowserHistory()

function App() {
  return (
    <HashRouter history={history} basename="/" >
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
