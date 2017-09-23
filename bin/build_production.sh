#!/bin/bash

#builds production images

source bin/env.sh

echo "copying universal files"
cp -R ./universal/ ./frontend
cp -R ./universal/ ./backend

echo "building frontend"
./bin/build_frontend.sh
cp ./frontend/dist/assets.json ./backend/
echo "building backend"
dcprod build
#rm ./backend/assets.json
