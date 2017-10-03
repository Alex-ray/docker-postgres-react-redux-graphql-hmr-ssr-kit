import express from 'express';
import logger from './logger';
import conf from './conf';
import app from './app';

const PORT = conf.get('port');
const HOST = conf.get('host');

app.listen(PORT, HOST, function() {
    logger.info(`app started on ${HOST}:${PORT}`);
});