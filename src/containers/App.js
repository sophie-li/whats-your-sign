import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestSigns } from '../actions';

import CardList from '../components/CardList';
import Header from '../components/Header';

import './App.css';

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
    onRequestSigns: () => requestSigns(dispatch),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.onRequestSigns();
  }

  render() {
    const { signs, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        {isPending ? <h1>Loading</h1> : <CardList signs={signs} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
