#!/bin/bash

#compile frontend production build to frontend/dist

source bin/env.sh

echo "building frontend"
dcdev build
./bin/npm_frontend.sh i -q
./bin/npm_frontend.sh run build-prod