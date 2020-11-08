import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };

    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.elementId
      );
      return {
        ...state,
        results: updatedArray,
      };

    // if (action.type === 'INCREMENT') {
    //   return {
    //     counter: state.counter + 1,
    //   };
    // }
    // if (action.type === 'DECREMENT') {
    //   return {
    //     counter: state.counter - 1,
    //   };
    // }
    // if (action.type === 'ADD') {
    //   return {
    //     counter: state.counter + action.value,
    //   };
    // }
    // if (action.type === 'SUBSTRACT') {
    //   return {
    //     counter: state.counter - action.value,
    //   };
    // }
  }
};

export default reducer;
