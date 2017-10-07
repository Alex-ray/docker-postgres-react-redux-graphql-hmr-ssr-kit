#!/bin/bash

#builds production images
source bin/env.sh

echo "building frontend"
./bin/build_frontend.sh

echo "copying dependent build files into backend"
cp -R ./frontend/dist/ ./backend/dist/static/
# cp ./frontend/dist/prerender.js ./backend/dist/
# cp ./frontend/dist/prerender.css ./backend/dist/
# cp ./frontend/dist/store.js ./backend/dist/
# cp ./frontend/dist/*_manifest.json ./backend/dist/

echo "building backend"
dcprod build
#rm ./backend/assets.json
