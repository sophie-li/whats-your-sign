import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SIGN_PENDING,
  REQUEST_SIGN_SUCCESS,
  REQUEST_SIGN_FAILED,
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

import * as actions from './actions';

let store;

beforeEach(() => {
  store = mockStore();
});

afterEach(() => {
  // Clear all HTTP mocks after each test
  nock.cleanAll();
});

it('should create an action to search signs', () => {
  const text = 'magic';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('handles requesting signs API', () => {
  store.dispatch(actions.requestSigns());

  const action = store.getActions();
  const expectedAction = { type: REQUEST_SIGN_PENDING };

  expect(action[0]).toEqual(expectedAction);
});

it('succesfully requests signs API', () => {
  const fetchSignsData = [{ id: 1, name: 'aries' }];
  nock('https://localhost:8000').get('/astrology').reply(200, fetchSignsData);

  return store.dispatch(actions.requestSigns()).then(() => {
    const actions = store.getActions();
    expect(actions[1].type).toEqual(REQUEST_SIGN_SUCCESS);
  });
});

it('catches errors from signs API', () => {
  const errorData = { error: 'un oh' };
  nock('https://my-json-server.typicode.com/typicode/demo/')
    .get('/posts')
    .reply(500, errorData);

  return store.dispatch(actions.requestSigns()).then(() => {
    const actions = store.getActions();
    expect(actions[1].type).toEqual(REQUEST_SIGN_FAILED);
  });
});
