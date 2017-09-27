#!/bin/bash

#builds production images
source bin/env.sh

echo "building frontend"
./bin/build_frontend.sh

echo "copying dependent build files into backend"
cp ./frontend/dist/assets.json ./backend/dist/
cp ./frontend/dist/prerender.js ./backend/dist/
cp ./frontend/dist/prerender.css ./backend/dist/
cp ./frontend/dist/store.js ./backend/dist/

echo "building backend"
dcprod build
#rm ./backend/assets.json
