import configureMiddlewares from './middlewares'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { rootReducers, rootSagas } from 'modules'
import createSagaMiddleware from 'redux-saga'

export default () => {
	const sagaMiddleware = createSagaMiddleware()
	const reducers = combineReducers(rootReducers)
	const store = createStore(reducers, applyMiddleware(sagaMiddleware))

	sagaMiddleware.run(rootSagas)

	return store
}
