import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SIGN_PENDING,
  REQUEST_SIGN_SUCCESS,
  REQUEST_SIGN_FAILED,
} from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestSigns = () => (dispatch) => {
  dispatch({ type: REQUEST_SIGN_PENDING });

  fetch(
    'https://my-json-server.typicode.com/sophie-li/astrology-json-server/astrology'
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_SIGN_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_SIGN_FAILED, payload: error }));
};
