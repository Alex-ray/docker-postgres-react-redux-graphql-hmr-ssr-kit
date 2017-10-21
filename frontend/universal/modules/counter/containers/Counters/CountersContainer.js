import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  counterFetchCounters,
  counterCountersSelector,
} from 'universal/modules/counter/ducks/counter.js';

const CounterListItem = ({ id, value }) => (
  <li><Link to={`/counter/${id}`}>Counter id: {id} value : {value}</Link></li>
);

class CountersContainer extends Component {
  componentDidMount () {
    this.props.fetchCounters();
  }

  render () {
    const {
      counters,
    } = this.props;

    return (
      <ul>
        {counters.map((counter) => (
          <CounterListItem key={`counter-list-item-{${counter.get('id')}`}
                           value={counter.get('value')}
                           id={counter.get('id')} />
        ))}
      </ul>
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
    fetchCounters: () => (dispatch(counterFetchCounters()))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer) ;
