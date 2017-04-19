import {call,take, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {REHYDRATE} from 'redux-persist/constants'
import SplashScreen from 'react-native-splash-screen'
import * as ActionTypes from '../actions/ActionTypes'

export default function* appSaga () {
    yield take(REHYDRATE);

    yield put({type:ActionTypes.APP_STARTED});

    yield call(delay,2000);

    SplashScreen.hide();
}
