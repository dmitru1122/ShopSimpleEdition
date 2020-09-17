import * as actionType from '../actions/actionsType';

const initialState = {
    k: 1,
    iteam: {
        id: 0,

    }
};

export const addIteam = (state = initialState, action) => {
    ;
switch(action.type) {
    
    case actionType.ADDITEAM:
        console.log(action.obj.header)
            return state = {
            ...state,
            // iteam: {...state.iteam, 
                [state.k]: action.obj,
                id: state.iteam.id + 1,
                k: state.k + 1,
            // },
            };
            // state.k++;
            break;
    default: 
    return state;
    };
}