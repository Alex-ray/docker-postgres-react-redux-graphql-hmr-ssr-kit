#!/bin/bash
# start production server

source bin/env.sh
dcprod up -d
echo "started"