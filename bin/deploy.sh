#!/bin/bash

#builds production images, 
#initializes database or creates db backup if it was initialized already
#(re)starts prodcution containers

source bin/env.sh

#for init_db.sh
export DOCKER_INIT_DB_CONFIG=$DOCKER_CONFIG_PROD

if  [ $(docker-compose -f docker-compose.yml -f $DOCKER_INIT_DB_CONFIG ps | grep dbdata | wc -l) == 0 ]; then
    ./bin/init_db.sh 
else
    ./bin/backup.sh
fi
./bin/build_production.sh
./bin/stop_production.sh
./bin/start_production.sh