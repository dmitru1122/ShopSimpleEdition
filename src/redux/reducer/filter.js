import * as actionType from '../actions/actionsType';
// import * as action from '../actions/jeans';

// export const category = (state = initialState, action) => {
//     switch(action.type) {
//         case actionType.JEANS:
//             return state = {

//             }
//     }
// }

const forAll = {
    filter: 'filter',
};
export const filterForAll = (state = forAll, action) => {
    switch(action.type) {
        case actionType.addFilter: 
            return state = {
                'filter': action.data,
            };
        case actionType.deleteFilter:
            return state = {};
        default: return state
    }
}