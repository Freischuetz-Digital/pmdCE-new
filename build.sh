#!/bin/sh

# cleaning the build dir
sencha ant clean

# building the app
sencha app build

# get additional stuff for exist-db
ant build-plus

# build xar
ant

cd ..