// Libraries
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Components
import Counter from '../../components/Counter/Counter.js';

// Actions
import {
  counterSetCount,
  counterCurrentCounterCountSelector,
} from '../../ducks/counter.js';

import {
  locationCurrentCounterId,
} from 'universal/modules/location/ducks/location';

class CounterContainer extends Component {
  render () {
    const {
      id,
      count,
      incrementCount,
      decrementCount,
    } = this.props;
    return (<Counter id={id} count={count} incrementCount={incrementCount} decrementCount={decrementCount} />);
  }
}

CounterContainer.propTypes = {
  // State
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,

  // Dispatchers
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    id: locationCurrentCounterId(state, ownProps),
    count: counterCurrentCounterCountSelector(state, ownProps),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    incrementCount: (id, count) => dispatch(counterSetCount(id, count + 1)),
    decrementCount: (id, count) => dispatch(counterSetCount(id, count - 1))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
