# docker-node-react-starter

This is a starter project for a node + react app that uses docker for dev enironment.  
Docker and docker-compose is all you need to develop, build & deploy, run development or production mode with a single command.

## stack

* stylus
* react
* redux
* sequelize


## get started

Get latest docker (1.11+) & docker-compose (1.7+):  
https://www.docker.com/  
https://docs.docker.com/compose/

Pull seed to your project:

```sh
git init
git remote add starter git@github.com:Producters/docker-node-react-starter.git
git pull starter master
```

Start dev server:
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
frontend/src/js/              - javascript code
frontend/src/js/index.js      - js entry point. include other js deps here
frontend/src/style/           - stylesheets       
frontend/src/style/index.styl - stylesheet entry point. include other styl files here

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
