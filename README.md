# ⚡ 🔮 BLK STACK 🌙 ⚡

## 💭 What is it?

This is the anti framework, framework. A project made up of specific technologies that are easily interchangable.

*Docker: -* This is where our stack starts our app is split up into three containers an Nginx container for serving static files, a Node.js container for the backend and a Postgres container for our database. This also enables for cross platform development and deployment. Robust, Flexible and Dead Simple.

*Postges: -* The tried, trued and tested defacto databse. In this project I use the popular sequlize ORM.

*GraphQL: -* A more effecient way to query data from a server. A better way to develop with the interactive graphql interface. This also provides an abstraction layer between our api and database that provides additional flexiblity if we every need to swap it out.

*React, Redux, React Router: -* At this point its almost and industry standard. Undirectional data flow, fast render times and extremely flexible.

*Redux Observables (Rxjs): -* RxJS 5-based middleware for Redux. Compose and cancel async actions to create side effects and more.

*Server Side Rendering: -* We use server side rending by utilizing Universal javascript on the Node.js server. Because were using React its simply a matter of rendering React views on the server.

*Code Splitting: -* Split code into bundles so that code is asynchronously loaded by the client.

*Hot Module Reloading: -* Replaces modules that have been changed in real time while preserving the state.

## ⚙ How?

The application works like this.

We use shell scripts to handle docker and related tasks, these are located in the `bin` directory. e.x. `./bin/develop.sh` or `./bin/deploy.sh` (more details on this below)

The shell scripts sets up our docker containers, migrates the database, installs dependencies, compiles source code and launches our servers.

The Nginx server handles static file requests and the Node.js Express server handles all other request. When a request is made we render our React application on the server based on that route and return the output as a html.

Once the Html is sent to the client our React application takes over.

On build our application is split up into bundles for each route. Only that routes bundle is served to the client; when a new route is entered a new bundle is requested and sent to the client.

In addition our core dependencies are split into a seperate bundles and cached our our Nginx server. Everything is fingerprinted.

When developing we spin up a seperate frontend server that handles hot module reloading.

On a more techinical note we use all sorts of goodies that I leave you to explore, things like `reselect`, `redux-actions`, `immutablejs`, `cssnext`, `react-router-redux` etc...

Last but not least I have to give a huge shout out to @Producters for the https://github.com/Producters/docker-node-react-starter which is what this project is based off of.

## 🛠 Setup
Get latest docker (1.11+) & docker-compose (1.7+):  
https://www.docker.com/  
https://docs.docker.com/compose/

Pull down the repository:
```sh
git clone git@github.com:Alex-ray/docker-postgres-react-redux-graphql-hmr-ssr-kit.git
```

Start the dev server:
```sh
./bin/develop.sh
```
Wait for docker to set up dev env, then open [http://localhost:8000](http://localhost:8000)

## production mode

```sh
# build production images, create db backup & start
./bin/deploy.sh

# stop server
./bin/stop_production.sh

# start srever
./bin/start_production.sh
```

In prod mode sources are added to docker image rather than mounted from host. Nginx serves static files, proxy pass to node for app. Logs in `logs` dir.

#### enable ssl
Copy your .key and .crt files to `nginx/ssl` and run `./bin/deploy.sh`.

## install dependencies

```sh
# frontend
./bin/npm_frontend.sh install [package] --save-dev

# backend
./bin/npm_backend.sh install [package] --save
```

## database management

```sh
# open psql session
./bin/psql.sh

# create a backup in backups dir
./bin/backup.sh

# restore from a backup in backups dir (server must be stopped)
./bin/restore.sh backups/somebackup.bak
```

## layout

```
bin/                          - various utility scripts

docker-compose.yml            - base docker compose config
docker-compose.overrides.yml  - development docker compose config
docker-compose.production.yml - production docker compose config

frontend/                     - frontend stuff
frontend/package.json         - npm package file with frotnend dependencies
frontend/dist/                - compiled and production ready client side code
frontend/universal/           - universal javascript code
frontend/index.js             - js entry point. include other js deps here

backend/                      - backend stuff
backend/lib/                  - node app
backend/lib/index.js          - entry point
backend/lib/models/           - sequelize model definitions
backend/lib/migrations/       - sequelize migrations
backend/config/               - config
backend/config/default.json   - config defaults
backend/views/                - pug templates
backend/Dockerfile            - production build dockerfile
backend/media/                - user uploads @TODO
backend/package.json          - npm pacakge file with backend & test depos
backend/nightwatch.json       - nigthwatch config
backend/tests/specs/*         - nightwatch test specs

logs/                         - in prod mode app, nginx logs go here
nginx/                        - nginx stuff for prod mode
nginx/ssl/                    - put key & cert here if you use ssl
nginx/nginx_nossl.conf        - nginx conf if no ssl is used
nginx/nginx_ssl.conf          - nginx conf for deploy with ssl
```

## config

Config files for backend are located at `config/*.json`.  
If `config/[NODE_ENV].json` exists, values are loaded from it first. Then defaults are filled in from `config/default.json`;

## logging

[Winston](https://github.com/winstonjs/winston) is used for logging. Loggers and transport are configured via config files, see `config/default.json`.


```js
import logger, {getLogger} from 'winston';

//default logger
logger.info('logging to default');
logger.error('bad thing happened');


//custom logger, define transports in config
let netlogger = getLogger('network');
netlogger.info('network stuff');
```

## migrations

```sh
# create new migration
./bin/sequelize.sh migration:create --name some_migration

# run migrations
./bin/sequelize.sh db:migrate
```

## tests

e2e tests are implemented using [nightwatch.js](http://nightwatchjs.org/). Test specs are located at `backend/tests/specs/`

```sh

#run tests
./bin/test.sh

# skip frontend build (eg, running tests repeatedly)
./bin/test.sh --skipbuild

# keep selenium, vnc server & database running after tests end
# for fast next run & to keep vnc from disconnecting if debuggin
./bin/test.sh --dontstop

# run a particular test file only
./bin/test.sh -- --test tests/specs/auth.js

# run particular test case only
./bin/test.sh -- --test tests/specs/auth.js --testcase 'User can login via auth0'

```

To debug tests it's possible to vnc into selenium container while its running at localhost:5900 and view the browser. Password is `secret`.

```sh
sudo apt-get install vinagre # vnc client

vinagre localhost:5900
```
