import {AsyncStorage} from 'react-native'
import {persistStore} from 'redux-persist'

const STORE_CONFIG = {
    version: '2',
    config: {
        storage: AsyncStorage,
        blacklist: ['transient'],
    }
};

const configurePersist = async store => {
    const {version, config} = STORE_CONFIG;
    try {
        const localVersion = await AsyncStorage.getItem('storeVersion');
        if (localVersion === version) {
            persistStore(store, config);
        } else {
            persistStore(store, config).purge();
            AsyncStorage.setItem('storeVersion', version);
        }
    } catch (error) {
        persistStore(store, config).purge();
        AsyncStorage.setItem('storeVersion', version);
    }
};

export default configurePersist