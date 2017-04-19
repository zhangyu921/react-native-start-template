import {RootRouter} from '../routes'

const initialState = RootRouter.getStateForAction({});

export default (state=initialState,action)=>{
    return RootRouter.getStateForAction(action,state)||state
}