import React from 'react';

import CounterListItem from 'universal/modules/counter/components/CounterListItem/CounterListItem.js';

import styles from './counter-list.css';

const CountersList = ({ counters, deleteCounter}) => (
  <ul className={styles.list}>
    {counters.map((counter) => (
      <CounterListItem key={`counter-list-item-{${counter.get('id')}`}
                       value={counter.get('value')}
                       id={counter.get('id')}
                       onDelete={deleteCounter}
                     />
    ))}
  </ul>
);

export default CountersList;
