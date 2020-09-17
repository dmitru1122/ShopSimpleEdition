import * as actionsType from '../actions/actionsType';
import * as action from '../actions/addPrice';

const initialState = {
    // price: {
        nr: [2, 8],
        title: 'Price vot',
    // }
}

export const addPrice = (state = initialState, action) => {
    switch(action.type) {
        case actionsType.ADDITEAMPRICE:
            console.log( 'in reducer ' + action.payload);
             return state = {
                 nr: state.nr,
                ...state, 
                // price: {
                //     ...state.price,
                    nr: [action.payload],
                    // }
                };
        default :
        return state;
    };
};