#!/usr/bin/env sh
cd -- $(dirname "$0")
echo $(pwd)
/Applications/MacVim.app/Contents/bin/mvim -c 'GGnerdPreview' main.md

