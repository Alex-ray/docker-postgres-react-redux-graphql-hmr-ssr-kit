// Libraries
import React, {Component, PropTypes} from 'react';
import path from 'path';
import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';

// Redux
import { Provider } from 'react-redux';

const PROD = process.env.NODE_ENV === 'production';

class Html extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    store: PropTypes.object,
    assets: PropTypes.object
  }

  render () {
    const {
      title,
      assets,
      store,
      url,
      context
    } = this.props;

    const {
      manifest,
      bundle,
      vendor,
      prerender,
    } = assets || {};

    const state = PROD ? JSON.stringify(store.getState()) : JSON.stringify({});

    const initialState = `window.__INITIAL_STATE__ = ${state}`;
    const Layout =  PROD ? require( path.join(__dirname,'dist', 'prerender.js')) : () => {};

    const root = PROD && renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Layout />
        </StaticRouter>
      </Provider>
    );

    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <title>{title}</title>
       {PROD && <link rel="stylesheet" href={'/static/prerender.css'} type="text/css" />}
       {PROD && <link rel="stylesheet" href={'/static/bundle.css'} type="text/css" />}
       </head>
       <body>
         <script dangerouslySetInnerHTML={{__html: initialState}} />
         {PROD ? <div id="mount" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="mount"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {PROD && <script src={vendor.js}/>}
         <script src={PROD ? bundle.js : 'http://localhost:3000/static/bundle.js'} />
       </body>
     </html>
    );
  }

}

export default Html;
