#!/bin/bash
pg_dump -Fc -h db -U $POSTGRES_DB -d $POSTGRES_USER -f  $1