export DOCKER_CONFIG_PROD=${DOCKER_CONFIG_PROD:-docker-compose.production.yml}
export DOCKER_CONFIG_DEV=${DOCKER_CONFIG_DEV:-docker-compose.development.yml}


dcdev() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_DEV "$@"
}

dcprod() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_PROD "$@"
}