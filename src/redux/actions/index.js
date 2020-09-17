import * as actionsType from './actionsType';
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';

export const increment = (nr) => {
    return {
        type: actionsType.INCREMENT,
        payload: nr,
    };
}; 
export const decrement = (nr) => {
    return {
        type: actionsType.DECREMENT,
        payload: nr,
    };
}