import { combineReducers } from 'redux';
import chirpsReducer from './chirps';

const rootReducer = combineReducers({
    chirps: chirpsReducer
});

export default rootReducer;