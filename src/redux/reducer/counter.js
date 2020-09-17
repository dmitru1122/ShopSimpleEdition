// import * as action from '../actions/indes';
import * as actionsType from '../actions/actionsType';

export const counter = ( state = 1, action ) => {
    switch(action.type) {
        case actionsType.INCREMENT:
            return state + action.payload;
        case actionsType.DECREMENT:
            return state - action.payload;
        
        default:
            return state;
    };
};

// export default counter