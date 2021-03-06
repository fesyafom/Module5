import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
        );

    store.subscribe(() => console.log('New State', store.getState()));

    return store
}

