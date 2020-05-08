import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SIGN_PENDING,
  REQUEST_SIGN_SUCCESS,
  REQUEST_SIGN_FAILED,
} from './constants.js';

import * as reducers from './reducers';

describe('searchSigns', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchSigns(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchSigns(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

describe('requestSigns', () => {
  const initialStateSigns = {
    signs: [],
    isPending: false,
  };

  it('should return the initial state', () => {
    expect(reducers.requestSigns(undefined, {})).toEqual(initialStateSigns);
  });

  it('should handle REQUEST_SIGN_PENDING', () => {
    expect(
      reducers.requestSigns(initialStateSigns, {
        type: REQUEST_SIGN_PENDING,
      })
    ).toEqual({ signs: [], isPending: true });
  });

  it('should handle REQUEST_SIGN_SUCCESS', () => {
    expect(
      reducers.requestSigns(initialStateSigns, {
        type: REQUEST_SIGN_SUCCESS,
        payload: [{ id: '10', name: 'taurus' }],
      })
    ).toEqual({
      signs: [{ id: '10', name: 'taurus' }],
      isPending: false,
    });
  });

  it('should handle REQUEST_SIGN_FAILED', () => {
    expect(
      reducers.requestSigns(initialStateSigns, {
        type: REQUEST_SIGN_FAILED,
        payload: 'errroooorrrrrrrr',
      })
    ).toEqual({
      error: 'errroooorrrrrrrr',
      signs: [],
      isPending: false,
    });
  });
});
