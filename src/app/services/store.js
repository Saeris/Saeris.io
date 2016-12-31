import { inject } from 'aurelia-framework'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { Observable } from 'rxjs'
import createLogger from 'redux-logger'
import Apollo from './apollo'

@inject(Apollo)
export default class Store {
  constructor(apollo) {
    this.apollo = apollo.client
    this.state = this.configureStore()
    this.state.dispatch({type: `INIT_STATE`})
  }

  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  createReducer(asyncReducers) {
    return combineReducers({ apollo: this.apollo.reducer(), pingReducer: this.pingReducer, ...asyncReducers })
  }

  createEpic(asyncEpics = []) {
    return combineEpics(this.pingEpic, ...asyncEpics)
  }

  configureStore() {
    let loggerMiddleware = createLogger()
    let store = createStore(
      this.createReducer(),
      this.composeEnhancers(
        applyMiddleware(loggerMiddleware),
        applyMiddleware(createEpicMiddleware(this.createEpic())),
        applyMiddleware(this.apollo.middleware())
      )
    )
    store.asyncReducers = {}
    return store
  }

  addReducer(reducer) {
    this.store.asyncReducers = { ...this.store.asyncReducers, reducer }
    this.store.replaceReducer(this.createReducer(this.store.asyncReducers))
  }

  addEpic(epic) {

  }

  pingEpic = action$ => action$.filter(action => action.type === `PING`).mapTo({ type: `PONG` })

  pingReducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
    case `PING`:
      return { isPinging: true }

    case `PONG`:
      return { isPinging: false }

    default:
      return state
    }
  }
}
