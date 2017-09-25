import React, {Component, PropTypes} from 'react';
import styles from './Home.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>⚡ Black Magic ⚡</h1>
        <a href="/auth/instagram">Login with Instagram</a>
      </div>
    );
  }
}

export default Home;
