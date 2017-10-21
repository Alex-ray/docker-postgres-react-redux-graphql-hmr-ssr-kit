import { get, post } from './base.js';

export const countersQuerySchema = ({ limit = 100 }) => (`
  query {
    Counters(limit: ${limit}) {
      id,
      value,
    }
  }
`);

export const counterQuerySchema = ({ id }) => (`
  query {
    Counter(id: ${id}) {
      id,
      value,
    }
  }
`);

export const updateCounterMutation = ({ id, value }) => (`
  mutation {
    Counter(id: ${id}) {
      update({with: {value: ${value}}})
    }
  }
`);

export const createCounterMutation = ({ value = 0 }) => (`
    mutation {
      Counter {
        create({with:{value: ${value}}}}
      }
    }
`);

export const getCounters   = () => (get(countersQuerySchema({ limit: 100 })));
export const getCounter    = (id) => (get(counterQuerySchema({ id })));
export const createCounter = (value) => (get(updateCounterMutation({ value })));
export const updateCounter = (id, value) => (get(updateCounterMutation({ id, value })));
