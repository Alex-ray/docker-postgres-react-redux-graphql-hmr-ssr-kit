import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  counterFetchCounters,
  counterDeleteCounter,
  counterCreateCounter,
  counterCountersSelector,
} from 'universal/modules/counter/ducks/counter.js';

const CounterListItem = ({ id, value, onDelete }) => (
  <li>
    <Link to={`/counter/${id}`}>Counter id: {id} value : {value}</Link>
    <button onClick={onDelete.bind(null, id)}>Delete</button>
  </li>
);

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
      <div>
        <button onClick={createCounter}>Create Counter</button>
        <ul>
          {counters.map((counter) => (
            <CounterListItem key={`counter-list-item-{${counter.get('id')}`}
                             value={counter.get('value')}
                             id={counter.get('id')}
                             onDelete={deleteCounter}
                           />
          ))}
        </ul>
      </div>
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
