import createRootReducer from "./reducers";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();


const preloadState = {};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
};

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    preloadState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
        )
    )
);

export const persistor = persistStore(store);