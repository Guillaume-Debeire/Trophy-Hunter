import { FETCH_TITLES } from '../actions/titles';

const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TITLES:
      console.log(state, action);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
