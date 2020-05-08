import React, { Component } from 'react';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestSigns();
  }

  filterSigns = () => {
    return this.props.signs.filter((sign) => {
      return sign.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { signs, onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList signs={this.filterSigns(signs)} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
