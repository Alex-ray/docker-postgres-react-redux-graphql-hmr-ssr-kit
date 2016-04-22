#!/bin/bash
# restore a bacakup. arg is a filename that exitsts in backups dir

source bin/env.sh

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
    echo "one argument required - backup file to restore"
    exit 1
fi

if ! [ -f $BACKUP_FILE ]; then
    echo "file $BACKUP_FILE not found"
    exit 1
fi

if [ $(docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_PROD -f docker-compose.db.yml ps | grep "_db_" | grep "Up" | wc -l) != 0 ]; then
    echo "database container running. please stop before trying to restore"
    exit 1
fi

echo "restoring database..."
dcprod -f docker-compose.db.yml run --rm dbclient bash -c 'dropdb -h db -U $POSTGRES_USER $POSTGRES_DB && createdb -h db -U $POSTGRES_USER -O $POSTGRES_USER $POSTGRES_DB && pg_restore -Fc -h db -U $POSTGRES_USER -d $POSTGRES_DB '"$BACKUP_FILE"
echo "restore complete"