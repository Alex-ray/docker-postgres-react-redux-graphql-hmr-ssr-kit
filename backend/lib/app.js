import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import conf from './conf';
import models from './models';
import api from './api';
import {
  renderDevPage,
  renderPage,
} from './ssr.js';

const PROD = process.env.NODE_ENV === 'production';

const PORT = conf.get('port');
const HOST = conf.get('host');

const STATIC_ASSETS = {
    js: [],
    css: []
};

logger.info(`initializing app with NODE_ENV=${process.env.NODE_ENV}`);

const app = express();

app.use(bodyParser.json());

//used for tests
if (conf.get('serve_static_files')) {
    app.use('/static', express.static('/static'));
}

const render = PROD ? renderPage : renderDevPage;

app.use('/api', api);
app.get('*', render);

export default app;
