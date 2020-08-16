#! /bin/bash

deployTarget=build.tar.gz
buildDir=build
deployServer=skrao-app-server
deployPath=/home/skrao/Dev/apps

echo "Starting UI Deployment Script"
npm run build
echo "NPM Build completed"
tar -cvzf  $deployTarget ${buildDir}/*
echo "NPM tar completed"
rm -rf ${buildDir}
scp ${deployTarget} $(whoami)@${deployServer}:${deployPath}
rm -rf ${deployTarget}