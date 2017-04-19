import {createStore,applyMiddleware,compose} from 'redux'
import {autoRehydrate} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import configurePersist from './configurePersist'
import rootReducer from '../reducers/rootReducer'
import AppSaga from '../sagas/AppSaga';


const configureStore = ()=>{
    const middleware = [];
    const enhancers = [];
    
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);
    
    enhancers.push(applyMiddleware(...middleware));
    enhancers.push(autoRehydrate());
    
    const store = createStore(rootReducer,compose(...enhancers));
    
    sagaMiddleware.run(AppSaga);
    
    configurePersist(store).catch(error=>console.error(`Error while initializing persist: ${error}`));
    
    return store;
};
export default configureStore