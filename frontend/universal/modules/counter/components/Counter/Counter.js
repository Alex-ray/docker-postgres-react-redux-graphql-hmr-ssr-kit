import React, {Component, PropTypes} from 'react';
import styles from './Counter.css';
import classNames from 'classnames';

class Counter extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
  }

  handleLinkClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  handleIncrementClick (incrementCount, event) {
    const {
      id,
      count,
    } = this.props;

    this.handleLinkClick(event);
    incrementCount(id, count);
  }

  handleDecrementClick(decrementCount, event) {
    const {
      id,
      count,
    } = this.props;

    this.handleLinkClick(event);
    decrementCount(id, count);
  }

  render () {
    const {
      count,
      incrementCount,
      decrementCount
    } = this.props;

    return (
      <div className={styles.counterContainer}>
        <div className={styles.counter}>{count}</div>
        <a className={classNames(styles.button, styles.positive)} onClick={this.handleIncrementClick.bind(this, incrementCount)}>+</a>
        <a className={classNames(styles.button, styles.negative)} onClick={this.handleDecrementClick.bind(this, decrementCount)}>-</a>
      </div>
    )
  }
}

export default Counter;
