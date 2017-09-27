// Libraries
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Components
import Counter from '../../components/Counter/Counter.js';

// Actions
import {
  incrementCount,
  decrementCount
} from '../../ducks/counter.js';

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


function mapStateToProps(state, props) {
  const count = state.counter.get('count');
  return {
    count
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    incrementCount: () => {
      dispatch(incrementCount());
    },
    decrementCount: () => {
      dispatch(decrementCount());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
