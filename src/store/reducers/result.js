import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElId);
  return {
    ...state,
    results: updatedArray
  }
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result * 2})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            return deleteResult(state, action);
    }
    return state;
};

export default reducer;
