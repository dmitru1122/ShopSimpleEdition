import {counter} from './counter';
import {addPrice} from './addPrice';
import {addIteam} from './addIteam';
import { combineReducers } from 'redux';
import {filterForAll} from './filter';

const allReducer = combineReducers ({
    filterForAll,
    counter: counter,
    addPrice,
    addIteam,
    
});
export default allReducer;