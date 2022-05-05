import {
  NUMBER_INCREMENT,
  NUMBER_DECREMENT,
  ITEM_ADD,
  ITEM_REMOVE,
  NUMBER_RESET,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USERS,
} from "../redux/types";

const initialState = {
  firstState: null,
  secondState: {},
  thirdState: [],
  numberState: 0,
  isLoading: false,
  users: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_INCREMENT:
      return { ...state, numberState: state.numberState + 1 };
    case NUMBER_DECREMENT:
      return { ...state, numberState: state.numberState - 1 };
    case NUMBER_RESET:
      return { ...state, numberState: 0 };
    case ITEM_ADD:
      return {
        ...state,
        thirdState: [
          ...state.thirdState,
          [action.payload, Date.now().toString()],
        ],
      };
    case ITEM_REMOVE:
      return {
        ...state,
        thirdState: state.thirdState.filter(
          (item) => item[1] !== action.payload
        ),
      };
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
