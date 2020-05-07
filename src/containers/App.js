import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestSigns } from '../actions';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

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
    const { signs, searchField, onSearchChange, isPending } = this.props;
    const filteredSigns = signs.filter((sign) => {
      return sign.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList signs={filteredSigns} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
