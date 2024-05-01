#!/usr/bin/env sh
cd -- $(dirname "$0")
echo $(pwd)
pipenv run jupyter lab


