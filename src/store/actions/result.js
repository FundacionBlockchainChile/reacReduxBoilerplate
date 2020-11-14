import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
  // const updatedResult = result * 2
  return {
    type: actionTypes.STORE_RESULT,
    result,
    // result: updatedResult
  };
};
export const storeResult = (result) => {
  return (dispatch, getState) => {
    // dispatch comes from Redux Thunk loaded as middleware on index.js
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    elementId: id,
  };
};
