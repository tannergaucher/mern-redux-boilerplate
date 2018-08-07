import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'

/* 
import Components here
*/

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

const App = () => <p>Test</p>
const Page1 = () => <p>page1</p>
const Page2 = () => <p>page2</p>

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/page1/" component={Page1} />
        <Route path="/page2/" component={Page2} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
