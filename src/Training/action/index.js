import * as types from '../constants/ActionTypes';
export const stt = () => {
    return {
    type : types.TOGGLE_STATUS
    }
};
export const sortBy = (sortBy) => {
    return {
        type : types.SORT,
        sort : sortBy
        }
};