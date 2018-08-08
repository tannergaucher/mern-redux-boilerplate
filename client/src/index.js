import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import reducers from './reducers'

//___ Components ___ //
import CreatePost from './components/CreatePost'
import Index from './components/Index'
import ShowPost from './components/ShowPost'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:id" component={ShowPost} />
        <Route exact path="/create" component={CreatePost} />
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()
