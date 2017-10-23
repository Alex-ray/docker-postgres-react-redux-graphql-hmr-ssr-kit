import React from 'react';

import CountersListItem from 'universal/modules/counter/components/CounterListItem/CounterListItem.js';

const CountersList = ({ counters, deleteCounter}) => (
  <ul>
    {counters.map((counter) => (
      <CounterListItem key={`counter-list-item-{${counter.get('id')}`}
                       value={counter.get('value')}
                       id={counter.get('id')}
                       onDelete={deleteCounter}
                     />
    ))}
  </ul>
);
