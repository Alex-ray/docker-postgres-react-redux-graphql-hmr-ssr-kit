import { get, post } from './base.js';

export const countersQuerySchema = ({ limit = 100 }) => (`
  query {
    Counters(limit: ${limit}) {
      id,
      value,
      createdAt,
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
    Counter(id: "${id}") {
      update(with: {value: ${value}}) {
        id,
        value,
      }
    }
  }
`);

export const createCounterMutation = ({ value = 0 }) => (`
    mutation {
      Counter {
        create(with:{value: ${value}}) {
          id,
          value,
        }
      }
    }
`);

export const deleteCounterMutation = ({ id }) => (`
  mutation {
    Counter(id: "${id}") {
      delete
    }
  }
`);

export const getCounters   = () => (get(countersQuerySchema({ limit: 100 })));
export const getCounter    = (id) => (get(counterQuerySchema({ id })));
export const createCounter = (value) => (post(createCounterMutation({ value })));
export const deleteCounter = (id) => (post(deleteCounterMutation({ id })));
export const updateCounter = (id, value) => (post(updateCounterMutation({ id, value })));
