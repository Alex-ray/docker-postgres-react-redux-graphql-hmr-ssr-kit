import React from 'react';

import styles from './counters-page.css';
import { squareButton } from 'universal/styles/button.css';
import { title } from 'universal/styles/typography.css';

import CountersList from 'universal/modules/counter/components/CountersList/CountersList.js';

const CountersPage = ({ counters, createCounter, deleteCounter }) => (
  <div>
    <header className={styles.header}>
      <h1 className={title}>Counters</h1>
      <button className={squareButton} onClick={createCounter}>Create New Counter</button>
    </header>
    <CountersList counters={counters} deleteCounter={deleteCounter}/>
  </div>
);

export default CountersPage;
