import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import * as reducers from './reducers'

const rootReducer = combineReducers({

    ...reducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))