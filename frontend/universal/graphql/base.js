import rxjs from 'rxjs';
import { Observable } from 'rxjs/Observable';

const domain = process.env.API_URL;
const url = `${domain}/graphql`;

export const get = (schema) => {
  return Observable.from(
    fetch(`${url}?query=${schema}`, {
      method: 'GET'
    }).then((data) => (data.json()))
  );
}

export const post = (schema) => {
  return Observable.from(
    fetch(`${url}?query=${schema}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((data) => (data.json()))
  );
}
