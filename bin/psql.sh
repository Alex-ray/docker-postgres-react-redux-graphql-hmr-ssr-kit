#!/bin/bash
# open psql session to production db

source bin/env.sh

dcprod -f docker-compose.db.yml run --rm dbclient psql -h db -U '$DB_USER' '$DB_NAME'
