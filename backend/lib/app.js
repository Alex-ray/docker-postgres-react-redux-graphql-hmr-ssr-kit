import express from 'express';
import bodyParser from 'body-parser';

import graphqlHTTP from 'express-graphql';
import schema from './graphql';

import logger from './logger';
import conf from './conf';
import models, { sequelize } from './models';
import {
  renderDevPage,
  renderPage,
} from './ssr.js';

const PROD = process.env.NODE_ENV === 'production';

const PORT = conf.get('port');
const HOST = conf.get('host');

logger.info(`initializing app with NODE_ENV=${process.env.NODE_ENV}`);

const app = express();

app.use(bodyParser.json());

//used for tests
if (conf.get('serve_static_files')) {
    app.use('/static', express.static('/static'));
}

app.post('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: false
}));

app.get('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: !PROD
}));

const render = PROD ? renderPage : renderDevPage;

app.get('*', render);

export default app;
