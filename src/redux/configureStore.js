import rootReducer from 'src/reducers'
import { applyMiddleware, compose, createStore } from 'redux'

// eslint-disable-next-line no-undef
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose;
const configureStore = () => {
    const middlewares = [];
    const enhancers = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducer, composeEnhancers(...enhancers));
    return store
}

export default configureStore