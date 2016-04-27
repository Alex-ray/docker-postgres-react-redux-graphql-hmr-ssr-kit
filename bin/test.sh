#!/bin/bash


source bin/env.sh

#build frontend unless skipping explicitly
if ! [[ $* == *--skipbuild* ]]; then
    ./bin/build_frontend.sh
    ./bin/npm_backend.sh i
else
    echo "skipping frontend build..."
fi

if ! [[ $* == *--dontstop* ]]; then
    function finish {
        docker-compose -f docker-compose.test.yml stop
    }
    trap finish EXIT
fi

docker-compose -f docker-compose.test.yml run --rm testserver npm run test "$@"


