import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestSigns } from '../actions';

import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchSigns.searchField,
    signs: state.requestSigns.signs,
    isPending: state.requestSigns.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestSigns: () => dispatch(requestSigns()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
