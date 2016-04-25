#!/bin/bash

source bin/env.sh

dcprod run --rm backend ./node_modules/.bin/sequelize $@