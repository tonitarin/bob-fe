import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { usersReducer } from './reducers'
import { UsersList } from './pages/users-list'
import { NewUser } from './pages/new-user'

import './app.css'

const store = createStore(usersReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>BOB Fullstack test</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UsersList}></Route>
            <Route path="/new" component={NewUser}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export { App }
