import rxjs from 'rxjs';
import { Observable } from 'rxjs/Observable';

const domain = process.env.API_URL;
const url = `${domain}/graphql`;

export const get = ({ schema }) => {
  return Observable.from(
    fetch(`${url}?query=${schema}`, {
      method: 'GET'
    })
  );
}

export const post = ({ schema }) => {
  return Observable.from(
    fetch(`${url}`, {
      method: 'POST',
      body: JSON.stringify(schema),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  );
}
