import React from 'react';
import { Link } from 'react-router-dom';

const CountersListItem = ({ id, value, onDelete }) => (
  <li>
    <Link to={`/counter/${id}`}>Counter id: {id} value : {value}</Link>
    <button onClick={onDelete.bind(null, id)}>Delete</button>
  </li>
);

export default CounterListItem;
