#!/bin/bash
node update-version.js $1
git tag -a $1 -m $1
git push origin $1