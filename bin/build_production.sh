#!/bin/bash

#builds production images
source bin/env.sh

echo "building frontend"
./bin/build_frontend.sh

echo "copying dependent build files into backend"
cp -R ./frontend/dist/ ./backend/dist/static/

echo "building backend"
dcprod build
