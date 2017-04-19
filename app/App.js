
import React from 'react';

import {Provider} from 'react-redux'
import RootView from './core/RootView'
import configureStore from './core/config/configureStore'

const store = configureStore();

const App = ()=> (
    <Provider store={store}>
        <RootView/>
    </Provider>
);

export default App