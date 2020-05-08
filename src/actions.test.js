import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SIGN_PENDING,
  REQUEST_SIGN_SUCCESS,
  REQUEST_SIGN_FAILED,
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

import * as actions from './actions';

it('should create an action to search signs', () => {
  const text = 'magic';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting signs API', () => {
  const store = mockStore();
  store.dispatch(actions.requestSigns());

  const action = store.getActions();
  const expectedAction = { type: REQUEST_SIGN_PENDING };

  expect(action[0]).toEqual(expectedAction);
});
