import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './counter-list-item.css';
import { smallSquareButton } from 'universal/styles/button.css';
import typeStyles from 'universal/styles/typography.css';

const CounterListItem = ({ id, value, onDelete }) => (
  <li className={styles.listItem}>
    <Link className={typeStyles.link} to={`/counter/${id}`}>Counter | {value}</Link>
    <button className={cx(smallSquareButton, styles.button)} onClick={onDelete.bind(null, id)}>Delete</button>
  </li>
);

export default CounterListItem;
