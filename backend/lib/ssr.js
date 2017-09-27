// Node Modules
import fs from 'fs';
import {basename, join} from 'path';

// Libraries
import React from 'react';
import {renderToString} from 'react-dom/server';

// Redux
import createHistory from 'history/createMemoryHistory'

// Components
import Html from '/backend/lib/Html.js';

function renderApp(url, res, store, assets) {
  const context = {};

  const html = renderToString(
    <Html
      title='💥'
      store={store}
      url={url}
      context={context}
      assets={assets} />
  );

  res.send('<!DOCTYPE html>'+html);
}

export const renderDevPage = function (req, res) {
  renderApp(req.url, res);
}

export const renderPage = function (req, res) {
  const assets = require('dist/assets.json');
  const createStore  = require('/backend/dist/prerender.js');
  const history = createHistory( );
  const store   = createStore(history);

  assets.manifest.text = fs.readFileSync(`dist/${assets.manifest.js}`, 'utf-8');

  renderApp(req.url, res, store, assets);
};
