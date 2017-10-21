import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

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

function mapStateToProps () {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCounters: dispatch()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountersContainer) ;
