import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  counterFetchCounters,
  counterCountersSelector,
} from 'universal/modules/counter/ducks/counter.js';

class CountersContainer extends Component {
  componentDidMount () {
    this.props.fetchCounters();
  }

  render () {
    console.log('counters : ', this.props.counters);
    return (
      <ul>
      </ul>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    counters: counterCountersSelector(state, ownProps),
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCounters: () => (dispatch(counterFetchCounters()))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer) ;
