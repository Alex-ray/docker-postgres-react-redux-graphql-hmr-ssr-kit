#!/bin/bash

#start development server on :8000

source bin/env.sh

dcdev build
./bin/init_db.sh
echo "installing backend deps"
./bin/npm_backend.sh i -q
echo "installing frontend deps"
./bin/npm_frontend.sh i -q
echo "starting"
dcdev up
