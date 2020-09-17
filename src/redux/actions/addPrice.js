import * as actionsType from './actionsType';

export const addPrice = (nr) => {
    console.log('  in action');
    return {
        type: actionsType.ADDITEAMPRICE,
        payload: nr,
    }
}