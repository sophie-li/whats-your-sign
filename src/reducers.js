import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SIGN_PENDING,
  REQUEST_SIGN_SUCCESS,
  REQUEST_SIGN_FAILED,
} from './constants.js';

const initialStateSearch = {
  searchField: '',
};

export const searchSigns = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateSigns = {
  signs: [],
  isPending: true,
};

export const requestSigns = (state = initialStateSigns, action = {}) => {
  switch (action.type) {
    case REQUEST_SIGN_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SIGN_SUCCESS:
      return Object.assign({}, state, {
        signs: action.payload,
        isPending: false,
      });
    case REQUEST_SIGN_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
