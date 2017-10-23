import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  counterFetchCounters,
  counterDeleteCounter,
  counterCreateCounter,
  counterCountersSelector,
} from 'universal/modules/counter/ducks/counter.js';

import CountersPage from 'universal/modules/counter/components/CountersPage/CountersPage.js';

class CountersContainer extends Component {
  componentDidMount () {
    this.props.fetchCounters();
  }

  render () {
    const {
      counters,
      deleteCounter,
      createCounter,
    } = this.props;

    return (
      <CountersPage counters={counters} deleteCounter={deleteCounter} createCounter={createCounter} />
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    counters: counterCountersSelector(state, ownProps).toArray(),
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCounters: () => (dispatch(counterFetchCounters())),
    deleteCounter: id => (dispatch(counterDeleteCounter(id))),
    createCounter: () => (dispatch(counterCreateCounter())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer) ;
