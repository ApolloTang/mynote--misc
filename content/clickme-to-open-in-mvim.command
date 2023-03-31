#!/usr/bin/env sh
cd -- $(dirname "$0")
echo $(pwd)
mvim -c 'GGnerdPreview' main.md

