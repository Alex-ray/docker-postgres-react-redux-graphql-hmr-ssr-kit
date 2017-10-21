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
    return (<Counter {...this.props} />);
  }
}

CounterContainer.propTypes = {
  // State
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
    incrementCount: (id, count) => dispatch(counterSetCount(count + 1)),
    decrementCount: (id, count) => dispatch(counterSetCount(count - 1))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
