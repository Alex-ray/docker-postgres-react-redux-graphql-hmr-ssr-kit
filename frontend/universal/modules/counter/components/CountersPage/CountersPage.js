import React from 'react';

import CountersList from 'universal/modules/counter/components/CountersList/CountersList.js';

const CountersPage = ({ counters, createCounter, deleteCounter }) => (
  <div>
    <button onClick={createCounter}>Create Counter</button>
    <CountersList counters={counters} deleteCounter={deleteCounter}/>
  </div>
);

export default CountersPage;
