#!/bin/bash
# restore a bacakup. arg is a filename that exitsts in backups dir

source bin/env.sh

BACKUP_FILE=$1

if ! [ -f $BACKUP_FILE ]; then
    echo "file $BACKUP_FILE not found"
    exit 1
fi

if [ $(docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_PROD -f docker-compose.db.yml ps | grep "_db_" | grep "Up" | wc -l) != 0 ]; then
    echo "database container running. please stop before trying to restore"
    exit 1
fi

echo "dropping database..."
dcprod -f docker-compose.db.yml run --rm dbclient dropdb -h db -U '$DB_USER' '$DB_NAME'
echo "creating database..."
dcprod -f docker-compose.db.yml run --rm dbclient createdb -h db -U '$DB_USER' -O '$DB_USER $DB_NAME'
echo "restoring database..."
dcprod -f docker-compose.db.yml run --rm dbclient pg_restore -Fc -h db -U '$DB_USER' -d '$DB_NAME' $BACKUP_FILE
echo "restore complete"