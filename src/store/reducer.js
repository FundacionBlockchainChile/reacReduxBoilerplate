import * as actionTypes from '../store/actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
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
