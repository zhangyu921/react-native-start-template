import {REHYDRATE} from 'redux-persist/constants'
import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
    initialized:false,
    rehydrated:false,
};

const appReducer = (state=initialState,{type,payload})=> {
    switch (type){
        case ActionTypes.APP_STARTED:
            return {...state,initialized:true};
        case REHYDRATE:
            return payload.app?{...state,...payload.app,initialized:false,rehydrated:true}:state;
            
        default:
            return state;
    }
};
export default appReducer