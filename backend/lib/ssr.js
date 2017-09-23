// Node Modules
import fs from 'fs';
import {basename, join} from 'path';

// Configurations
import conf from './conf';

// Libraries
import React from 'react';
import {renderToString} from 'react-dom/server';

// Redux
import createHistory from 'history/createMemoryHistory'

// Components
import Html from './Html.js';

function renderApp(url, res, assets) {
  const context = {};

  const html = renderToString(
    <Html
      title='💥'
      url={url}
      context={context}
      assets={assets} />
  );

  res.send('<!DOCTYPE html>'+html);
}

export const renderPage = function (req, res) {
  const history = createHistory( );

  const assets = conf.get('serve_static_files') ?
                    require('../../static/assets.json') :
                    require('../assets.json');


  if (conf.get('webpack_dev_server')) {
    assets.devServer = {js: 'http://localhost:3000/static/bundle.js'};
  }

  assets.manifest.text = fs.readFileSync(
    join(__dirname, '..', '..', 'frontend', 'dist', basename(assets.manifest.js)),
    'utf-8'
  );

  renderApp(req.url, res, assets);
};
