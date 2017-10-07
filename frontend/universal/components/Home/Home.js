import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={styles.title}>⚡ Black Magic ⚡</h1>
        <div className={styles.center}>
          <Link className={styles.button} to='/counter'>Go to App</Link>
        </div>
        {/* <a href="/auth/instagram">Login with Instagram</a> */}
      </div>
    );
  }
}

export default Home;
