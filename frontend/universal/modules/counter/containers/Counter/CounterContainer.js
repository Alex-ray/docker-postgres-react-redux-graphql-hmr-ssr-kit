// Libraries
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Components
import Counter from '../../components/Counter/Counter.js';

// Actions
import {
  counterSetCount,
  counterCountSelector,
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


function mapStateToProps(state, ownProps) {
  const count = state.counter.get('count');
  return {
    count: counterCountSelector(state, ownProps),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    incrementCount: count => dispatch(counterSetCount(count)),
    decrementCount: count => dispatch(counterSetCount(count))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
