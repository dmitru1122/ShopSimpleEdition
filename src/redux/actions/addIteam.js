import * as actionType from './actionsType';

export const addIteam = (elem) => {
    return {
        type: actionType.ADDITEAM,
        element: elem,
    }
}