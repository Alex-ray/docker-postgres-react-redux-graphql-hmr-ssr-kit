import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Home.css';
import { mainButton } from 'universal/styles/button.css';
import { title } from  'universal/styles/typography.css';

class Home extends Component {
  render () {
    return (
      <div className={styles.home}>
        <h1 className={cx(styles.title, title)}>⚡ Black Magic ⚡</h1>
        <div className={styles.center}>
          <Link className={cx(styles.button, mainButton)} to='/counters'>Go to App</Link>
        </div>
      </div>
    );
  }
}

export default Home;
