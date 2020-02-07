
import {reducer} from '../reducers/reducerindex'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {createStore} from 'redux'

const persistConfig = {
    key: 'Todo',
    storage: storage,
    whitelist: ['token'],
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export {store,persistor};