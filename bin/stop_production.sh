#!/bin/bash
# stop production server

source bin/env.sh
dcprod stop
echo "stopped"